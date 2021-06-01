import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FreeCashflowFormulaService} from '../../services';
import {Observable} from 'rxjs';
import {StFreeCashFlowFormula} from '@core';

@Component({
    selector: 'app-free-cashflow-formula-container',
    templateUrl: './free-cashflow-formula-container.component.html',
    styleUrls: ['./free-cashflow-formula-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeCashflowFormulaContainerComponent implements OnInit {
    freeCashFlowFormula$: Observable<StFreeCashFlowFormula>;

    constructor(private freeCashFlowFormulaService: FreeCashflowFormulaService) {
    }

    ngOnInit() {
        this.freeCashFlowFormula$ = this.freeCashFlowFormulaService.getFreeCashFlowFormula();
    }

    applyNetBorrowings(value: boolean) {
        this.freeCashFlowFormulaService.calculateFormulaResult(value)
    }
}
