import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeralertasComponent } from './veralertas.component';
import{
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';


@NgModule({
  declarations: [
    VeralertasComponent
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
  ]
})
export class VeralertasModule { }
