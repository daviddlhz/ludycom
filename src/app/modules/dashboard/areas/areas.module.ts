import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas.component';
import { RouterModule } from '@angular/router';
import { areasRoutes } from './areas.routing';



@NgModule({
  declarations: [
    AreasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(areasRoutes),
  ]
})
export class AreasModule { }
