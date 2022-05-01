import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule,
    VehicleRoutingModule  ],
  declarations: [VehicleListComponent]
})
export class VehicleModule { }
