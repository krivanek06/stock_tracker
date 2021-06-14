import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StUserIndentificationDataFragment} from '@core';

@Component({
    selector: 'app-user-account-info-list',
    templateUrl: './user-account-info-list.component.html',
    styleUrls: ['./user-account-info-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountInfoListComponent implements OnInit {
    @Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() stUserPublicData: StUserIndentificationDataFragment;
    @Input() sinceDate: string;
    @Input() clickable = false;
    @Input() showDeleteButton = false;
    @Input() fullWith = false;

    constructor() {
    }

    ngOnInit() {
    }

    deletePerson() {
        this.deleteEmitter.emit();
    }

    clickedPerson() {
        this.clickedEmitter.emit();
    }
}
