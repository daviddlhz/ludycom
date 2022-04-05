import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCreated, userEdited } from '@core/constants/sweetalert.options';
import { IUsersDto } from '@domain/users/users.dto';
import { IUsersRepository } from '@domain/users/users.repository';
import Swal from 'sweetalert2';

@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('buttonCloseModal') buttonCloseModal!: ElementRef<HTMLButtonElement>;

    usersData!: IUsersDto[];
    status: string[] = ['active', 'inactive'];
    usersForm!: FormGroup;
    deleteId!: number;

    constructor(
      @Inject('usersRepository') private userService: IUsersRepository,
      private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.fetchUserData();
      this.buildCreateEditForm();
    }

    fetchUserData(): void {
      this.usersData = this.userService.readAll();
    }

    buildCreateEditForm(): void {
        this.usersForm = this.formBuilder.group({
          id: ['', [Validators.required]],
          firstName: ['', [Validators.required, Validators.maxLength(50)]],
          lastName: ['', [Validators.required, Validators.maxLength(50)]],
          birthDate: ['', [Validators.required]],
          email: ['', Validators.required],
          area: ['', [Validators.required]],
          salary: ['', [Validators.required]],
          state: ['', Validators.required],
        });
    }

    createUser(): void {
      this.userService.createUser(this.usersForm.value);
       this.closeModal();
       Swal.fire(userCreated);
       this.fetchUserData();
    }

    modalWithUserData(user: IUsersDto): void {
      this.usersForm.patchValue(user)
    }

    editUser(): void {
      this.userService.editUser(this.usersForm.value);
      this.closeModal();
      Swal.fire(userEdited);
      this.fetchUserData();
    }

    deleteUser(id: number): void {
      this.userService.delete(id);
      this.closeModal();
      Swal.fire(userEdited);
      this.fetchUserData();
    }

    closeModal(): void {
      this.buttonCloseModal.nativeElement.click();
    }

    clearForm(): void {
      this.usersForm.reset();
    }

    selectDeleteId(id: number) {
      this.deleteId = id;
    }

}
