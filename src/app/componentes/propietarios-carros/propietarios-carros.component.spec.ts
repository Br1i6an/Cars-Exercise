import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietariosCarrosComponent } from './propietarios-carros.component';

describe('PropietariosCarrosComponent', () => {
  let component: PropietariosCarrosComponent;
  let fixture: ComponentFixture<PropietariosCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietariosCarrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropietariosCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
