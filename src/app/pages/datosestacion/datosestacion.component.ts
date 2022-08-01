import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-datosestacion',
  templateUrl: './datosestacion.component.html',
  styleUrls: ['./datosestacion.component.scss']
})
export class DatosestacionComponent implements OnInit {
  postPH: any;
  posttimePH: any;
  datos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = { 'Access-Control-Request-Headers': '*', 'Content-Type': 'application/json', 'api-key': 'JMtzKW5oaMKkXAHvt6nxMxcawzUX0CpQfCYWkv8DkWUssFSU9Scv2XZWbCSlgv4E', 'Accept': 'application/json'  };
    const body = {
      "dataSource": "Cluster0",
      "database": "calagua",
      "collection": "sensores",
      "projection": { "PH": 1, "timearrive": 1, "_id": 0 }
  };
    this.http.post<any>('https://data.mongodb-api.com/app/data-iemeo/endpoint/data/v1/action/find', body, { headers }).subscribe(data => {
        this.datos = data;
        this.postPH = data.documents.PH;
        this.posttimePH = data.timearrive;
    });
}

}
