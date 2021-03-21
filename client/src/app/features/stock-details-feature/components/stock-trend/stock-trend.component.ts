import {Component, Input, OnInit} from '@angular/core';
import {PageViews} from '@core';

@Component({
    selector: 'app-stock-trend',
    templateUrl: './stock-trend.component.html',
    styleUrls: ['./stock-trend.component.scss'],
})
export class StockTrendComponent implements OnInit {
    @Input() trend: PageViews;

    constructor() {
    }

    ngOnInit() {
    }

}
