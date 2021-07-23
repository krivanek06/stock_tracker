import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmSplitHistory} from '@core';

@Component({
    selector: 'app-details-split-history',
    templateUrl: './details-split-history.component.html',
    styleUrls: ['./details-split-history.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSplitHistoryComponent implements OnInit {
    @Input() splitHistories: StfmSplitHistory[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
