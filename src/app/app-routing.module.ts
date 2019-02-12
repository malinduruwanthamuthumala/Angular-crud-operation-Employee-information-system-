import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ListemployeesComponent} from './employee/listemployees.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
const routes: Routes = [
  // {
  //   path: 'products',
  //   component: ProductComponent,
  //   data: { title: 'List of Products' }
  // },
  {
    path: 'employee',
    component: ListemployeesComponent,
    data: { title: 'List of employees' }
  },
  {
    path:'product-create',
    component:ProductCreateComponent,
  },
  {
    path: 'products-delete/:id',
    component: ProductDeleteComponent,
    data: { title: 'delete Products' }
  },
  {
    path: 'products-add',
    component: ProductCreateComponent,
    data: { title: 'add Products' }
  },
  {
    path: 'products-edit/:id',
    component: ProductEditComponent,
    data: { title: 'edit Products' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
