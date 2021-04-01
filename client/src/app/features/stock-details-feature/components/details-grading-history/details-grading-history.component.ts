import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UpgradeDowngradeHistory} from '@core';

@Component({
    selector: 'app-details-grading-history',
    templateUrl: './details-grading-history.component.html',
    styleUrls: ['./details-grading-history.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsGradingHistoryComponent implements OnInit {
    @Input() history: UpgradeDowngradeHistory[];

    constructor() {
    }

    ngOnInit() {
    }

}
