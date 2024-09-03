import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDashComponent } from './inicio-dash.component';

describe('InicioDashComponent', () => {
  let component: InicioDashComponent;
  let fixture: ComponentFixture<InicioDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
