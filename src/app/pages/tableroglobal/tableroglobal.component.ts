import {Component, OnDestroy} from '@angular/core';
import { NbThemeService, NbAlertModule,} from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-tableroglobal',
  styleUrls: ['./tableroglobal.component.scss'],
  templateUrl: './tableroglobal.component.html',
})
export class TableroglobalComponent implements OnDestroy {

  private alive = true;

  ngOnDestroy() {
    this.alive = false;
  }
}
