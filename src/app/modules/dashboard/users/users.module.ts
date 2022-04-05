import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './users.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { usersProvider } from '@domain/users/users.provider';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
  ],
  providers: [usersProvider]
})
export class UsersModule { }
