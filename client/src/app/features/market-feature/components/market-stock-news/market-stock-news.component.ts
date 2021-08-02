import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmStockNew} from '@core';

@Component({
    selector: 'app-market-stock-news',
    templateUrl: './market-stock-news.component.html',
    styleUrls: ['./market-stock-news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketStockNewsComponent implements OnInit {
    @Input() stockArticle: StfmStockNew;

    constructor() {
    }

    ngOnInit() {
    }

}
