import { Component, Inject, OnInit } from '@angular/core';
import { storageKey } from '@core/constants/storagekey.enum';
import { usersFakeData } from '@core/helpers/fake-data';
import { ILocalStorageRepository } from '@domain/localstorage/localstorage.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ludycom';

  constructor(@Inject('localStorageRepository') private localStorageService: ILocalStorageRepository) { }

  ngOnInit(): void {
      if (!localStorage.hasOwnProperty(storageKey.USERS_INFORMATION)) {
        this.localStorageService.save(storageKey.USERS_INFORMATION, usersFakeData);
      }
  }
}
