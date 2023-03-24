import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomtableComponent } from './customtable/customtable/customtable.component';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () => import('./customtable/customtable.module').then(m => m.CustomtableModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./create-form/create-form.module').then(f => f.CreateFormModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then(c => c.CoreModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
