import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/auth'

  constructor(private httpClient: HttpClient) {  }
      public login(usuario: LoginUsuario): Observable<JwtModel> {
        
        console.log("-----"+ this.authUrl + '/login');
        return this.httpClient.post<JwtModel>(this.authUrl + '/login', usuario, cabecera);
      }

      public registro(usuario: NuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.authUrl+ '/new', usuario,cabecera);
      }

}
