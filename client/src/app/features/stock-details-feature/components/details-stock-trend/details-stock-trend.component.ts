import {Component, Input, OnInit} from '@angular/core';
import {PageViews} from '@core';

@Component({
    selector: 'app-details-stock-trend',
    templateUrl: './details-stock-trend.component.html',
    styleUrls: ['./details-stock-trend.component.scss'],
})
export class DetailsStockTrendComponent implements OnInit {
    @Input() trend: PageViews;

    constructor() {
    }

    ngOnInit() {
    }

}
