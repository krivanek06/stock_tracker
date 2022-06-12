import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { StEarningsValuationFormula } from '@core';
import { Observable } from 'rxjs';
import { EarningsFormulaService } from '../../services';

@Component({
	selector: 'app-earnings-valuation-formula-container',
	templateUrl: './earnings-valuation-formula-container.component.html',
	styleUrls: ['./earnings-valuation-formula-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarningsValuationFormulaContainerComponent implements OnInit, OnDestroy {
	earningsFormula$!: Observable<StEarningsValuationFormula | null>;

	constructor(private earningsValuationService: EarningsFormulaService) {}

	ngOnInit() {
		this.earningsFormula$ = this.earningsValuationService.getEarningsFormula();
	}

	ngOnDestroy(): void {
		this.earningsValuationService.resetFormulaVariables();
	}

	resetVariables() {
		this.earningsValuationService.resetFormulaVariables();
	}

	growthRate5yChange(growthRateNext5y: number) {
		this.changeFormulaVariable({ growthRateNext5y });
	}

	growthRate10yChange(growthRateFrom5yTo10y: number) {
		this.changeFormulaVariable({ growthRateFrom5yTo10y });
	}

	minimumReturnChange(minimumRateReturn: number) {
		this.changeFormulaVariable({ minimumRateReturn });
	}

	terminalMultipleChange(terminalMultiple: number) {
		this.changeFormulaVariable({ terminalMultiple });
	}

	private changeFormulaVariable(data: {
		growthRateNext5y?: number;
		growthRateFrom5yTo10y?: number;
		minimumRateReturn?: number;
		terminalMultiple?: number;
	}) {
		this.earningsValuationService.changeFormulaVariable({
			growthRateNext5y: data?.growthRateNext5y,
			growthRateFrom5yTo10y: data?.growthRateFrom5yTo10y,
			minimumRateReturn: data?.minimumRateReturn,
			terminalMultiple: data?.terminalMultiple,
		});
	}
}
