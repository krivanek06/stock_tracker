import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GraphqlQueryService, StfmCompanyQuote } from '@core';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
	selector: 'app-stock-search',
	templateUrl: './stock-search.component.html',
	styleUrls: ['./stock-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockSearchComponent implements OnInit {
	@Output() clickedSymbolEmitter: EventEmitter<StfmCompanyQuote> = new EventEmitter<StfmCompanyQuote>();

	@Input() clearOnClick = false;
	@ViewChild('insideElement') insideElement;
	searchedCompanyQuotes$: Observable<StfmCompanyQuote[]>;
	form: FormGroup;
	loading: boolean;

	constructor(private fb: FormBuilder, private firebaseSearchService: GraphqlQueryService) {}

	ngOnInit() {
		this.initForm();
		this.watchForm();
	}

	clickedSummary(companyQuote: StfmCompanyQuote) {
		this.clickedSymbolEmitter.emit(companyQuote);

		if (this.clearOnClick) {
			this.form.get('symbol').patchValue(null);
		}
	}

	@HostListener('document:click', ['$event.target'])
	clickOutside(targetElement) {
		const clickedInside = this.insideElement.nativeElement.contains(targetElement);
		if (!clickedInside) {
			this.form.get('symbol').patchValue(null);
		}
	}
	private initForm() {
		this.form = this.fb.group({
			symbol: [null],
		});
	}

	private watchForm() {
		this.searchedCompanyQuotes$ = this.form.get('symbol').valueChanges.pipe(
			tap((res: string) => (this.loading = res?.length > 0)),
			debounceTime(600),
			switchMap((res: string) => {
				if (!res || res.length < 1) {
					return of(null);
				}
				return this.firebaseSearchService.queryStockQuotesByPrefix(res);
			})
		);
	}
}
