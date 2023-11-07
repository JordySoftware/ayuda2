import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pages/pacientes/pacientes.component';

const routes: Routes = [
  {

    
    path: '',
    children: [
      {
        path: 'Pac',
        component: PacientesComponent
      },

      /*{
        path: '**',
        redirectTo: 'pac'
      }*/
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ConsultorioRoutingModule { }
