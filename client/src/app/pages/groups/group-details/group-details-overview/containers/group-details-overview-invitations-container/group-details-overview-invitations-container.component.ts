import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData, StGroupUser, StUserIdentificationDataFragment } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { Confirmable, DialogService } from '@shared';

@Component({
	selector: 'app-group-details-overview-invitations-container',
	templateUrl: './group-details-overview-invitations-container.component.html',
	styleUrls: ['./group-details-overview-invitations-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewInvitationsContainerComponent implements OnInit {
	@Input() groupAllData!: StGroupAllData;

	displayUsers: StUserIdentificationDataFragment[] = [];

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService) {}

	ngOnInit() {}

	@Confirmable('Please confirm sending invitation for the selected user')
	inviteUser(userIdentification: StUserIdentificationDataFragment) {
		this.groupFeatureFacadeService.toggleInviteUserIntoGroup(userIdentification, this.groupAllData.id, true);
	}

	@Confirmable('Please confirm removing invitation for the selected user')
	removeInvitation(groupUser: StUserIdentificationDataFragment | StGroupUser) {
		this.groupFeatureFacadeService.toggleInviteUserIntoGroup(groupUser, this.groupAllData.id, false);
	}

	async receivedInvitation(groupUser: StGroupUser) {
		const message = `Do you want to accept or decline ${groupUser.nickName}'s invitation to your group ?`;
		const isUserAccepted = await DialogService.showConfirmDialog(message, 'Accept', 'Decline');
		this.groupFeatureFacadeService.toggleUsersInvitationRequestToGroup(groupUser, this.groupAllData.id, isUserAccepted);
	}

	displaySearchedUsers(users: StUserIdentificationDataFragment[]) {
		this.displayUsers = users;
	}
}
