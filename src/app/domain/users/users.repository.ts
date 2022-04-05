import { IUsersDto } from "./users.dto";

export interface IUsersRepository {
    createUser(user: IUsersDto): void;
    editUser(userData: IUsersDto): void;
    readAll(): IUsersDto[];
    delete(id: number): void;
}