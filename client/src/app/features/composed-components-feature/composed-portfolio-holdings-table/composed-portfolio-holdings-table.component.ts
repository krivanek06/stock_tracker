import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHolding } from '@core';
import { SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';

@Component({
	selector: 'app-composed-portfolio-holdings-table',
	templateUrl: './composed-portfolio-holdings-table.component.html',
	styleUrls: ['./composed-portfolio-holdings-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedPortfolioHoldingsTableComponent implements OnInit {
	@Input() holdings: StHolding[];
	@Input() totalPortfolio: number;
	@Input() clickable = true;
	@Input() title = 'Holdings';

	constructor(private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {}

	ngOnInit(): void {}

	async showSummary(symbolIdentification: SymbolIdentification) {
		if (this.clickable) {
			this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
		}
	}
}
