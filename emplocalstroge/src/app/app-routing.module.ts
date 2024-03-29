import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'employee',
    loadChildren:()=>import('./employee-detail/employee-detail.module').then(m=>m.EmployeeDetailModule)
  },
  {
    path: '',
    redirectTo:'employee',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
