import {Injectable} from '@angular/core';
import {StEarningsValuationFormula, SymbolStorageService} from '@core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, switchMap, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EarningsFormulaService {
    private formula$: BehaviorSubject<StEarningsValuationFormula> = new BehaviorSubject<StEarningsValuationFormula>(null);

    constructor(private symbolStorageService: SymbolStorageService) {
        this.symbolStorageService.getActiveSymbol().pipe(
            filter(symbol => !!symbol),
            switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
        ).subscribe(details => {
            this.formula$.next(details.calculatedPredictions?.INTRINSIC_V1);
        });
    }

    get earningsFormula(): StEarningsValuationFormula {
        return this.formula$.value;
    }

    getEarningsFormula(): Observable<StEarningsValuationFormula> {
        return this.formula$.asObservable();
    }
}
