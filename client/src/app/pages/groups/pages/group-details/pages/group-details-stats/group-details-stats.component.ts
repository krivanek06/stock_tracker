import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupStorageService, StGroupAllData, StHolding } from '@core';
import { SymbolIdentification, WindowService } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-group-details-stats',
	templateUrl: './group-details-stats.component.html',
	styleUrls: ['./group-details-stats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsStatsComponent implements OnInit {
	groupAllData$!: Observable<StGroupAllData | null>;

	holdings$!: Observable<StHolding[]>;
	chartHeight_32!: number;
	chartHeightGroup_37!: number;
	chartHeightGroup_55!: number;

	constructor(private groupStorageService: GroupStorageService, private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {}

	ngOnInit() {
		this.groupAllData$ = this.groupStorageService.getActiveGroup();
		this.holdings$ = this.groupStorageService.getActiveGroupHoldings();

		this.chartHeight_32 = WindowService.getWindowHeightPrctInPx(32);
		this.chartHeightGroup_37 = WindowService.getWindowHeightPrctInPx(37);
		this.chartHeightGroup_55 = WindowService.getWindowHeightPrctInPx(55);
	}

	async showSummary(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
	}
}
