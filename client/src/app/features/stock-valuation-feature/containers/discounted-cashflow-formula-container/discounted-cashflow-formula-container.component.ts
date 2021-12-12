import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StDiscountedCashFlowFormula } from '@core';
import { Observable } from 'rxjs';
import { DiscountedCashflowFormulaService } from '../../services';

@Component({
	selector: 'app-discounted-cashflow-formula-container',
	templateUrl: './discounted-cashflow-formula-container.component.html',
	styleUrls: ['./discounted-cashflow-formula-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscountedCashflowFormulaContainerComponent implements OnInit {
	discountedCashFlowFormula$!: Observable<StDiscountedCashFlowFormula | null>;

	constructor(private discountedCashFlowValuationService: DiscountedCashflowFormulaService) {}

	ngOnInit() {
		this.discountedCashFlowFormula$ = this.discountedCashFlowValuationService.getDiscountedCashFlowFormula();
	}
}
