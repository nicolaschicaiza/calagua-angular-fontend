import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearalertaComponent } from './crearalerta.component';

describe('CrearalertaComponent', () => {
  let component: CrearalertaComponent;
  let fixture: ComponentFixture<CrearalertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearalertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearalertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
