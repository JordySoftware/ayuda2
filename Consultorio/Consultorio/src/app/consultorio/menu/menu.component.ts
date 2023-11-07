import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) { }

  cerrarSesion() {

    this.router.navigate(['login']);
  }

  pacientes() {

    this.router.navigate(['Pac']);
  }

  inicio() {

    this.router.navigate(['menu']);
  }

  consultas() {

    this.router.navigate(['con']);
  }

  perfiles() {

    this.router.navigate(['perfil']);
  }

  usuarios() {

    this.router.navigate(['user']);
  }

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
}
}