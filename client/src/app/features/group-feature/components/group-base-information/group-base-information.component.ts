import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupAllData, StGroupIdentificationDataFragment} from '@core';

@Component({
    selector: 'app-group-base-information',
    templateUrl: './group-base-information.component.html',
    styleUrls: ['./group-base-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupBaseInformationComponent implements OnInit {
    @Output() acceptEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() declineEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() visitEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() inviteEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() groupIdentification: StGroupIdentificationDataFragment | StGroupAllData;
    @Input() showVisitButton: boolean;
    @Input() showAcceptButton: boolean;
    @Input() showDeclineButton: boolean;
    @Input() showInviteButton: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    visit() {
        this.visitEmitter.emit();
    }

    accept() {
        this.acceptEmitter.emit();
    }

    decline() {
        this.declineEmitter.emit();
    }

    invite() {
        this.inviteEmitter.emit();
    }
}
