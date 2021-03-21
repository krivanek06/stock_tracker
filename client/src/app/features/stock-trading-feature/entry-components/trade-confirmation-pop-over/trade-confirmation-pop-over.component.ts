import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavParams, PopoverController} from '@ionic/angular';
import {StTransactionInput, StTransactionOperationEnum, UserStorageService} from '@core';

@Component({
    selector: 'app-trade-confirmation-pop-over',
    templateUrl: './trade-confirmation-pop-over.component.html',
    styleUrls: ['./trade-confirmation-pop-over.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeConfirmationPopOverComponent implements OnInit {
    STTransactionOperationEnum = StTransactionOperationEnum;
    form: FormGroup;

    symbol: string;
    symbolLogoUrl: string;
    price: number;

    constructor(private userStorageService: UserStorageService,
                private popoverController: PopoverController,
                private navParams: NavParams,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.symbol = this.navParams.get('symbol');
        this.symbolLogoUrl = this.navParams.get('symbolLogoUrl');
        this.price = Number(this.navParams.get('price'));

        this.initForm();
    }

    submit(operation: StTransactionOperationEnum) {
        this.form.markAllAsTouched();
        if (!this.form.invalid) {
            const data: StTransactionInput = {
                symbol: this.symbol,
                symbol_logo_url: this.symbolLogoUrl,
                price: this.price,
                userId: this.userStorageService.user.uid,
                units: this.units.value,
                operation
            };
            this.popoverController.dismiss({data});
        }
    }

    dismiss() {
        this.popoverController.dismiss(null);
    }

    get units(): AbstractControl {
        return this.form.get('units');
    }

    get confirmation(): AbstractControl {
        return this.form.get('confirmation');
    }

    private initForm() {
        this.form = this.fb.group({
            units: [null, [Validators.required]],
            confirmation: [false, [Validators.required, Validators.requiredTrue]]
        });
    }
}
