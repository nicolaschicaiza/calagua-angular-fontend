import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Alerta } from "../models/alerta";

@Injectable({
  providedIn: "root"
})

export class AlertaService {
  url = "http://localhost:4000/api/alertas/";

  constructor(private http: HttpClient) {}

  getAlertas(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarAlerta(alerta: Alerta): Observable<any> {
    return this.http.post(this.url, alerta);
  }

  obtenerAlerta(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
