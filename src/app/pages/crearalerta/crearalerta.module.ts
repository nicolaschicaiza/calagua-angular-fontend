// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CrearalertaComponent } from './crearalerta.component';
//
//
//
// @NgModule({
  // declarations: [
    // CrearalertaComponent
  // ],
  // imports: [
    // CommonModule
  // ]
// })
// export class CrearalertaModule { }

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

import { ThemeModule } from '../../@theme/theme.module';
import { CrearalertaComponent } from './crearalerta.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

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
    ngFormsModule,
  ],
  declarations: [
    CrearalertaComponent,
  ],
})
export class CrearalertaModule { }
