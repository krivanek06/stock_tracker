import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DiscountedCashflowFormulaService} from '../../services';
import {Observable} from 'rxjs';
import {StDiscountedCashFlowFormula} from '@core';

@Component({
    selector: 'app-discounted-cashflow-formula-container',
    templateUrl: './discounted-cashflow-formula-container.component.html',
    styleUrls: ['./discounted-cashflow-formula-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountedCashflowFormulaContainerComponent implements OnInit {
    discountedCashFlowFormula$: Observable<StDiscountedCashFlowFormula>;

    constructor(private discountedCashFlowValuationService: DiscountedCashflowFormulaService) {
    }

    ngOnInit() {
        this.discountedCashFlowFormula$ = this.discountedCashFlowValuationService.getDiscountedCashFlowFormula();
    }

}
