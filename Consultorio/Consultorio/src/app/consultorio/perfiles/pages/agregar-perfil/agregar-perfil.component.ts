import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-agregar-perfil',
  templateUrl: './agregar-perfil.component.html',
  styleUrls: ['./agregar-perfil.component.css']
})
export class AgregarPerfilComponent implements OnInit {

  perfilNuevo: FormGroup = new FormGroup({});


  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarPerfilComponent>, private formBuilder: FormBuilder,
     private perfilService: PerfilService) {}


  ngOnInit() {
    this.perfilNuevo = this.formBuilder.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        estado: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.perfilNuevo.valid) {
      const nuevoPerfil= this.perfilNuevo.value;
      this.perfilService.agregarPerfil(nuevoPerfil);
      this.perfilNuevo.reset();
    }
    this.dialogRef.close(); 
    this.redirectToFactura();
  } 

  redirectToFactura() {
    this.router.navigate(['perfil']);
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
