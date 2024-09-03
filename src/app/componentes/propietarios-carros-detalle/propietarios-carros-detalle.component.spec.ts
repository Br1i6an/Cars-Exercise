import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietariosCarrosDetalleComponent } from './propietarios-carros-detalle.component';

describe('PropietariosCarrosDetalleComponent', () => {
  let component: PropietariosCarrosDetalleComponent;
  let fixture: ComponentFixture<PropietariosCarrosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietariosCarrosDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropietariosCarrosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
