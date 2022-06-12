import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockDetails } from '@core';

@Component({
	selector: 'app-details-per-share',
	templateUrl: './details-per-share.component.html',
	styleUrls: ['./details-per-share.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPerShareComponent implements OnInit {
	@Input() stockDetails!: StockDetails;

	constructor() {}

	ngOnInit() {}
}
