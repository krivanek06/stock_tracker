import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmSplitHistory } from '@core';

@Component({
	selector: 'app-market-calendar-split-history',
	templateUrl: './market-calendar-split-history.component.html',
	styleUrls: ['./market-calendar-split-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCalendarSplitHistoryComponent implements OnInit {
	@Input() splitHistories: StfmSplitHistory[] = [];

	constructor() {}

	ngOnInit() {}
}
