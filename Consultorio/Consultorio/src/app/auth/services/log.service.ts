import { Injectable } from '@angular/core';
import { Interfaces } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  _usuario!: Interfaces;
  
  get User(): Interfaces {
    return this._usuario;
  }
  
  obtenerUsuario(usuario: Interfaces){
    this._usuario = usuario;
  }
  
  constructor() { }
}
