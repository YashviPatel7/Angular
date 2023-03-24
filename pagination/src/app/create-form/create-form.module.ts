import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFormRoutingModule } from './create-form-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    CreateFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateFormModule { }
