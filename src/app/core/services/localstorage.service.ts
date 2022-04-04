import { Injectable } from '@angular/core';
import { ILocalStorageRepository } from '@domain/localstorage/localstorage.repository';
import { IUsersDto } from '@domain/users/users.dto';

@Injectable()
export class LocalStorageService implements ILocalStorageRepository {
  save(key: string, userData: IUsersDto): void {
    localStorage.setItem(key, JSON.stringify(userData));
  }

  getValue(key: string): IUsersDto {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  getAll(key: string): IUsersDto[] {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }
}
