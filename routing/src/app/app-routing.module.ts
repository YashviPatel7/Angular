import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'employee',
    // loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
    component: EmployeeListComponent,
    children: [
      { path: 'employee-list/:id', component: EmployeeListComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListComponent, EmployeeListComponent]
