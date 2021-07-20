import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmHolder, StfmHolderWithWeight} from '@core';

@Component({
    selector: 'app-details-holders',
    templateUrl: './details-holders.component.html',
    styleUrls: ['./details-holders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsHoldersComponent implements OnInit {
    @Input() holders: StfmHolder[] | StfmHolderWithWeight[] = [];
    @Input() currentSharePrice: number;
    @Input() outstandingShares: number;

    constructor() {
    }

    ngOnInit() {
    }

}
