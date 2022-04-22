import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UpgradeDowngradeHistory } from '@core';

@Component({
	selector: 'app-details-grading-history',
	templateUrl: './details-grading-history.component.html',
	styleUrls: ['./details-grading-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsGradingHistoryComponent implements OnInit, OnChanges {
	@Input() history: UpgradeDowngradeHistory[] = [];

	displayedColumns: string[] = ['date', 'firm', 'grade'];
	dataSource!: MatTableDataSource<UpgradeDowngradeHistory>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.history && this.history.length > 0) {
			this.dataSource = new MatTableDataSource(this.history);
		}
	}
}
