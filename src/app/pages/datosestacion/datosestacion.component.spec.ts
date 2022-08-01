import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosestacionComponent } from './datosestacion.component';

describe('DatosestacionComponent', () => {
  let component: DatosestacionComponent;
  let fixture: ComponentFixture<DatosestacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosestacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
