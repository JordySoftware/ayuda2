import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultaService } from '../../service/consulta.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Consulta } from '../../interfaces/consulta';
import { AgregarConsultaComponent } from '../agregar-consulta/agregar-consulta.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{

  displayedColumns: string[] = ['nombre_medico', 'nombre_paciente', 'fecha_consulta', 'hora', 'diagnostico', 'tratamiento', 'estado'];

  dataSource = new MatTableDataSource<Consulta>();


  constructor(private consultaService: ConsultaService, private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    // Obtén los datos del dataSource directamente desde el servicio
    this.dataSource = this.consultaService.getData();

    
  } 

  openDialogAgregar() {
    this.dialog.open(AgregarConsultaComponent, {
    });


  this.dataSource = this.consultaService.getData();


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
