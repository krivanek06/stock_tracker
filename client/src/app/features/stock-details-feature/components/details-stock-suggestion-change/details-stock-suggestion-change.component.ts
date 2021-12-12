import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StStockSuggestion } from '@core';
import { ChartType, marketValueChange } from '@shared';

@Component({
	selector: 'app-details-stock-suggestion-change',
	templateUrl: './details-stock-suggestion-change.component.html',
	styleUrls: ['./details-stock-suggestion-change.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class DetailsStockSuggestionChangeComponent implements OnInit {
	@Input() suggestionMarketPrice!: number;
	@Input() suggestion!: StStockSuggestion;

	ChartType = ChartType;

	constructor() {}

	ngOnInit() {}
}
