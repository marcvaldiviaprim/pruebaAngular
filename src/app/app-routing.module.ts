import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';

import { GuardService as guard } from './services/guard.service';
import { UserComponent } from './user/user.component';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path: 'detalle/:id', component: DetalleProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path: 'nuevo', component:NuevoProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'actualizar/:id', component: EditarProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},


  // user y admin

  {path: 'admin',component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'user',component:UserComponent, canActivate: [guard], data: {expectedRol: ['user']}},
  
  
  
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**',redirectTo: 'home',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
