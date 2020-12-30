import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Summary} from '../../../../api/customGraphql.service';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseSearchService} from '../../../../shared/services/firebase-search.service';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-stock-search',
    templateUrl: './stock-search.component.html',
    styleUrls: ['./stock-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockSearchComponent implements OnInit {
    @Output() clickedSymbolEmitter: EventEmitter<Summary> = new EventEmitter<Summary>();

    @Input() clearOnClick = false;
    searchedSummaries$: Observable<Summary[]>;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private firebaseSearchService: FirebaseSearchService) {
    }

    ngOnInit() {
        this.initForm();
        this.watchForm();
    }

    clickedSummary(summary: Summary) {
        this.clickedSymbolEmitter.emit(summary);
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
        this.searchedSummaries$ = this.form.get('symbol').valueChanges.pipe(
            debounceTime(300),
            switchMap(res => {
                if (!res || res.length <= 1) {
                    return of(null);
                }
                return this.firebaseSearchService.queryStockSummaries(res);
            })
        );
    }

}
