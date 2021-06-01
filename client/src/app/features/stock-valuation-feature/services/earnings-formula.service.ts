import {Injectable} from '@angular/core';
import {StEarningsValuationFormula, StEarningsValuationFormulaVariable, SymbolStorageService} from '@core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
import {lastElement} from '@shared';

@Injectable({
    providedIn: 'root'
})
export class EarningsFormulaService {
    private initialVariablesState: StEarningsValuationFormulaVariable;
    private formula$: BehaviorSubject<StEarningsValuationFormula> = new BehaviorSubject<StEarningsValuationFormula>(null);

    constructor(private symbolStorageService: SymbolStorageService) {
        this.watchActiveSymbolChange();
    }

    get earningsFormula(): StEarningsValuationFormula {
        return this.formula$.value;
    }

    getEarningsFormula(): Observable<StEarningsValuationFormula> {
        return this.formula$.asObservable();
    }

    resetFormulaVariables() {
        if (!this.earningsFormula) {
            return;
        }
        this.formula$.next({...this.earningsFormula, variable: this.initialVariablesState});
        this.calculateFormulaResult();
    }

    changeFormulaVariable(formulaVariable: StEarningsValuationFormulaVariable) {
        const variable: StEarningsValuationFormulaVariable = {
            __typename: 'STEarningsValuationFormulaVariable',
            growthRateFrom5yTo10y: formulaVariable.growthRateFrom5yTo10y ?? this.earningsFormula.variable.growthRateFrom5yTo10y,
            growthRateNext5y: formulaVariable.growthRateNext5y ?? this.earningsFormula.variable.growthRateNext5y,
            minimumRateReturn: formulaVariable.minimumRateReturn ?? this.earningsFormula.variable.minimumRateReturn,
            terminalMultiple: formulaVariable.terminalMultiple ?? this.earningsFormula.variable.terminalMultiple
        };
        this.formula$.next({...this.earningsFormula, variable});
        this.calculateFormulaResult();
    }

    private calculateFormulaResult() {
        const formula = this.earningsFormula;
        const variable = formula.variable;

        // calculate estimation
        const estimatedEarnings: number[] = [formula.eps];
        const estimatedDiscountedPV: number[] = [];

        for (let i = 1; i < formula.dates.length; i++) {
            const tmpGrowth = i <= 5 ? variable.growthRateNext5y : variable.growthRateFrom5yTo10y;
            estimatedEarnings.push(lastElement(estimatedEarnings) * (1 + tmpGrowth));
            estimatedDiscountedPV.push(estimatedEarnings[i] * (1 + variable.minimumRateReturn) ** (-i));
        }

        estimatedEarnings.splice(0, 1); // remove initial eps

        const earningsTerminalValue = lastElement(estimatedEarnings) * variable.terminalMultiple;
        const pvTerminalValue = earningsTerminalValue * (1 + variable.minimumRateReturn) ** (-estimatedDiscountedPV.length - 1);
        const estimatedIntrinsicValue = estimatedDiscountedPV.reduce((a, b) => a + b, 0) + pvTerminalValue;

        // save terminal values
        estimatedDiscountedPV.push(pvTerminalValue);
        estimatedEarnings.push(earningsTerminalValue);

        // save formula new estimation
        this.formula$.next({...formula, estimatedDiscountedPV, estimatedEarnings, estimatedIntrinsicValue});
    }

    private watchActiveSymbolChange() {
        this.symbolStorageService.getActiveSymbol().pipe(
            filter(symbol => !!symbol),
            switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
        ).subscribe(details => {
            const formula = details.calculatedPredictions.INTRINSIC_V1;
            this.formula$.next(formula);
            this.initialVariablesState = formula?.variable;
        });
    }
}
