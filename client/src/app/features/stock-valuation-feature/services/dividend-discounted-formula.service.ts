import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StDividendDiscountedFormula, SymbolStorageService} from '@core';
import {filter, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DividendDiscountedFormulaService {

    private formula$: BehaviorSubject<StDividendDiscountedFormula> = new BehaviorSubject<StDividendDiscountedFormula>(null);

    constructor(private symbolStorageService: SymbolStorageService) {
        this.watchActiveSymbolChange();
    }

    get dividendDiscountedFormula(): StDividendDiscountedFormula {
        return this.formula$.value;
    }

    getDividendDiscountedFormula(): Observable<StDividendDiscountedFormula> {
        return this.formula$.asObservable();
    }

    private watchActiveSymbolChange() {
        this.symbolStorageService.getActiveSymbol().pipe(
            filter(symbol => !!symbol),
            switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
        ).subscribe(details => {
            this.formula$.next(details.calculatedPredictions.DDF_V1);
        });
    }
}
