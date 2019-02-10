import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {Servercomponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ListemployeesComponent } from './employee/listemployees.component';
import { ProductComponent } from './product/product.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    Servercomponent,
    ServersComponent,
    ListemployeesComponent,
    ProductComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    ProductCreateComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

