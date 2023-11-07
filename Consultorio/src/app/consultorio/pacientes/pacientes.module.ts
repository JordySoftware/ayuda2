import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { AgregarPacientesComponent } from './pages/agregar-pacientes/agregar-pacientes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PacientesModule { }
