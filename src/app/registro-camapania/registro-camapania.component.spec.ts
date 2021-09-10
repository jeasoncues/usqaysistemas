import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCamapaniaComponent } from './registro-camapania.component';

describe('RegistroCamapaniaComponent', () => {
  let component: RegistroCamapaniaComponent;
  let fixture: ComponentFixture<RegistroCamapaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCamapaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCamapaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
