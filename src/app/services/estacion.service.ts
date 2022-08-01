import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estacion } from "../models/estacion";

@Injectable({
  providedIn: "root"
})

export class EstacionService {
  url = "http://192.168.20.153:4000/api/estaciones/";

  constructor(private http: HttpClient) {}

  getEstaciones(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarEstacion(estacion: Estacion): Observable<any> {
    return this.http.post(this.url, estacion);
  }

  obtenerEstacion(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
