import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupUser} from '@core';

@Component({
    selector: 'app-group-list-members-in-row',
    templateUrl: './group-list-members-in-row.component.html',
    styleUrls: ['./group-list-members-in-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupListMembersInRowComponent implements OnInit {
    @Output() deleteEmitter: EventEmitter<StGroupUser> = new EventEmitter<StGroupUser>();
    @Output() clickedEmitter: EventEmitter<StGroupUser> = new EventEmitter<StGroupUser>();

    @Input() groupUsers: StGroupUser[] = [];
    @Input() showDeleteButton = false;
    @Input() clickable = false;
    @Input() title: string;


    constructor() {
    }

    ngOnInit() {
    }

    deleteClicked(user: StGroupUser) {
        this.deleteEmitter.emit(user);
    }

    userClicked(user: StGroupUser) {
        this.clickedEmitter.emit(user);
    }
}
