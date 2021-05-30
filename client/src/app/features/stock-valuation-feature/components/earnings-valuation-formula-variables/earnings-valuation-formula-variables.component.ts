import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StEarningsValuationFormulaVariable} from '@core';

@Component({
    selector: 'app-earnings-valuation-formula-variables',
    templateUrl: './earnings-valuation-formula-variables.component.html',
    styleUrls: ['./earnings-valuation-formula-variables.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarningsValuationFormulaVariablesComponent implements OnInit {
    @Input() variables: StEarningsValuationFormulaVariable;

    constructor() {
    }

    ngOnInit() {
    }

}
