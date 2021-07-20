import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmStockNew} from '@core';

@Component({
    selector: 'app-details-news',
    templateUrl: './details-news.component.html',
    styleUrls: ['./details-news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsNewsComponent implements OnInit {
    @Input() stockArticle: StfmStockNew;

    constructor() {
    }

    ngOnInit() {
    }

}
