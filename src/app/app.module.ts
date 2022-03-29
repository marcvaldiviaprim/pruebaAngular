import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { interceptorProvider } from './services/producto-interceptor.service';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegistroComponent } from './auth/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    RegistroComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
