import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: '',
    redirectTo: 'template-form',
    pathMatch: 'full'
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRoutingModule { }
