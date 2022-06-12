import { Injectable } from '@angular/core';
import { StDiscountedCashFlowFormula, SymbolStorageService } from '@core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class DiscountedCashflowFormulaService {
	private formula$: BehaviorSubject<StDiscountedCashFlowFormula | null> = new BehaviorSubject<StDiscountedCashFlowFormula | null>(null);

	constructor(private symbolStorageService: SymbolStorageService) {
		this.watchActiveSymbolChange();
	}

	get discountedCashFlowFormula(): StDiscountedCashFlowFormula | null {
		return this.formula$.value;
	}

	getDiscountedCashFlowFormula(): Observable<StDiscountedCashFlowFormula | null> {
		return this.formula$.asObservable();
	}

	private watchActiveSymbolChange() {
		this.symbolStorageService
			.getActiveSymbol()
			.pipe(
				filter((symbol) => !!symbol),
				switchMap((symbol) => this.symbolStorageService.getStockDetails(symbol))
			)
			.subscribe((details) => {
				this.formula$.next(details?.calculatedPredictions?.DCF_V1 || null);
			});
	}
}
