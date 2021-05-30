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
        this.symbolStorageService.getActiveSymbol().pipe(
            filter(symbol => !!symbol),
            switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
        ).subscribe(details => {
            this.formula$.next(details.calculatedPredictions?.FCF_V1);
        });
    }

    get freeCashFlowFormula(): StFreeCashFlowFormula {
        return this.formula$.value;
    }

    getFreeCashFlowFormula(): Observable<StFreeCashFlowFormula> {
        return this.formula$.asObservable();
    }
}
