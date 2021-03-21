import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StGroupAllData} from '@core';

@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.component.html',
    styleUrls: ['./group-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupInfoComponent implements OnInit {
    @Input() group: StGroupAllData;

    constructor() {
    }

    ngOnInit() {
    }

}
