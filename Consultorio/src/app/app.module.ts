import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/pages/login/login.component';
import { PacientesComponent } from './consultorio/pacientes/pages/pacientes/pacientes.component';
import { MenuComponent } from './consultorio/menu/menu.component';
import { PacientesModule } from './consultorio/pacientes/pacientes.module';
import { AgregarPacientesComponent } from './consultorio/pacientes/pages/agregar-pacientes/agregar-pacientes.component';
import { PerfilComponent } from './consultorio/perfiles/pages/perfil/perfil.component';
import { AgregarPerfilComponent } from './consultorio/perfiles/pages/agregar-perfil/agregar-perfil.component';
import { UsuariosComponent } from './consultorio/usuario/pages/usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './consultorio/usuario/pages/agregar-usuarios/agregar-usuarios.component';
import { ConsultaComponent } from './consultorio/consultas/pages/consulta/consulta.component';
import { AgregarConsultaComponent } from './consultorio/consultas/pages/agregar-consulta/agregar-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PacientesComponent,
    AgregarPacientesComponent,
    PerfilComponent,
    AgregarPerfilComponent,
    UsuariosComponent,
    AgregarUsuariosComponent,
    ConsultaComponent,
    AgregarConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
