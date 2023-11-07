import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private dataSource: MatTableDataSource<Paciente>;
  private data: Paciente[];

  constructor() {
    // Inicializa el dataSource con los datos existentes o vacíos
    this.data = [
      {
        nombre_paciente: 'Juan',
        apellido_paciente: 'Pérez',
        fecha_nacimiento: '15/01/1990', // Formato "dd/mm/yyyy".
        direccion: 'Guasmo Central',
        telefono: '098-123-4567', // Utiliza el formato "xxx-xxx-xxxx".;
        estado: "Activo"
      },
      {
        nombre_paciente: 'Rodrigo',
        apellido_paciente: 'De la Cruz',
        fecha_nacimiento: '08/08/1999', // Formato "dd/mm/yyyy".
        direccion: 'Mucho Lote',
        telefono: '096-345-2929', // Utiliza el formato "xxx-xxx-xxxx".;
        estado: "Activo"
      }
    ];
    this.dataSource = new MatTableDataSource<Paciente>(this.data);
}

getData(): MatTableDataSource<Paciente> {
  return this.dataSource;
}



agregarPaciente(nuevoPaciente: Paciente) {
  // Verifica si el producto ya existe en el arreglo data antes de agregarlo
  if (!this.data.some(paciente => paciente.telefono === nuevoPaciente.telefono )) {
    this.dataSource.data.push(nuevoPaciente);
    // Actualiza el dataSource para notificar a los componentes que utilizan esta fuente de datos
    this.dataSource.data = [...this.dataSource.data];
  }
}

}
