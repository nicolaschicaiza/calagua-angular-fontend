import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Alerta } from "../../models/alerta";
import { AlertaService } from "../../services/alerta.service";

@Component({
  selector: 'ngx-crearalerta',
  styleUrls: ['./crearalerta.component.scss'],
  templateUrl: './crearalerta.component.html',
})
export class CrearalertaComponent {
  alertaForm: FormGroup;
  titulo = 'Crear Alerta';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private _alertaService: AlertaService,
    private aRouter: ActivatedRoute) {
      this.alertaForm = this.fb.group({
        name: ['', Validators.required],
        station: ['', Validators.required],
        sensor: ['', Validators.required],
        umbral: ['', Validators.required],
        validation: ['', Validators.required],
        observation: ['', Validators.required],
      }),
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarAlerta() {
    const ALERTA: Alerta = {
      name: this.alertaForm.get('name')?.value,
      station: this.alertaForm.get('station')?.value,
      sensor: this.alertaForm.get('sensor')?.value,
      umbral: this.alertaForm.get('umbral')?.value,
      validation: this.alertaForm.get('validation')?.value,
      observation: this.alertaForm.get('observation')?.value,
    }
    console.warn(ALERTA);
    this._alertaService.guardarAlerta(ALERTA).subscribe(data => {
      this.router.navigate(['/pages/veralertas']);
    }, error => {
      console.warn(error);
      this.alertaForm.reset();
    })

  }
  esEditar() {
    if(this.id != null) {
      this.titulo = 'Editar Alerta';
      this._alertaService.obtenerAlerta(this.id).subscribe(data => {
        this.alertaForm.setValue({
          name: data.name,
          station: data.station,
          sensor: data.sensor,
          umbral: data.umbral,
          validation: data.validation,
          observation: data.observation,
        })
      })
    }
  }
}

