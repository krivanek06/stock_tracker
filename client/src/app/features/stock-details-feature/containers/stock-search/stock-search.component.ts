import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GraphqlQueryService, StfmCompanyQuote} from '@core';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, switchMap, tap} from 'rxjs/operators';

@Component({
    selector: 'app-stock-search',
    templateUrl: './stock-search.component.html',
    styleUrls: ['./stock-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockSearchComponent implements OnInit {
    @Output() clickedSymbolEmitter: EventEmitter<StfmCompanyQuote> = new EventEmitter<StfmCompanyQuote>();

    @Input() clearOnClick = false;
    searchedCompanyQuotes: Observable<StfmCompanyQuote[]>;
    form: FormGroup;
    loading: boolean;

    constructor(private fb: FormBuilder,
                private firebaseSearchService: GraphqlQueryService) {
    }

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

    private initForm() {
        this.form = this.fb.group({
            symbol: [null]
        });
    }

    private watchForm() {
        this.searchedCompanyQuotes = this.form.get('symbol').valueChanges.pipe(
            tap((res: string) => this.loading = res?.length > 0),
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
