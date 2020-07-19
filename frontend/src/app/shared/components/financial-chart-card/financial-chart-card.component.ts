import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-financial-chart-card',
    templateUrl: './financial-chart-card.component.html',
    styleUrls: ['./financial-chart-card.component.scss'],
})
export class FinancialChartCardComponent implements OnInit {
    @Output() selectedPeriodEmitter: EventEmitter<string> = new EventEmitter<string>();

    @Input() chartTitle: string;
    @Input() price: any[];
    @Input() volume: any[];

    constructor() {
    }

    ngOnInit() {
    }

    loadIntervalData(period: string) {
        this.selectedPeriodEmitter.emit(period);
    }

}
