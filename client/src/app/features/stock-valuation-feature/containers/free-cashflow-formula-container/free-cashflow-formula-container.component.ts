import {Component, OnInit} from '@angular/core';
import {FreeCashflowFormulaService} from '../../services';
import {Observable} from 'rxjs';
import {StFreeCashFlowFormula} from '@core';

@Component({
    selector: 'app-free-cashflow-formula-container',
    templateUrl: './free-cashflow-formula-container.component.html',
    styleUrls: ['./free-cashflow-formula-container.component.scss'],
})
export class FreeCashflowFormulaContainerComponent implements OnInit {
    freeCashFlowFormula$: Observable<StFreeCashFlowFormula>;

    constructor(private freeCashFlowFormulaService: FreeCashflowFormulaService) {
    }

    ngOnInit() {
        this.freeCashFlowFormula$ = this.freeCashFlowFormulaService.getFreeCashFlowFormula();
    }

}
