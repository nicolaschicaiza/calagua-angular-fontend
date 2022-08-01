import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeralertasComponent } from './veralertas.component';

describe('VeralertasComponent', () => {
  let component: VeralertasComponent;
  let fixture: ComponentFixture<VeralertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeralertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeralertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
