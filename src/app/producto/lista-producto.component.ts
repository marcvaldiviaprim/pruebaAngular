import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';




@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  @Input() user?:string;

  productos: Producto[] = []; // creamos el array de productos

  //importamos el service al constructor
  constructor(private productoService: ProductoService , private router: Router) { }
  ngOnInit(): void {
    this.cargarProductos();// cargamos los productos al cargar el componente
    console.log(this.user);
    
  }
  cargarProductos(){
    this.productoService.lista().subscribe(
      (data) => {
        this.productos = data;
        console.log(this.productos);
        
      },
      (err: any) => {
        this.router.navigate(['']);
      }
    )
  }

  onDelete(id : any): void {
    
    if(confirm('¿Estás seguro?')){
      this.productoService.borrar(id).subscribe(
        data => {
          this.cargarProductos();
        }
      )
    }
  }

}
