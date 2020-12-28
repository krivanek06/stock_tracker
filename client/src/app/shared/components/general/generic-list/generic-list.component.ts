import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-generic-list',
    templateUrl: './generic-list.component.html',
    styleUrls: ['./generic-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericListComponent implements OnInit {
    @Input() chartTitle: string;
    @Input() iconTitle: string;

    constructor() {
    }

    ngOnInit() {
    }

}
