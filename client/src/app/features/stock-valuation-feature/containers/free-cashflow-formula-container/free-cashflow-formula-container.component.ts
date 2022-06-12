import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StFreeCashFlowFormula } from '@core';
import { Observable } from 'rxjs';
import { FreeCashflowFormulaService } from '../../services';

@Component({
	selector: 'app-free-cashflow-formula-container',
	templateUrl: './free-cashflow-formula-container.component.html',
	styleUrls: ['./free-cashflow-formula-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreeCashflowFormulaContainerComponent implements OnInit {
	freeCashFlowFormula$!: Observable<StFreeCashFlowFormula | null>;

	constructor(private freeCashFlowFormulaService: FreeCashflowFormulaService) {}

	ngOnInit() {
		this.freeCashFlowFormula$ = this.freeCashFlowFormulaService.getFreeCashFlowFormula();
	}

	applyNetBorrowings(value: boolean) {
		this.freeCashFlowFormulaService.calculateFormulaResult(value);
	}
}
