import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupIdentificationDataFragment, StUserGroups} from '@core';

@Component({
    selector: 'app-group-types-card',
    templateUrl: './group-types-card.component.html',
    styleUrls: ['./group-types-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupTypesCardComponent implements OnInit {
    @Output() clickedGroupEmitter: EventEmitter<StGroupIdentificationDataFragment> = new EventEmitter<StGroupIdentificationDataFragment>();

    @Input() groups: StUserGroups;
    @Input() activeGroup: string;

    constructor() {
    }

    ngOnInit() {
    }

    clickedGroup(group: StGroupIdentificationDataFragment) {
        this.activeGroup = group.groupId;
        this.clickedGroupEmitter.emit(group);
    }
}
