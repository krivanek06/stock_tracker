import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StEarningsValuationFormula} from '@core';

@Component({
    selector: 'app-earnings-valuation-formula',
    templateUrl: './earnings-valuation-formula.component.html',
    styleUrls: ['./earnings-valuation-formula.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarningsValuationFormulaComponent implements OnInit {
    @Input() formula: StEarningsValuationFormula;

    constructor() {
    }

    ngOnInit() {
    }

}
