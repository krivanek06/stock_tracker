import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StDiscountedCashFlowFormula, SymbolStorageService} from '@core';
import {filter, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DiscountedCashflowFormulaService {

    private formula$: BehaviorSubject<StDiscountedCashFlowFormula> = new BehaviorSubject<StDiscountedCashFlowFormula>(null);

    constructor(private symbolStorageService: SymbolStorageService) {
        this.watchActiveSymbolChange();
    }

    get discountedCashFlowFormula(): StDiscountedCashFlowFormula {
        return this.formula$.value;
    }

    getDiscountedCashFlowFormula(): Observable<StDiscountedCashFlowFormula> {
        return this.formula$.asObservable();
    }

    private watchActiveSymbolChange() {
        this.symbolStorageService.getActiveSymbol().pipe(
            filter(symbol => !!symbol),
            switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
        ).subscribe(details => {
            this.formula$.next(details.calculatedPredictions.DCF_V1);
        });
    }
}
