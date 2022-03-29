import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any = {};
  comprobarToken: boolean = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.info = {
      token: this.tokenService.getToken(),
      nombreUsuario: this.tokenService.getUserName(),
      authorities: this.tokenService.getAuthorities()
    };
    if(this.info.token != null){
      this.comprobarToken = true;
    }
  }

}
