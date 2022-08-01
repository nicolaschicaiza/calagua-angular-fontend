import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearestacionComponent } from './crearestacion.component';

describe('CrearestacionComponent', () => {
  let component: CrearestacionComponent;
  let fixture: ComponentFixture<CrearestacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearestacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
