import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-list-skeleton',
    templateUrl: './list-skeleton.component.html',
    styleUrls: ['./list-skeleton.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSkeletonComponent implements OnInit {
    @Input() itemLength: number;
    @Input() skeletonHeight: number = 24;

    constructor() {
    }

    ngOnInit() {
    }

}
