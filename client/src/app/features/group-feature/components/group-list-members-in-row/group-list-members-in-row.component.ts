import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupUser, StUserPartialInformation} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-group-list-members-in-row',
    templateUrl: './group-list-members-in-row.component.html',
    styleUrls: ['./group-list-members-in-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupListMembersInRowComponent implements OnInit {
    @Output() deleteEmitter: EventEmitter<StUserPartialInformation> = new EventEmitter<StUserPartialInformation>();
    @Output() clickedEmitter: EventEmitter<StUserPartialInformation> = new EventEmitter<StUserPartialInformation>();

    @Input() groupUsers: StGroupUser[] = [];
    @Input() showDeleteButton = false;
    @Input() clickable = false;
    @Input() title: string;


    constructor() {
    }

    ngOnInit() {
    }

    deleteClicked(user: StUserPartialInformation) {
        this.deleteEmitter.emit(user);
    }

    userClicked(user: StUserPartialInformation) {
        this.clickedEmitter.emit(user);
    }
}
