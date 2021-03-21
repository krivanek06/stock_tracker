import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Estimates} from '@core';

@Component({
    selector: 'app-details-revenue-estimate',
    templateUrl: './details-revenue-estimate.component.html',
    styleUrls: ['./details-revenue-estimate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsRevenueEstimateComponent implements OnInit {
    @Input() revenueEstimates: Estimates[];

    constructor() {
    }

    ngOnInit() {
    }

}
