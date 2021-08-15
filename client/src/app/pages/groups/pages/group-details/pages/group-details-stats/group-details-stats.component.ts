import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupStorageService, StGroupAllData, StHolding } from '@core';
import { ChartType, SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-group-details-stats',
	templateUrl: './group-details-stats.component.html',
	styleUrls: ['./group-details-stats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsStatsComponent implements OnInit {
	groupAllData$: Observable<StGroupAllData>;

	holdings$: Observable<StHolding[]>;
	ChartType = ChartType;

	constructor(private groupStorageService: GroupStorageService, private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {}

	ngOnInit() {
		this.groupAllData$ = this.groupStorageService.getActiveGroup();
		this.holdings$ = this.groupAllData$.pipe(map((groupData) => groupData.groupMemberData.holdings.map((h) => h.holding)));
	}

	async showSummary(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
	}
}
