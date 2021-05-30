import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StDiscountedCashFlowFormula} from '@core';

@Component({
    selector: 'app-discounted-cashflow-formula',
    templateUrl: './discounted-cashflow-formula.component.html',
    styleUrls: ['./discounted-cashflow-formula.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountedCashflowFormulaComponent implements OnInit {
    @Input() formula: StDiscountedCashFlowFormula;

    constructor() {
    }

    ngOnInit() {
    }

}
