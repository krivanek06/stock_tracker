import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StEarningsValuationFormulaVariable} from '@core';

@Component({
    selector: 'app-earnings-valuation-formula-variables',
    templateUrl: './earnings-valuation-formula-variables.component.html',
    styleUrls: ['./earnings-valuation-formula-variables.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarningsValuationFormulaVariablesComponent implements OnInit {
    @Output() growthRate5yEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output() growthRate10yEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output() minimumReturnEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output() terminalMultipleEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output() resetVariablesEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() variables: StEarningsValuationFormulaVariable;

    constructor() {
    }

    ngOnInit() {
    }

    growthRate5yChange(value: number) {
        this.growthRate5yEmitter.emit(value);
    }

    growthRate10yChange(value: number) {
        this.growthRate10yEmitter.emit(value);
    }

    minimumReturnChange(value: number) {
        this.minimumReturnEmitter.emit(value);
    }

    terminalMultipleChange(value: number) {
        this.terminalMultipleEmitter.emit(value);
    }

    resetVariables() {
        this.resetVariablesEmitter.emit();
    }
}
