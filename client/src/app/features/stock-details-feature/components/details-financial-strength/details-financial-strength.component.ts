import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockDetails } from '@core';

@Component({
	selector: 'app-details-financial-strength',
	templateUrl: './details-financial-strength.component.html',
	styleUrls: ['./details-financial-strength.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsFinancialStrengthComponent implements OnInit {
	@Input() stockDetails!: StockDetails;

	constructor() {}

	ngOnInit() {}

	get floatSharesPrct(): number | null {
		if (!this.stockDetails.summary.sharesOutstanding || !this.stockDetails.companyData?.defaultKeyStatistics?.floatShares) {
			return null;
		}
		return (1 / this.stockDetails.summary.sharesOutstanding) * this.stockDetails.companyData.defaultKeyStatistics.floatShares;
	}

	get sharesShortPrct(): number | null {
		if (!this.stockDetails.summary.sharesOutstanding || !this.stockDetails.companyData?.defaultKeyStatistics?.sharesShort) {
			return null;
		}
		return (1 / this.stockDetails.summary.sharesOutstanding) * this.stockDetails.companyData.defaultKeyStatistics.sharesShort;
	}
}
