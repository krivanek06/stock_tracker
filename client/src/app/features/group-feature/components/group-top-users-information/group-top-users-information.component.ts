import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StGroupIdentificationInterface } from '@core';

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
	@Output() stopWatchingGroupEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() startWatchingGroupEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() groupAllData!: StGroupIdentificationInterface;
	@Input() showVisitButton = false;
	@Input() showAcceptButton = false;
	@Input() showDeclineButton = false;
	@Input() showDeleteButton = false;
	@Input() showLeaveButton = false;
	@Input() showSendInvitationButton = false;
	@Input() showRemoveInvitationButton = false;
	@Input() showStopWatchingGroup = false;
	@Input() showStartWatchingGroup: boolean | null = false;

	constructor() {}

	ngOnInit() {
		console.log(this.groupAllData);
	}

	startWatchingGroup() {
		this.startWatchingGroupEmitter.emit();
	}

	stopWatchingGroup() {
		this.stopWatchingGroupEmitter.emit();
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
