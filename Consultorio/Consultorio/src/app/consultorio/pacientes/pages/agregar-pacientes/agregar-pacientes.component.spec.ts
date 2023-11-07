import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPacientesComponent } from './agregar-pacientes.component';

describe('AgregarPacientesComponent', () => {
  let component: AgregarPacientesComponent;
  let fixture: ComponentFixture<AgregarPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPacientesComponent]
    });
    fixture = TestBed.createComponent(AgregarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
