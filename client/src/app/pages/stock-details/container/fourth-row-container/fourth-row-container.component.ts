import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';
import {ChartType} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-fourth-row-container',
    templateUrl: './fourth-row-container.component.html',
    styleUrls: ['./fourth-row-container.component.scss'],
})
export class FourthRowContainerComponent implements OnInit {
    @Input() stockDetails: StockDetails;
    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {
    }

}
