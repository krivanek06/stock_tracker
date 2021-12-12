import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StGroupAllData, StGroupIdentificationDataFragment } from '@core';

@Component({
	selector: 'app-group-top-users-information',
	templateUrl: './group-top-users-information.component.html',
	styleUrls: ['./group-top-users-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupTopUsersInformationComponent implements OnInit {
	@Output() acceptEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() declineEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() visitEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() leaveEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() sendInvitationEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() removeInvitationEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() groupAllData!: StGroupIdentificationDataFragment | StGroupAllData;
	@Input() showVisitButton = false;
	@Input() showAcceptButton = false;
	@Input() showDeclineButton = false;
	@Input() showDeleteButton = false;
	@Input() showLeaveButton = false;
	@Input() showSendInvitationButton = false;
	@Input() showRemoveInvitationButton = false;

	constructor() {}

	ngOnInit() {}

	visit() {
		this.visitEmitter.emit();
	}

	accept() {
		this.acceptEmitter.emit();
	}

	decline() {
		this.declineEmitter.emit();
	}

	delete() {
		this.deleteEmitter.emit();
	}

	leave() {
		this.leaveEmitter.emit();
	}
	sendInvitation() {
		this.sendInvitationEmitter.emit();
	}

	removeInvitation() {
		this.removeInvitationEmitter.emit();
	}
}
