import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerestacionesComponent } from './verestaciones.component';

describe('VerestacionesComponent', () => {
  let component: VerestacionesComponent;
  let fixture: ComponentFixture<VerestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
