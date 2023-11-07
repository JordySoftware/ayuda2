import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Paciente } from '../../interfaces/paciente';
import { PacienteService } from '../../services/paciente.service';
import { AgregarPacientesComponent } from '../agregar-pacientes/agregar-pacientes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})

export class PacientesComponent implements OnInit{

  displayedColumns: string[] = ['nombre_paciente', 'apellido_paciente', 'fecha_nacimiento', 'direccion', 'telefono', 'estado'];

  dataSource = new MatTableDataSource<Paciente>();


  constructor(private pacienteService: PacienteService, private dialog: MatDialog, private router: Router) {}

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

  ngOnInit() {
    // Obtén los datos del dataSource directamente desde el servicio
    this.dataSource = this.pacienteService.getData();

    
  } 

  openDialogAgregar() {
    this.dialog.open(AgregarPacientesComponent, {
    });


  this.dataSource = this.pacienteService.getData();

  }




 
}
