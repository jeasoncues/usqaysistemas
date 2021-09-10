import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPayuComponent } from './form-payu.component';

describe('FormPayuComponent', () => {
  let component: FormPayuComponent;
  let fixture: ComponentFixture<FormPayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
