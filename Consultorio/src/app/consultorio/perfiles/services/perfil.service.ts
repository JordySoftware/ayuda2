import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Perfil } from '../interfaces/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private dataSource: MatTableDataSource<Perfil>;
  private data: Perfil[];

  constructor() {
    // Inicializa el dataSource con los datos existentes o vacíos
    this.data = [
      {
        nombre: "Médico",
        descripcion: "Persona encargada de proporcionar atención médica a los pacientes.",
        estado: "Activo"
      },
      {
        nombre: "Administrador",
        descripcion: "Persona encargada de la creación de perfiles, pacientes, etc.",
        estado: "Activo"
      }
    ];
    this.dataSource = new MatTableDataSource<Perfil>(this.data);
}

getData(): MatTableDataSource<Perfil> {
  return this.dataSource;
}


agregarPerfil(nuevoPerfil: Perfil) {
  // Verifica si el producto ya existe en el arreglo data antes de agregarlo
  if (!this.data.some(perfil => perfil.nombre === nuevoPerfil.nombre )) {
    this.dataSource.data.push(nuevoPerfil);
    // Actualiza el dataSource para notificar a los componentes que utilizan esta fuente de datos
    this.dataSource.data = [...this.dataSource.data];
  }
}

}
