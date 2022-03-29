import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;

  mensajeErr = '';
  mensajeOk = '';

  failInit = false;

  constructor(
     private productoService: ProductoService,
     private router: Router,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detalle(id).subscribe(
      data => {
        this.form.productName = data.productName;
        this.form.price = data.price;
      },
      (err : any) => {
        this.failInit = true;
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.editar(this.form, id).subscribe(
      data => {
      this.actualizado = true;
      this.failActualizado = false;
      this.mensajeOk = data.mensaje;
      console.log("OnUpdate----------------------------------"+data)
      }

    ), (err: any) => {
      console.log(" error----------------------"+err.error.mensaje);
      
      this.actualizado = false;
      this.failActualizado = true;
      this.mensajeErr = err.error.mensaje;
    }
    
  }

  volver(): void {
    window.history.back();
  }

}
