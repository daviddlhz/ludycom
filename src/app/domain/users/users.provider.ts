import { Provider } from "@angular/core";
import { UserServices } from "@core/services/users.service";

export const usersProvider: Provider = {
    provide: 'usersRepository',
    useClass: UserServices
}