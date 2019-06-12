import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionSorteoComponent } from './seleccion-sorteo.component';

describe('SeleccionSorteoComponent', () => {
  let component: SeleccionSorteoComponent;
  let fixture: ComponentFixture<SeleccionSorteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionSorteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionSorteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
