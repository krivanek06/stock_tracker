import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockDetails } from '@core';
import { STATEMENT_TYPE } from '../../../../../../models/pages.model';

@Component({
	selector: 'app-financial-statements-container',
	templateUrl: './financial-statements-container.component.html',
	styleUrls: ['./financial-statements-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialStatementsContainerComponent implements OnInit {
	@Input() stockDetails!: StockDetails;
	@Input() activeStatement!: STATEMENT_TYPE;

	STATEMENT_TYPE = STATEMENT_TYPE;

	constructor() {}

	ngOnInit() {}
}
