import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StFreeCashFlowFormula} from '@core';

@Component({
    selector: 'app-free-cashflow-formula',
    templateUrl: './free-cashflow-formula.component.html',
    styleUrls: ['./free-cashflow-formula.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeCashflowFormulaComponent implements OnInit {
    @Input() formula: StFreeCashFlowFormula;

    constructor() {
    }

    ngOnInit() {
    }

}
