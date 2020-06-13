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
  @Input() showOnlyNameAndPrice = false;

  @Output() showChartEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
  @Output() addFavouritesEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() showDetailsEmitter: EventEmitter<string> = new EventEmitter<string>();

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

  showChart(name: string, symbol: string) {
    this.showChartEmitter.emit({name, symbol});
  }

  addFavourites(symbol: string) {
    this.addFavouritesEmitter.emit(symbol);
  }

  showDetails(symbol: string) {
    this.showDetailsEmitter.emit(symbol);
  }

}
