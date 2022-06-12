import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmIncomeStatementFragmentFragment } from '@core';
import { IncomeStatementSheetDataContainer } from '../../../models';

@Component({
	selector: 'app-income-statement',
	templateUrl: './income-statement.component.html',
	styleUrls: ['./income-statement.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeStatementComponent implements OnInit {
	@Input() sheetTitle!: string;
	@Input() incomeStatement: StfmIncomeStatementFragmentFragment[] = [];
	@Input() pricePositionBreakPoint?: boolean | null;
	@Input() pricePositionBreakPointMobile?: boolean | null;

	IncomeStatementSheetDataContainer = IncomeStatementSheetDataContainer;

	constructor() {}

	ngOnInit(): void {}
}
