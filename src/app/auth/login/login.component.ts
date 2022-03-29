import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  usuario: LoginUsuario | undefined;
  isLogged = false;
  isLoginFail =false;
  roles: string[] = [];
  errorMsg ='';


  constructor(private authService: AuthService, private tokenService:TokenService, private route: Router) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.usuario = new LoginUsuario(this.form.userName, this.form.password);


    this.authService.login(this.usuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);


        console.log(this.usuario);
        this.isLogged =true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
        window.location.reload();
      },
      (err: any) => {
        (this.form.usuario);
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
      }
    )
  }

}
