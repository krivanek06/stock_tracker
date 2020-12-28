import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupPartialData, StUserGroups} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-group-types-card',
    templateUrl: './group-types-card.component.html',
    styleUrls: ['./group-types-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupTypesCardComponent implements OnInit {
    @Output() clickedGroupEmitter: EventEmitter<StGroupPartialData> = new EventEmitter<StGroupPartialData>();

    @Input() groups: StUserGroups;
    @Input() activeGroup: string;

    constructor() {
    }

    ngOnInit() {
    }

    clickedGroup(group: StGroupPartialData) {
        this.activeGroup = group.groupId;
        this.clickedGroupEmitter.emit(group);
    }
}
