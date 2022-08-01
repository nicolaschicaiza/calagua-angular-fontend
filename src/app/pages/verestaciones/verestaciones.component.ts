import { Component, OnInit } from '@angular/core';
// import { ToastrService } from "ngx-toastr";
import { Estacion } from "../../models/estacion";
import { EstacionService } from "../../services/estacion.service";

@Component({
  selector: 'ngx-verestaciones',
  templateUrl: './verestaciones.component.html',
  styleUrls: ['./verestaciones.component.scss']
})
export class VerestacionesComponent implements OnInit {
  verEstaciones: Estacion[] = [];

  constructor(private _estacionService: EstacionService) { }

  ngOnInit(): void {
    this.obtenerEstacion();
  }

  obtenerEstacion() {
    this._estacionService.getEstaciones().subscribe(data => {
      console.log(data);
      this.verEstaciones = data;
    }, error => {
      console.log(error);
    })
  }

}
