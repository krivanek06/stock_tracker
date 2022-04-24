import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { StfmStockScreenerInput } from '@core';
import {
	marketSearchCountriesInputSource,
	marketSearchEtfInputSource,
	marketSearchExchangesInputSource,
	marketSearchFormConfig,
	marketSearchIndustriesInputSource,
	marketSearchSectorsInputSource,
} from '../../../models';

@Component({
	selector: 'app-market-search-form',
	templateUrl: './market-search-form.component.html',
	styleUrls: ['./market-search-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketSearchFormComponent implements OnInit {
	@Output() searchFormChangeEmitter: EventEmitter<StfmStockScreenerInput> = new EventEmitter<StfmStockScreenerInput>();

	marketSearchSectorsInputSource = marketSearchSectorsInputSource;
	marketSearchIndustriesInputSource = marketSearchIndustriesInputSource;
	marketSearchCountriesInputSource = marketSearchCountriesInputSource;
	marketSearchExchangesInputSource = marketSearchExchangesInputSource;
	marketSearchEtfInputSource = marketSearchEtfInputSource;
	marketSearchFormConfig = marketSearchFormConfig;

	form!: FormGroup;

	constructor(private fb: FormBuilder) {}

	get marketCapMoreThan(): AbstractControl {
		return this.form.get('marketCapMoreThan') as AbstractControl;
	}

	get marketCapLowerThan(): AbstractControl {
		return this.form.get('marketCapLowerThan') as AbstractControl;
	}

	get priceMoreThan(): AbstractControl {
		return this.form.get('priceMoreThan') as AbstractControl;
	}

	get priceLowerThan(): AbstractControl {
		return this.form.get('priceLowerThan') as AbstractControl;
	}

	get betaMoreThan(): AbstractControl {
		return this.form.get('betaMoreThan') as AbstractControl;
	}

	get betaLowerThan(): AbstractControl {
		return this.form.get('betaLowerThan') as AbstractControl;
	}

	get volumeMoreThan(): AbstractControl {
		return this.form.get('volumeMoreThan') as AbstractControl;
	}

	get volumeLowerThan(): AbstractControl {
		return this.form.get('volumeLowerThan') as AbstractControl;
	}

	get dividendMoreThan(): AbstractControl {
		return this.form.get('dividendMoreThan') as AbstractControl;
	}

	get dividendLowerThan(): AbstractControl {
		return this.form.get('dividendLowerThan') as AbstractControl;
	}

	get isEtf(): AbstractControl {
		return this.form.get('isEtf') as AbstractControl;
	}

	get isActivelyTrading(): AbstractControl {
		return this.form.get('isActivelyTrading') as AbstractControl;
	}

	get sector(): AbstractControl {
		return this.form.get('sector') as AbstractControl;
	}

	get industry(): AbstractControl {
		return this.form.get('industry') as AbstractControl;
	}

	get country(): AbstractControl {
		return this.form.get('country') as AbstractControl;
	}

	get exchange(): AbstractControl {
		return this.form.get('exchange') as AbstractControl;
	}

	ngOnInit() {
		this.initForm();
		this.searchFormChangeEmitter.emit(this.formatToStfmStockScreenerInput());
		this.form.valueChanges.subscribe(() => this.searchFormChangeEmitter.emit(this.formatToStfmStockScreenerInput()));
		this.searchFormChangeEmitter.emit(this.formatToStfmStockScreenerInput());
	}

	private initForm(): void {
		this.form = this.fb.group({
			marketCapMoreThan: [{ value: 166840000000, disabled: false }],
			marketCapLowerThan: [{ value: 500000000000, disabled: true }],
			priceMoreThan: [{ value: 15, disabled: false }],
			priceLowerThan: [{ value: 150, disabled: true }],
			betaMoreThan: [{ value: 0.5, disabled: false }],
			betaLowerThan: [{ value: 3, disabled: true }],
			volumeMoreThan: [{ value: 10000000, disabled: false }],
			volumeLowerThan: [{ value: 100000000, disabled: true }],
			dividendMoreThan: [{ value: 0.25, disabled: true }],
			dividendLowerThan: [{ value: 1.5, disabled: true }],
			isEtf: [{ value: false, disabled: true }],
			isActivelyTrading: [{ value: true, disabled: true }],
			sector: [{ value: this.marketSearchSectorsInputSource[0].value, disabled: true }],
			industry: [{ value: this.marketSearchIndustriesInputSource[0].value, disabled: true }],
			country: [{ value: this.marketSearchCountriesInputSource[0].value, disabled: false }],
			exchange: [{ value: this.marketSearchExchangesInputSource[0].value, disabled: true }],
		});
	}

	// needed because some slider can be number input which pass data as text
	private formatToStfmStockScreenerInput(): StfmStockScreenerInput {
		let result: StfmStockScreenerInput = {};
		if (!this.exchange.disabled) {
			result.exchange = this.exchange.value;
		}
		if (!this.country.disabled) {
			result.country = this.country.value;
		}
		if (!this.industry.disabled) {
			result.industry = this.industry.value;
		}
		if (!this.sector.disabled) {
			result.sector = this.sector.value;
		}
		if (!this.isActivelyTrading.disabled) {
			result.isActivelyTrading = this.isActivelyTrading.value;
		}
		if (!this.isEtf.disabled) {
			result.isEtf = this.isEtf.value;
		}
		if (!this.dividendLowerThan.disabled) {
			result.dividendLowerThan = Number(this.dividendLowerThan.value);
		}
		if (!this.dividendMoreThan.disabled) {
			result.dividendMoreThan = Number(this.dividendMoreThan.value);
		}
		if (!this.volumeLowerThan.disabled) {
			result.volumeLowerThan = Number(this.volumeLowerThan.value);
		}
		if (!this.volumeMoreThan.disabled) {
			result.volumeMoreThan = Number(this.volumeMoreThan.value);
		}
		if (!this.betaLowerThan.disabled) {
			result.betaLowerThan = Number(this.betaLowerThan.value);
		}
		if (!this.betaMoreThan.disabled) {
			result.betaMoreThan = Number(this.betaMoreThan.value);
		}
		if (!this.priceLowerThan.disabled) {
			result.priceLowerThan = Number(this.priceLowerThan.value);
		}
		if (!this.priceMoreThan.disabled) {
			result.priceMoreThan = Number(this.priceMoreThan.value);
		}
		if (!this.marketCapLowerThan.disabled) {
			result.marketCapLowerThan = Number(this.marketCapLowerThan.value);
		}
		if (!this.marketCapMoreThan.disabled) {
			result.marketCapMoreThan = Number(this.marketCapMoreThan.value);
		}
		return result;
	}
}
