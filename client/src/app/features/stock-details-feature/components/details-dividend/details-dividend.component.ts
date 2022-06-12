import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Dividens } from '@core';

@Component({
	selector: 'app-details-dividend',
	templateUrl: './details-dividend.component.html',
	styleUrls: ['./details-dividend.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsDividendComponent implements OnInit {
	@Input() dividends!: Dividens;

	constructor() {}

	ngOnInit() {}
}
