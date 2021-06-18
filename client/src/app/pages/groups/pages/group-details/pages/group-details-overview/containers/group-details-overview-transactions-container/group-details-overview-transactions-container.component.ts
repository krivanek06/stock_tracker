import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StGroupAllData} from '@core';

@Component({
    selector: 'app-group-details-overview-transactions-container',
    templateUrl: './group-details-overview-transactions-container.component.html',
    styleUrls: ['./group-details-overview-transactions-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsOverviewTransactionsContainerComponent implements OnInit {
    @Input() groupAllData: StGroupAllData;

    constructor() {
    }

    ngOnInit() {
    }

}
