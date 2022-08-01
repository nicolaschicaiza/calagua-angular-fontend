import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbAlertModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
//import { AlertComponent } from '../extra-components/alert/alert.component'; //NO NECESITA IMPORTARSE - SE IMPORTA LA CLASE DONDE SE DECLARA (ExtraComponentsModule)
import { ThemeModule } from '../../@theme/theme.module';
import { TableroglobalComponent } from './tableroglobal.component';
import { FormsModule } from '@angular/forms';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbAlertModule,
    ExtraComponentsModule,
    RouterModule,
  ],
  declarations: [
    TableroglobalComponent,
  ],
})
export class TableroglobalModule { }
