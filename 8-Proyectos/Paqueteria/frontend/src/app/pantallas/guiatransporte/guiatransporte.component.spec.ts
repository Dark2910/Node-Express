import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiatransporteComponent } from './guiatransporte.component';

describe('GuiatransporteComponent', () => {
  let component: GuiatransporteComponent;
  let fixture: ComponentFixture<GuiatransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiatransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiatransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
