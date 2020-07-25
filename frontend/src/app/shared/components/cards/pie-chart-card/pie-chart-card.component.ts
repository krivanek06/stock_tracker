import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-pie-chart-card',
    templateUrl: './pie-chart-card.component.html',
    styleUrls: ['./pie-chart-card.component.scss'],
})
export class PieChartCardComponent implements OnInit {
    @Input() chartTitle: string;
    @Input() data: any[];
    @Input() height = 350;
    @Input() cardHeight = 500;

    constructor() {
    }

    ngOnInit() {
    }

}
