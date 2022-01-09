import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StGroupIdentificationInterface } from '@core';

@Component({
	selector: 'app-group-base-information',
	templateUrl: './group-base-information.component.html',
	styleUrls: ['./group-base-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupBaseInformationComponent implements OnInit {
	@Output() acceptEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() declineEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() visitEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() leaveEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() editEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() sendInvitationEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() removeInvitationEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() reloadEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() stopWatchingGroupEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() startWatchingGroupEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() groupIdentification!: StGroupIdentificationInterface;
	@Input() showVisitButton: boolean | null = false;
	@Input() showAcceptButton: boolean | null = false;
	@Input() showDeclineButton: boolean | null = false;
	@Input() showDeleteButton: boolean | null = false;
	@Input() showLeaveButton: boolean | null = false;
	@Input() showSendInvitationButton: boolean | null = false;
	@Input() showRemoveInvitationButton: boolean | null = false;
	@Input() showEditButton: boolean | null = false;
	@Input() isGroupPrivate: boolean | null = false;
	@Input() showReloadButton: boolean | null = false;
	@Input() showStopWatchingGroup: boolean | null = false;
	@Input() showStartWatchingGroup: boolean | null = false;

	constructor() {}

	ngOnInit() {}

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

	edit() {
		this.editEmitter.emit();
	}

	sendInvitation() {
		if (this.isGroupPrivate) {
			return;
		}
		this.sendInvitationEmitter.emit();
	}

	removeInvitation() {
		this.removeInvitationEmitter.emit();
	}

	reload() {
		this.reloadEmitter.emit();
	}
}
