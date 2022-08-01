import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
//import { Prueba2Module } from './prueba2/prueba2.module';
import { TableroglobalModule } from './tableroglobal/tableroglobal.module';
import { DatosestacionModule } from './datosestacion/datosestacion.module';
import { VerestacionesModule } from './verestaciones/verestaciones.module';
import { VeralertasModule } from './veralertas/veralertas.module';
import { CrearestacionModule } from './crearestacion/crearestacion.module';
import { CrearalertaModule } from './crearalerta/crearalerta.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { AlertaspublicoModule } from './alertaspublico/alertaspublico.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    TableroglobalModule,
    DatosestacionModule,
    VerestacionesModule,
    VeralertasModule,
    CrearestacionModule,
    CrearalertaModule,
    EstadisticasModule,
    AlertaspublicoModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
