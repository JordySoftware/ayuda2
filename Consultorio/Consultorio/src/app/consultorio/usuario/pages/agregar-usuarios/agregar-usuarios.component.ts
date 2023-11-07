import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  usuarioNuevo: FormGroup = new FormGroup({});


  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarUsuariosComponent>, private formBuilder: FormBuilder,
     private usuarioService: UsuarioService) {}


  ngOnInit() {
    this.usuarioNuevo = this.formBuilder.group({
        nombre: ['', Validators.required],
        perfil: ['', Validators.required],
        estado: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.usuarioNuevo.valid) {
      const nuevoUsuario= this.usuarioNuevo.value;
      this.usuarioService.agregarUsuario(nuevoUsuario);
      this.usuarioNuevo.reset();
    }
    this.dialogRef.close(); 
    this.redirectToFactura();
  } 

  redirectToFactura() {
    this.router.navigate(['user']);
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}

