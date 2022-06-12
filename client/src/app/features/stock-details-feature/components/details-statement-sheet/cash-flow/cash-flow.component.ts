import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmCashFlowFragmentFragment } from '@core';
import { CashFlowSheetDataContainer } from '../../../models';

@Component({
	selector: 'app-cash-flow',
	templateUrl: './cash-flow.component.html',
	styleUrls: ['./cash-flow.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CashFlowComponent implements OnInit {
	@Input() sheetTitle!: string;
	@Input() cashFlow: StfmCashFlowFragmentFragment[] = [];
	@Input() pricePositionBreakPoint?: boolean | null;
	@Input() pricePositionBreakPointMobile?: boolean | null;

	CashFlowSheetDataContainer = CashFlowSheetDataContainer;

	constructor() {}

	ngOnInit(): void {}
}
