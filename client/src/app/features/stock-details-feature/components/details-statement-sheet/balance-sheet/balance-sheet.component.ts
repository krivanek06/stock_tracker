import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmBalanceSheetFragmentFragment } from '@core';
import { BalanceSheetDataContainer } from '../../../models';

@Component({
	selector: 'app-balance-sheet',
	templateUrl: './balance-sheet.component.html',
	styleUrls: ['./balance-sheet.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceSheetComponent implements OnInit {
	@Input() sheetTitle!: string;
	@Input() balanceSheet: StfmBalanceSheetFragmentFragment[] = [];
	@Input() pricePositionBreakPoint?: boolean | null;
	@Input() pricePositionBreakPointMobile?: boolean | null;

	BalanceSheetDataContainer = BalanceSheetDataContainer;

	constructor() {}

	ngOnInit(): void {}
}
