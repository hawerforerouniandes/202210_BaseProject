/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehicleListComponent } from './vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ],
      providers: [ VehicleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    component.vehicles = [
      new Vehicle(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        "",
        "",
        "",
        "" ),
      new Vehicle(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        "",
        "",
        "",
        "" ),
      new Vehicle(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        "",
        "",
        "",
        "" ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar vehiculos creados ', () => {

    const compiled = fixture.debugElement.nativeElement;
    var esperado = "#MarcaLíneaModelo"
    for (let elemento of component.vehicles) {
      esperado = esperado + elemento.id+elemento.marca+elemento.linea+elemento.modelo;
    }
    expect(compiled.querySelector('.table').textContent).toEqual(esperado);

  });
});
