import { ThisReceiver } from "@angular/compiler";
import { Inject, Injectable } from "@angular/core";
import { storageKey } from "@core/constants/storagekey.enum";
import { ILocalStorageRepository } from "@domain/localstorage/localstorage.repository";
import { IUsersDto } from "@domain/users/users.dto";
import { IUsersRepository } from "@domain/users/users.repository";

@Injectable()
export class UserServices implements IUsersRepository { 

    constructor(@Inject('localStorageRepository') private localStorageService: ILocalStorageRepository) { }

    createUser(user: IUsersDto): void {  
        const usersData: IUsersDto[] = this.localStorageService.getAll(storageKey.USERS_INFORMATION);
        usersData.push(user);
        this.localStorageService.save(storageKey.USERS_INFORMATION, usersData);
    }

    readAll(): IUsersDto[] {
        return this.localStorageService.getAll(storageKey.USERS_INFORMATION);
    }

    delete(id: number): void {
        const usersData = this.localStorageService.getAll(storageKey.USERS_INFORMATION);

        usersData.find((user, index) => {
            if (user.id == id) {
                this.localStorageService.save(storageKey.USERS_INFORMATION, usersData.splice(index, 1));
            }
        })
    }

    editUser(userData: IUsersDto): void {
        const usersData = this.localStorageService.getAll(storageKey.USERS_INFORMATION);

        usersData.find((user, index) => {
            if (user.id == userData.id) {
                usersData[index] = userData;
                this.localStorageService.save(storageKey.USERS_INFORMATION, usersData);
            }
        })
    }
}