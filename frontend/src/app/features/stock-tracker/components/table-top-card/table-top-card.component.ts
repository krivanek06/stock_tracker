import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TopTableData} from '../../model/tableModel';
import {ChartDataIdentification} from '../../../../shared/model/chartModel';

@Component({
  selector: 'app-table-top-card',
  templateUrl: './table-top-card.component.html',
  styleUrls: ['./table-top-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableTopCardComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns = ['name', 'currentPrice', 'volumeChange'];

  @Input() data: TopTableData[] = [];
  @Input() name: string;

  @Output() showChartEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

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


}
