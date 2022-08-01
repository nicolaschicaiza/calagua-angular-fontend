import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Estacion } from "../../models/estacion";
import { EstacionService } from "../../services/estacion.service";

@Component({
  selector: 'ngx-crearestacion',
  styleUrls: ['./crearestacion.component.scss'],
  templateUrl: './crearestacion.component.html',
})
export class CrearestacionComponent {
  estacionForm: FormGroup;
  titulo = 'Crear Estación';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private _estacionService: EstacionService,
    private aRouter: ActivatedRoute) {
      this.estacionForm = this.fb.group({
        name: ['', Validators.required],
        location: ['', Validators.required],
        status: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEstacion() {
    const ESTACION: Estacion = {
      name: this.estacionForm.get('name')?.value,
      location: this.estacionForm.get('location')?.value,
      status: this.estacionForm.get('status')?.value,
    }
    console.warn(ESTACION);
    this._estacionService.guardarEstacion(ESTACION).subscribe(data => {
      this.router.navigate(['/pages/verestaciones']);
    }, error => {
      console.warn(error);
      this.estacionForm.reset();
    })

  }
  esEditar() {
    if(this.id != null) {
      this.titulo = 'Editar Estación';
      this._estacionService.obtenerEstacion(this.id).subscribe(data => {
        this.estacionForm.setValue({
          name: data.name,
          location: data.location,
          status: data.status,
        })
      })
    }
  }
}

