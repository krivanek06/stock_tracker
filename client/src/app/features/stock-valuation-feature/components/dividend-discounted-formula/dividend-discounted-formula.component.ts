import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StDividendDiscountedFormula} from '@core';

@Component({
    selector: 'app-dividend-discounted-formula',
    templateUrl: './dividend-discounted-formula.component.html',
    styleUrls: ['./dividend-discounted-formula.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividendDiscountedFormulaComponent implements OnInit {
    @Input() formula: StDividendDiscountedFormula;

    constructor() {
    }

    ngOnInit() {
    }

}
