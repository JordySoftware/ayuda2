import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { PacientesComponent } from './consultorio/pacientes/pages/pacientes/pacientes.component';
import { guardGuard } from './auth/guard/guard.guard';
import { ConsultorioRoutingModule } from './consultorio/consultorio-routing.module';
import { MenuComponent } from './consultorio/menu/menu.component';
import { AgregarPacientesComponent } from './consultorio/pacientes/pages/agregar-pacientes/agregar-pacientes.component';
import { UsuariosComponent } from './consultorio/usuario/pages/usuarios/usuarios.component';
import { PerfilComponent } from './consultorio/perfiles/pages/perfil/perfil.component';
import { ConsultaComponent } from './consultorio/consultas/pages/consulta/consulta.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'menu',
    component: MenuComponent
  },
  
  {
    path: 'user',
    component: UsuariosComponent
  },

  {
    path: 'perfil',
    component: PerfilComponent
  },

  {
    path: 'con',
    component: ConsultaComponent
  },
  {
    path:'Pac', 
    component:PacientesComponent,
    loadChildren: ()=> import('./consultorio/consultorio-routing.module').then( m => m.ConsultorioRoutingModule),
    canMatch: [ guardGuard ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
