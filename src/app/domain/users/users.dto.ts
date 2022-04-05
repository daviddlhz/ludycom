import { userStatus } from "@core/constants/userstatus.enum";

export interface IUsersDto {
    id: number,
    firstName: string,
    lastName: string,
    birthDate: string,
    email: string,
    area: number,
    salary: number,
    state: userStatus
}