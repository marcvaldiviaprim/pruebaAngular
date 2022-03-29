import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  form: any = {};
  producto!: Producto;
  creado = false;
  failProducto = false;
  mensajeFail = '';
  mensajeOk = '';


  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{

    this.productoService.crear(this.form).subscribe(
      data => {
        this.mensajeOk = data.mensaje;
        this.creado = true;
        this.failProducto = false;
      },
      err => {
        console.log(err)
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failProducto = true;
      }
      );
    }
      volver(): void{
        window.history.back();
      }
    }


