import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData, StHolding } from '@core';
import { SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';

@Component({
	selector: 'app-group-details-stats-holdings-table-container',
	templateUrl: './group-details-stats-holdings-table-container.component.html',
	styleUrls: ['./group-details-stats-holdings-table-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsStatsHoldingsTableContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;
	holdings: StHolding[] = [];

	constructor(private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {}

	ngOnInit() {
		this.holdings = this.groupAllData.groupMemberData.holdings.map((d) => d.holding);
	}

	async showSummary(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
	}
}
