import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from '../interfaces/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private dataSource: MatTableDataSource<Consulta>;
  private data: Consulta[];

  constructor() {
    // Inicializa el dataSource con los datos existentes o vacíos
    this.data = [
      {
        nombre_medico: 'Dr. Smith',
        nombre_paciente: 'Juan Pérez',
        fecha_consulta: '2023-10-10',
        hora: '10:00',
        diagnostico: 'Resfriado común',
        tratamiento: 'Descanso y medicamentos',
        estado: "Activo"
      },
      {
        nombre_medico: 'Dra. Johnson',
        nombre_paciente: 'María González',
        fecha_consulta: '2023-10-11',
        hora: '11:00',
        diagnostico: 'Esguince de tobillo',
        tratamiento: 'Inmovilización y fisioterapia',
        estado: "Activo"
      },
      {
        nombre_medico: 'Jose María Lopez',
        nombre_paciente: 'Rodrigo De la Cruz',
        fecha_consulta: '2023-10-12',
        hora: '12:00',
        diagnostico: 'Gripe estacional',
        tratamiento: 'Antivirales y reposo',
        estado: "Activo"
      }
    ];
    this.dataSource = new MatTableDataSource<Consulta>(this.data);
}

getData(): MatTableDataSource<Consulta> {
  return this.dataSource;
}



agregarConsulta(nuevaConsulta: Consulta) {
  // Verifica si el producto ya existe en el arreglo data antes de agregarlo
  if (!this.data.some(consulta => consulta.fecha_consulta === nuevaConsulta.fecha_consulta)) {
    this.dataSource.data.push(nuevaConsulta);
    // Actualiza el dataSource para notificar a los componentes que utilizan esta fuente de datos
    this.dataSource.data = [...this.dataSource.data];
  }
}


}
