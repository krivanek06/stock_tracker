import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StEarningsValuationFormula} from '@core';
import {EarningsFormulaService} from '../../services';

@Component({
    selector: 'app-earnings-valuation-formula-container',
    templateUrl: './earnings-valuation-formula-container.component.html',
    styleUrls: ['./earnings-valuation-formula-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarningsValuationFormulaContainerComponent implements OnInit {
    earningsFormula$: Observable<StEarningsValuationFormula>;

    constructor(private earningsValuationService: EarningsFormulaService) {
    }

    ngOnInit() {
        this.earningsFormula$ = this.earningsValuationService.getEarningsFormula();
    }

}
