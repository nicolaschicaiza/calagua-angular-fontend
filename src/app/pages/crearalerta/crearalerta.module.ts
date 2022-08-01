import { NgModule } from '@angular/core';
import {
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

import { ReactiveFormsModule } from "@angular/forms";
import { ThemeModule } from '../../@theme/theme.module';
import { CrearalertaComponent } from './crearalerta.component';
import '@angular/compiler';

@NgModule({
  imports: [
    ThemeModule,
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
    ReactiveFormsModule,
  ],
  declarations: [
    CrearalertaComponent,
  ],
})
export class CrearalertaModule { }
