import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {StockTableData, StockWatchListTable, TopTableData} from '../../model/tableModel';
import {ChartDataIdentification} from '../../model/chartModel';

@Component({
  selector: 'app-table-watchlist',
  templateUrl: './table-watchlist.component.html',
  styleUrls: ['./table-watchlist.component.scss']
})
export class TableWatchlistComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns = ['symbol', 'currentPrice', 'targetEst1y', 'weekRange52', 'earningsDate', 'exDividendDate', 'details'];
  editing = false;
  editedName: string;

  @Input() data: StockTableData[] = [];
  @Input() name: string;

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

  editWatchListName() {
    console.log(this.editedName, this.name);
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.editedName = this.name;
  }

  showChart(name: string, symbol: string) {
    this.showChartEmitter.emit({name, symbol});
  }

  addFavourites(name: string, symbol: string) {
    this.addFavouritesEmitter.emit({name, symbol});
  }

}
