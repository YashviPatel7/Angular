import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomtableRoutingModule } from './customtable-routing.module';
import { CustomtableComponent } from './customtable/customtable.component';


@NgModule({
  declarations: [
    CustomtableComponent
  ],
  imports: [
    CommonModule,
    CustomtableRoutingModule
  ]
})
export class CustomtableModule { }
