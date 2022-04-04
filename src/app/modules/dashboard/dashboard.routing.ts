import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const dashboardRoutes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        children: [
            { path: '', loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule) },
            { path: '', loadChildren: ()=> import('./areas/areas.module').then(m => m.AreasModule) },
        ] 
    }
]