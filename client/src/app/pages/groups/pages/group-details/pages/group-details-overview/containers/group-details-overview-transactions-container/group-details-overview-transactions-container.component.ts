import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData } from '@core';
import { WindowService } from '@shared';

@Component({
	selector: 'app-group-details-overview-transactions-container',
	templateUrl: './group-details-overview-transactions-container.component.html',
	styleUrls: ['./group-details-overview-transactions-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewTransactionsContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;
	transactionHeight: number;

	constructor() {}

	ngOnInit() {
		this.transactionHeight = WindowService.getWindowHeightPrctInPx(45);
	}
}
