import { Component, OnInit, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Id: number;
  Estación: string;
  Estado: string;
  NiveldeContaminación: string;
}

@Component({
  selector: 'ngx-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})

export class EstadisticasComponent implements OnInit {

/*  constructor() { }*/

  ngOnInit(): void {
  }

  customColumn = 'Id';
  defaultColumns = [ 'Estación', 'Estado', 'NiveldeContaminación' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { Id: 1, Estación: 'Rio Molino 1', NiveldeContaminación: '---%', Estado: 'On' },
      children: [

      ],
    },
    {
      data: { Id: 2, Estado: 'Off', Estación: 'Rio Molino 2', NiveldeContaminación: '---%' },
      children: [
      
      ],
    },
    {
      data: { Id: 3, Estado: 'Off', Estación: 'Rio Molino 3', NiveldeContaminación: '---%' },
      children: [
        
      ],
    },
    {
      data: { Id: 4, Estado: 'Off', Estación: 'Rio Las Piedras', NiveldeContaminación: '---%' },
      children: [
        
      ],
    },
    {
      data: { Id: 5, Estado: 'Off', Estación: 'Rio Cauca', NiveldeContaminación: '---%' },
      children: [
        
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'nb-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}