import { Injectable } from '@angular/core';
import { StEarningsValuationFormula, StEarningsValuationFormulaVariable, SymbolStorageService } from '@core';
import { lastElement } from '@shared';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EarningsFormulaService {
	private initialVariablesState?: StEarningsValuationFormulaVariable;
	private formula$: BehaviorSubject<StEarningsValuationFormula | null> = new BehaviorSubject<StEarningsValuationFormula | null>(null);

	constructor(private symbolStorageService: SymbolStorageService) {
		this.watchActiveSymbolChange();
	}

	get earningsFormula(): StEarningsValuationFormula | null {
		return this.formula$.value;
	}

	getEarningsFormula(): Observable<StEarningsValuationFormula | null> {
		return this.formula$.asObservable();
	}

	resetFormulaVariables() {
		if (!this.earningsFormula || !this.initialVariablesState) {
			return;
		}
		this.formula$.next({ ...this.earningsFormula, variable: this.initialVariablesState });
		this.calculateFormulaResult();
	}

	changeFormulaVariable(formulaVariable: Partial<StEarningsValuationFormulaVariable>) {
		if (!this.earningsFormula) {
			console.error('EarningsFormulaService - this.earningsFormula is undefined ');
			return;
		}
		const variable: StEarningsValuationFormulaVariable = {
			__typename: 'STEarningsValuationFormulaVariable',
			growthRateFrom5yTo10y: formulaVariable.growthRateFrom5yTo10y ?? this.earningsFormula.variable.growthRateFrom5yTo10y,
			growthRateNext5y: formulaVariable.growthRateNext5y ?? this.earningsFormula.variable.growthRateNext5y,
			minimumRateReturn: formulaVariable.minimumRateReturn ?? this.earningsFormula.variable.minimumRateReturn,
			terminalMultiple: formulaVariable.terminalMultiple ?? this.earningsFormula.variable.terminalMultiple,
		};
		this.formula$.next({ ...this.earningsFormula, variable });
		this.calculateFormulaResult();
	}

	private calculateFormulaResult(): void {
		if (!this.earningsFormula) {
			return;
		}
		const formula = this.earningsFormula;
		const variable = formula.variable;

		// calculate estimation
		const estimatedEarnings: number[] = [formula.eps];
		const estimatedDiscountedPV: number[] = [];

		for (let i = 1; i < formula.dates.length; i++) {
			const tmpGrowth = i <= 5 ? variable.growthRateNext5y : variable.growthRateFrom5yTo10y;
			estimatedEarnings.push(lastElement(estimatedEarnings) * (1 + tmpGrowth));
			estimatedDiscountedPV.push(estimatedEarnings[i] * (1 + variable.minimumRateReturn) ** -i);
		}

		estimatedEarnings.splice(0, 1); // remove initial eps

		const earningsTerminalValue = lastElement(estimatedEarnings) * variable.terminalMultiple;
		const pvTerminalValue = earningsTerminalValue * (1 + variable.minimumRateReturn) ** (-estimatedDiscountedPV.length - 1);
		const estimatedIntrinsicValue = estimatedDiscountedPV.reduce((a, b) => a + b, 0) + pvTerminalValue;

		// save terminal values
		estimatedDiscountedPV.push(pvTerminalValue);
		estimatedEarnings.push(earningsTerminalValue);

		// save formula new estimation
		this.formula$.next({ ...formula, estimatedDiscountedPV, estimatedEarnings, estimatedIntrinsicValue });
	}

	private watchActiveSymbolChange() {
		this.symbolStorageService.getStockDetails().subscribe((details) => {
			const formula = details?.calculatedPredictions?.INTRINSIC_V1 || null;
			this.formula$.next(formula);
			this.initialVariablesState = formula?.variable;
		});
	}
}
