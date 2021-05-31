import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-free-cashflow-formula-checkbox',
    templateUrl: './free-cashflow-formula-checkbox.component.html',
    styleUrls: ['./free-cashflow-formula-checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeCashflowFormulaCheckboxComponent implements OnInit {
    @Output() changedCheckedValueEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    changedCheckedValue(event: CustomEvent) {
        this.changedCheckedValueEmitter.emit(event.detail.checked);
    }
}
