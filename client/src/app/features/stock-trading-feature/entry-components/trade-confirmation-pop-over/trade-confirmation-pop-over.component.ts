import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StHolding, StTransactionInput, StTransactionOperationEnum } from '@core';
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

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<TradeConfirmationPopOverComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { symbol: string; symbolLogoUrl: string; price: number; holding?: StHolding; portoflioCash: number }
	) {}

	get units(): AbstractControl {
		return this.form.get('units') as AbstractControl;
	}

	get confirmation(): AbstractControl {
		return this.form.get('confirmation') as AbstractControl;
	}

	get sellAll(): AbstractControl {
		return this.form.get('sellAll') as AbstractControl;
	}

	get buyAll(): AbstractControl {
		return this.form.get('buyAll') as AbstractControl;
	}

	// cannot buy more than I have cash
	get hasEnoughCashToBuy(): boolean {
		if (!this.units.value) {
			return true;
		}
		return this.units.value * this.data.price < this.data.portoflioCash;
	}

	// cannot sell more than I own
	get canSellSoManyUnits(): boolean {
		if (!this.units.value || !this.data.holding) {
			return false;
		}
		return this.data.holding.units >= this.units.value;
	}

	ngOnInit() {
		this.initForm();
		this.watchForm();
	}

	submit(operation: StTransactionOperationEnum) {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			const data: StTransactionInput = {
				symbol: this.data.symbol,
				symbol_logo_url: this.data.symbolLogoUrl,
				units: Number(this.units.value),
				operation,
			};
			this.dialogRef.close(data);
		}
	}

	dismiss() {
		this.dialogRef.close();
	}

	private initForm() {
		this.form = this.fb.group({
			units: [null, [requiredValidator, positiveNumberValidator, wholeNumberValidator]],
			confirmation: [false, [Validators.required, Validators.requiredTrue]],
			sellAll: [false],
			buyAll: [false],
		});
	}

	private watchForm(): void {
		this.sellAll.valueChanges.subscribe((res) => {
			if (!res || !this.data.holding) {
				return;
			}
			this.buyAll.patchValue(null);
			this.units.patchValue(this.data.holding.units);
		});

		this.buyAll.valueChanges.subscribe((res) => {
			if (!res) {
				return;
			}
			this.sellAll.patchValue(null);
			const total = Math.floor(this.data.portoflioCash / this.data.price);
			this.units.patchValue(total);
		});
	}
}
