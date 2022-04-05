import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { localStorageProvider } from '@domain/localstorage/localstorage.provider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [localStorageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
