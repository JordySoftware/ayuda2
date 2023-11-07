import { Component } from '@angular/core';
import { Interfaces } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: Interfaces = {
    usuario: '',
    contra: ''
  }
  iniciarSesion(){  
    if(this.user.usuario === 'adm' && this.user.contra === '1234'){
      this.authService.obtenerUsuario(this.user);
      this.router.navigate(['menu']);
    }
   
  }
      
  constructor( private router: Router, private authService: LogService ) { }
}
