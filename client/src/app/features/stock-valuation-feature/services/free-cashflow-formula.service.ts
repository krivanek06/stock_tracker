import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StFreeCashFlowFormula, SymbolStorageService} from '@core';
import {filter, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FreeCashflowFormulaService {

    private formula$: BehaviorSubject<StFreeCashFlowFormula> = new BehaviorSubject<StFreeCashFlowFormula>(null);

    constructor(private symbolStorageService: SymbolStorageService) {
        this.watchActiveSymbolChange();
    }

    get freeCashFlowFormula(): StFreeCashFlowFormula {
        return this.formula$.value;
    }

    getFreeCashFlowFormula(): Observable<StFreeCashFlowFormula> {
        return this.formula$.asObservable();
    }

    calculateFormulaResult(applyNetBorrowings: boolean) {
        const formula = this.freeCashFlowFormula;

        // calculate free cash flow
        const freeCashFlows: number[] = [];
        for (let i = 0; i < formula.freeCashFlows.length; i++) {
            const operatingActivity = formula.operatingActivities[i] ?? 0;
            const capitalExpenditure = formula.capitalExpenditures[i] ?? 0;
            /*const netBorrowing = formula.netBorrowings[i] ?? 0;
            if (applyNetBorrowings) {
                freeCashFlows.push(operatingActivity + capitalExpenditure + netBorrowing);
            } else {
                freeCashFlows.push(operatingActivity + capitalExpenditure);
            }*/
            freeCashFlows.push(operatingActivity + capitalExpenditure);
        }

        // calculate estimations
        const avgFcf = freeCashFlows.reduce((a, b) => a + b, 0) / freeCashFlows.length;
        const estimatedIntrinsicMarketCap = avgFcf / formula.minimumRateReturn;
        const estimatedIntrinsicValue = estimatedIntrinsicMarketCap / formula.sharesOutstanding;

        // save data
        this.formula$.next({...formula, freeCashFlows, avgFcf, estimatedIntrinsicMarketCap, estimatedIntrinsicValue});
    }

    private watchActiveSymbolChange() {
        this.symbolStorageService.getActiveSymbol().pipe(
            filter(symbol => !!symbol),
            switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
        ).subscribe(details => {
            this.formula$.next(details.calculatedPredictions.FCF_V1);
        });
    }
}
