import { userStatus } from "@core/constants/userstatus.enum";
import { IUsersDto } from "@domain/users/users.dto";

export const usersFakeData: IUsersDto[] = [
    {
        id: 12345,
        area: 5,
        birthDate: '2022/04/04',
        email: 'example@email.com',
        firstName: 'User',
        lastName: 'Test',
        salary: 3000000,
        state: userStatus.Active
    }
]