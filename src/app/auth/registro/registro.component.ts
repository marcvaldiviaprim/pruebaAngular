import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: any = {};
  private usuario: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';
    
  
  constructor(private authService : AuthService) { }


  ngOnInit(): void {
  }

    onRegister(){
      this.usuario = new NuevoUsuario(this.form.name, this.form.userName, this.form.email, this.form.password);
      this.authService.registro(this.usuario).subscribe(
        data => {
          this.isRegister = true;
          this.isRegisterFail = false;
        },
        (err: any) =>{
          console.log(err.error);
          this.errorMsg = err.error.message;
          this.isRegister =false;
          this.isRegisterFail = true;

        }
      )

    }


}
