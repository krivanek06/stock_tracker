import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TopTableData} from '../../model/tableModel';

@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopTableComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns = ['name', 'currentPrice', 'volumeChange', 'peRatio', 'details'];

  @Input() data: TopTableData[] = [];
  @Input() showOnlyNameAndPrice = false;

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = this.showOnlyNameAndPrice ? ['name', 'currentPrice'] : this.displayedColumns;
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      this.dataSource.data = this.data;
    });
  }

  trackBy(index: number, item: any) {
    return item.symbol;
  }

}
