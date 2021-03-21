import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-stock',
    templateUrl: './search-stock.component.html',
    styleUrls: ['./search-stock.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
