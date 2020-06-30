import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TopTableData} from '../../model/tableModel';
import {ChartDataIdentification} from '../../model/chartModel';

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

  @Output() showChartEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
  @Output() addFavouritesEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      this.dataSource.data = this.data;
    });
  }

  trackBy(index: number, item: any) {
    return item.symbol;
  }

  showChart(name: string, symbol: string) {
    this.showChartEmitter.emit({name, symbol});
  }

  addFavourites(name: string, symbol: string) {
    this.addFavouritesEmitter.emit({name, symbol});
  }


}
