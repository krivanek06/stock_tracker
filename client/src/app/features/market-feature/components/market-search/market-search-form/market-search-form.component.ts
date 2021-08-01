import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {
    marketSearchActivelyTradedInputSource,
    marketSearchCountriesInputSource,
    marketSearchEtfInputSource,
    marketSearchExchangesInputSource,
    marketSearchIndustriesInputSource,
    marketSearchSectorsInputSource,
} from '../../../models';
import {StfmStockScreenerInput} from '@core';

@Component({
    selector: 'app-market-search-form',
    templateUrl: './market-search-form.component.html',
    styleUrls: ['./market-search-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketSearchFormComponent implements OnInit {
    @Output() searchFormChangeEmitter: EventEmitter<StfmStockScreenerInput> = new EventEmitter<StfmStockScreenerInput>();

    marketSearchSectorsInputSource = marketSearchSectorsInputSource;
    marketSearchIndustriesInputSource = marketSearchIndustriesInputSource;
    marketSearchCountriesInputSource = marketSearchCountriesInputSource;
    marketSearchExchangesInputSource = marketSearchExchangesInputSource;
    marketSearchEtfInputSource = marketSearchEtfInputSource;
    marketSearchActivelyTradedInputSource = marketSearchActivelyTradedInputSource;

    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }


    get marketCapMoreThan(): AbstractControl {
        return this.form.get('marketCapMoreThan');
    }

    get marketCapLowerThan(): AbstractControl {
        return this.form.get('marketCapLowerThan');
    }

    get priceMoreThan(): AbstractControl {
        return this.form.get('priceMoreThan');
    }

    get priceLowerThan(): AbstractControl {
        return this.form.get('priceLowerThan');
    }

    get betaMoreThan(): AbstractControl {
        return this.form.get('betaMoreThan');
    }

    get betaLowerThan(): AbstractControl {
        return this.form.get('betaLowerThan');
    }

    get volumeMoreThan(): AbstractControl {
        return this.form.get('volumeMoreThan');
    }

    get volumeLowerThan(): AbstractControl {
        return this.form.get('volumeLowerThan');
    }

    get dividendMoreThan(): AbstractControl {
        return this.form.get('dividendMoreThan');
    }

    get dividendLowerThan(): AbstractControl {
        return this.form.get('dividendLowerThan');
    }

    get isEtf(): AbstractControl {
        return this.form.get('isEtf');
    }

    get isActivelyTrading(): AbstractControl {
        return this.form.get('isActivelyTrading');
    }

    get sector(): AbstractControl {
        return this.form.get('sector');
    }

    get industry(): AbstractControl {
        return this.form.get('industry');
    }

    get country(): AbstractControl {
        return this.form.get('country');
    }

    get exchange(): AbstractControl {
        return this.form.get('exchange');
    }

    ngOnInit() {
        this.initForm();
        this.searchFormChangeEmitter.emit(this.form.value);
        this.form.valueChanges.subscribe(res => this.searchFormChangeEmitter.emit(res));
    }

    private initForm(): void {
        this.form = this.fb.group({
            marketCapMoreThan: [{value: 10000000, disabled: false}],
            marketCapLowerThan: [{value: 1000000000, disabled: false}],
            priceMoreThan: [{value: 100000000, disabled: false}],
            priceLowerThan: [{value: 100000000, disabled: true}],
            betaMoreThan: [{value: 1, disabled: false}],
            betaLowerThan: [{value: 3, disabled: true}],
            volumeMoreThan: [{value: 10000000, disabled: false}],
            volumeLowerThan: [{value: 100000000, disabled: true}],
            dividendMoreThan: [{value: 0, disabled: true}],
            dividendLowerThan: [{value: 2, disabled: true}],
            isEtf: [{value: false, disabled: true}],
            isActivelyTrading: [{value: true, disabled: true}],
            sector: [{value: this.marketSearchSectorsInputSource[0].value, disabled: true}],
            industry: [{value: this.marketSearchIndustriesInputSource[0].value, disabled: true}],
            country: [{value: this.marketSearchCountriesInputSource[0].value, disabled: true}],
            exchange: [{value: this.marketSearchExchangesInputSource[0].value, disabled: true}]
        });
    }

}


















