import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StHolding, StTransactionInput, StTransactionOperationEnum } from '@core';
import { NavParams, PopoverController } from '@ionic/angular';
import { positiveNumberValidator, requiredValidator, wholeNumberValidator } from '@shared';

@Component({
	selector: 'app-trade-confirmation-pop-over',
	templateUrl: './trade-confirmation-pop-over.component.html',
	styleUrls: ['./trade-confirmation-pop-over.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeConfirmationPopOverComponent implements OnInit {
	STTransactionOperationEnum = StTransactionOperationEnum;
	form!: FormGroup;

	// received properties
	symbol!: string;
	symbolLogoUrl!: string;
	price!: number;
	holding!: StHolding;
	portoflioCash!: number;

	constructor(private popoverController: PopoverController, private navParams: NavParams, private fb: FormBuilder) {}

	get units(): AbstractControl {
		return this.form.get('units') as AbstractControl;
	}

	get confirmation(): AbstractControl {
		return this.form.get('confirmation') as AbstractControl;
	}

	ngOnInit() {
		this.symbol = this.navParams.get('symbol');
		this.symbolLogoUrl = this.navParams.get('symbolLogoUrl');
		this.price = Number(this.navParams.get('price'));
		this.holding = this.navParams.get('holding');
		this.portoflioCash = this.navParams.get('portoflioCash');

		this.initForm();
	}

	submit(operation: StTransactionOperationEnum) {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			const data: StTransactionInput = {
				symbol: this.symbol,
				symbol_logo_url: this.symbolLogoUrl,
				units: Number(this.units.value),
				operation,
			};
			this.popoverController.dismiss({ data });
		}
	}

	dismiss() {
		this.popoverController.dismiss(null);
	}

	private initForm() {
		this.form = this.fb.group({
			units: [null, [requiredValidator, positiveNumberValidator, wholeNumberValidator]],
			confirmation: [false, [Validators.required, Validators.requiredTrue]],
		});
	}
}
