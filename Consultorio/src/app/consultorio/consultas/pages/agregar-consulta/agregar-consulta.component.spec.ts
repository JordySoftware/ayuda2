import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarConsultaComponent } from './agregar-consulta.component';

describe('AgregarConsultaComponent', () => {
  let component: AgregarConsultaComponent;
  let fixture: ComponentFixture<AgregarConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarConsultaComponent]
    });
    fixture = TestBed.createComponent(AgregarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
