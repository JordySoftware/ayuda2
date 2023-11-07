import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private dataSource: MatTableDataSource<Usuario>;
  private data: Usuario[];

  constructor() {
    // Inicializa el dataSource con los datos existentes o vacíos
    this.data = [
      {
        id_usuario: 1,
        nombre_usuario: 'Jose Jimenez',
        email: 'gj@gmail.com',
        contrasena: "adsda",
        id_perfil: 1 ,
        estado: 'Activo'
      }/*,
      {
        nombre: 'Jose María Lopez',
        perfil: 'Medico',
        estado: 'Activo'
      }*/
    ];
    this.dataSource = new MatTableDataSource<Usuario>(this.data);
}

getData(): MatTableDataSource<Usuario> {
  return this.dataSource;
}

agregarUsuario(nuevoUsuario: Usuario) {
  // Verifica si el producto ya existe en el arreglo data antes de agregarlo
  if (!this.data.some(usuario => usuario.nombre_usuario === nuevoUsuario.nombre_usuario )) {
    this.dataSource.data.push(nuevoUsuario);
    // Actualiza el dataSource para notificar a los componentes que utilizan esta fuente de datos
    this.dataSource.data = [...this.dataSource.data];
  }
}



}
