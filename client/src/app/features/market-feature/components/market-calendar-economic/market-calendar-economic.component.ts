import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StfmCalendarEconomic } from '@core';

@Component({
	selector: 'app-market-calendar-economic',
	templateUrl: './market-calendar-economic.component.html',
	styleUrls: ['./market-calendar-economic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCalendarEconomicComponent implements OnInit {
	@Input() calendarEconomic: StfmCalendarEconomic[] = [];

	displayedColumns: string[] = ['event', 'country', 'actual', 'previous', 'change', 'estimated', 'date'];
	dataSource!: MatTableDataSource<StfmCalendarEconomic>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.calendarEconomic) {
			this.dataSource = new MatTableDataSource(this.calendarEconomic);
		}
	}
}
