import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtransportComponent } from './newtransport.component';

describe('NewtransportComponent', () => {
  let component: NewtransportComponent;
  let fixture: ComponentFixture<NewtransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
