import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomtableComponent } from './customtable/customtable.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customtable',
    pathMatch: "full"
  },
  {
    path: 'customtable',
    component: CustomtableComponent,
  }

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomtableRoutingModule { }
