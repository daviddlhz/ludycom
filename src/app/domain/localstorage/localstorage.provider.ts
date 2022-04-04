import { Provider } from "@angular/core";
import { LocalStorageService } from "@core/services/localstorage.service";

export const localStorageProvider: Provider = {
    provide: 'localStorageRepository',
    useClass: LocalStorageService
}