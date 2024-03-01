import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquemexinfoComponent } from './paquemexinfo.component';

describe('PaquemexinfoComponent', () => {
  let component: PaquemexinfoComponent;
  let fixture: ComponentFixture<PaquemexinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquemexinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquemexinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
