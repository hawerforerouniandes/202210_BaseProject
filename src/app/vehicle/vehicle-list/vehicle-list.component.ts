import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Array<Vehicle> = [];
  marcas: Array<any> = [];
  valores: any = {};
  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      for (let elemento of this.vehicles) {

        var include = this.marcas.includes(elemento.marca)
        if(!include){
          this.marcas.push(elemento.marca)
          this.valores[elemento.marca] = 1;
        }
        else{
          this.valores[elemento.marca] = this.valores[elemento.marca] + 1;
        }
      }
      console.log(this.marcas)
      console.log(this.valores)
    });

  }

  ngOnInit() {
    this.getVehicles();


  }

}
