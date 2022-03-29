import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";




// indicamos la cabecera que el contenido sera json
const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoUrl ='http://localhost:8080/api/products'; // cadena que contiene la ruta del servicio


  constructor( private httpClient: HttpClient) { }
  
    public lista():Observable<Producto[]> {
      return this.httpClient.get<Producto[]>(this.productoUrl + '/list', cabecera);
      
    }
    public crear(producto: Producto): Observable<any> {
      return this.httpClient.post<any>(this.productoUrl + '/new', producto, cabecera);
    }
    public detalle(id: number): Observable<Producto> {
      return this.httpClient.get<Producto>(this.productoUrl + `/detail/${id}`,cabecera);
    }

    public editar(producto: Producto, id: number): Observable<any>{
      return this.httpClient.put<any>(this.productoUrl + `/update/${id}`, producto,cabecera);
    }

   public borrar(id: number):Observable<any> {
     return this.httpClient.delete<any>(this.productoUrl + `/delete/${id}`,cabecera);
   }



}
