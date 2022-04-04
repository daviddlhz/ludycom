import { Injectable } from "@angular/core";
import { IUsersDto } from "@domain/users/users.dto";
import { IUsersRepository } from "@domain/users/users.repository";

@Injectable()
export class UserServices implements IUsersRepository { 

    createUser(userData: IUsersDto): boolean {
        return true;
    }

    readAll(): IUsersDto[] {
        return []
    }

    delete(id: number): boolean {
        return true;
    }

    editUser(userData: IUsersDto): boolean {
        return false;
    }
}