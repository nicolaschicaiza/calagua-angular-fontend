import { Component, OnInit } from '@angular/core';
import { Alerta } from '../../models/alerta';
import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'ngx-veralertas',
  templateUrl: './veralertas.component.html',
  styleUrls: ['./veralertas.component.scss']
})
export class VeralertasComponent implements OnInit {
  VerAlertas: Alerta [] = [];
  constructor(private _alertaService: AlertaService) { }

  ngOnInit(): void {
    this.obtenerAlerta();
  }
  obtenerAlerta() {
    this._alertaService.getAlertas().subscribe(data => {
      console.log(data);
      this.VerAlertas = data;
    }, error => {
      console.log(error);
    })
  }
}
