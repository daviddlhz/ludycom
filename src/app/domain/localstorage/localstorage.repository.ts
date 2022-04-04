import { storageKey } from "@core/constants/storagekey.enum";
import { IUsersDto } from "@domain/users/users.dto";

export interface ILocalStorageRepository {
  save(key: storageKey, userData: IUsersDto | IUsersDto[]): void;
  getValue(key: storageKey): IUsersDto;
  getAll(key: storageKey): IUsersDto[];
  delete(key: storageKey): void;
}
