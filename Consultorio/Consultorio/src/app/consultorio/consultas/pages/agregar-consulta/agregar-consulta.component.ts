import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ConsultaService } from '../../service/consulta.service';

@Component({
  selector: 'app-agregar-consulta',
  templateUrl: './agregar-consulta.component.html',
  styleUrls: ['./agregar-consulta.component.css']
})
export class AgregarConsultaComponent implements OnInit {

  consultaNueva: FormGroup = new FormGroup({});


  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarConsultaComponent>, private formBuilder: FormBuilder,
     private consultaService: ConsultaService) {}


  ngOnInit() {
    this.consultaNueva = this.formBuilder.group({
        nombre_medico: ['', Validators.required],
        nombre_paciente: ['', Validators.required],
        fecha_consulta: ['', Validators.required],
        hora: ['', Validators.required],
        diagnostico: ['', Validators.required],
        tratamiento: ['', Validators.required],
        estado: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.consultaNueva.valid) {
      const nuevaConsulta = this.consultaNueva.value;
      this.consultaService.agregarConsulta(nuevaConsulta);
      this.consultaNueva.reset();
    }
    this.dialogRef.close(); 
    this.redirectToFactura();
  } 

  redirectToFactura() {
    this.router.navigate(['con']);
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}

