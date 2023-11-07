import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { AgregarUsuariosComponent } from '../agregar-usuarios/agregar-usuarios.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  displayedColumns: string[] = ['nombre_usuario', 'id_perfil', 'estado'];

  dataSource = new MatTableDataSource<Usuario>();


  constructor(private usuarioService: UsuarioService, private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    // Obtén los datos del dataSource directamente desde el servicio
    this.dataSource = this.usuarioService.getData();

    
  } 

  openDialogAgregar() {
    this.dialog.open(AgregarUsuariosComponent, {
    });


  this.dataSource = this.usuarioService.getData();


  } 

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
