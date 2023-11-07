import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PerfilService } from '../../services/perfil.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Perfil } from '../../interfaces/perfil';
import { AgregarPerfilComponent } from '../agregar-perfil/agregar-perfil.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  displayedColumns: string[] = ['nombre', 'descripcion', 'estado'];

  dataSource = new MatTableDataSource<Perfil>();


  constructor(private perfilService: PerfilService, private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    // Obtén los datos del dataSource directamente desde el servicio
    this.dataSource = this.perfilService.getData();

    
  } 

  openDialogAgregar() {
    this.dialog.open(AgregarPerfilComponent, {
    });


  this.dataSource = this.perfilService.getData();


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