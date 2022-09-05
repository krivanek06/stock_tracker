import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockDetails } from '@core';

@Component({
	selector: 'app-details-financial-strength-ratio',
	templateUrl: './details-financial-strength-ratio.component.html',
	styleUrls: ['./details-financial-strength-ratio.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsFinancialStrengthRatioComponent implements OnInit {
	@Input() stockDetails!: StockDetails;

	constructor() {}

	ngOnInit() {}
}
