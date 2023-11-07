import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-agregar-pacientes',
  templateUrl: './agregar-pacientes.component.html',
  styleUrls: ['./agregar-pacientes.component.css']
})
export class AgregarPacientesComponent implements OnInit {

  pacienteNuevo: FormGroup = new FormGroup({});


  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarPacientesComponent>, private formBuilder: FormBuilder,
     private pacienteService: PacienteService) {}


  ngOnInit() {
    this.pacienteNuevo = this.formBuilder.group({
        nombre_paciente: ['', Validators.required],
        apellido_paciente: ['', Validators.required],
        fecha_nacimiento: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        estado: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.pacienteNuevo.valid) {
      const nuevoPaciente = this.pacienteNuevo.value;
      this.pacienteService.agregarPaciente(nuevoPaciente);
      this.pacienteNuevo.reset();
    }
    this.dialogRef.close(); 
    this.redirectToFactura();
  } 

  redirectToFactura() {
    this.router.navigate(['Pac']);
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}