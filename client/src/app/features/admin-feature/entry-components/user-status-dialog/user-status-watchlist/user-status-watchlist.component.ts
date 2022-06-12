import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StStockWatchlistIntoFragmentFragment } from '@core';

@Component({
	selector: 'app-user-status-watchlist',
	templateUrl: './user-status-watchlist.component.html',
	styleUrls: ['./user-status-watchlist.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatusWatchlistComponent implements OnInit {
	@Input() stockWatchlist!: StStockWatchlistIntoFragmentFragment[];

	constructor() {}

	ngOnInit(): void {}
}
