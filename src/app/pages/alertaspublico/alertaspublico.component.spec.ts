import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaspublicoComponent } from './alertaspublico.component';

describe('AlertaspublicoComponent', () => {
  let component: AlertaspublicoComponent;
  let fixture: ComponentFixture<AlertaspublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaspublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaspublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
