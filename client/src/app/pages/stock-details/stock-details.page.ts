import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.page.html',
    styleUrls: ['./stock-details.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsPage implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}
