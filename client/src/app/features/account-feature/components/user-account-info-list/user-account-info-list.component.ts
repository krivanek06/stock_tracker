import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StUserPartialInformation} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-user-account-info-list',
    templateUrl: './user-account-info-list.component.html',
    styleUrls: ['./user-account-info-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountInfoListComponent implements OnInit {
    @Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() userPartialInformation: StUserPartialInformation;
    @Input() clickable = false;
    @Input() showDeleteButton = false;

    constructor() {
    }

    ngOnInit() {
    }

    deletePerson() {
        this.deleteEmitter.emit();
    }
}
