import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatosCartComponent } from './form-datos-cart.component';

describe('FormDatosCartComponent', () => {
  let component: FormDatosCartComponent;
  let fixture: ComponentFixture<FormDatosCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatosCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatosCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
