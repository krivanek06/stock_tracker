import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTradingStrategyData} from '@core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-trading-strategy-rmc',
    templateUrl: './trading-strategy-rmc.component.html',
    styleUrls: ['./trading-strategy-rmc.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyRmcComponent implements OnInit {
    @Input() data: StTradingStrategyData;

    form: FormGroup;
    maxStopLoss: number;

    constructor(private fb: FormBuilder) {
    }

    get averageLoss(): AbstractControl {
        return this.form.get('averageLoss');
    }

    ngOnInit() {
        this.maxStopLoss = this.data.series[0].data[0] * (1 - this.data.series[1].data[0]);
        this.initForm();
        this.watchForm();
    }

    private initForm() {
        this.form = this.fb.group({
            averageLoss: [this.data.series[1].data[0] * 100]
        });
    }

    private watchForm() {
        this.averageLoss.valueChanges.subscribe(value => {
            console.log('value changed', value);
            this.maxStopLoss = this.data.series[0].data[0] * (1 - (value / 100));
        });
    }

}
