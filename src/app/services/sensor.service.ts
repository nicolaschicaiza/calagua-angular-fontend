import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sensor } from "../models/sensor";

@Injectable({
  providedIn: "root"
})
export class SensorService {
  url = "http://192.168.20.153:4000/api/sensores/";

  constructor(private http: HttpClient) {}

  getSensores(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarProducto(sensor: Sensor): Observable<any> {
    return this.http.post(this.url, sensor);
  }

  obtenerSensor(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
