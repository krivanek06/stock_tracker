import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData, StGroupUser, StUserIndentificationDataFragment } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { ConfirmableWithCheckbox, DialogService } from '@shared';

@Component({
	selector: 'app-group-details-overview-invitations-container',
	templateUrl: './group-details-overview-invitations-container.component.html',
	styleUrls: ['./group-details-overview-invitations-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewInvitationsContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;

	displayUsers: StUserIndentificationDataFragment[] = [];

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService) {}

	ngOnInit() {}

	@ConfirmableWithCheckbox('Please confirm sending invitation for the selected user', 'Confirm')
	inviteUser(userIdentification: StUserIndentificationDataFragment) {
		this.groupFeatureFacadeService.toggleInviteUserIntoGroup(userIdentification, this.groupAllData.id, true);
	}

	@ConfirmableWithCheckbox('Please confirm removing invitation for the selected user', 'Confirm')
	removeInvitation(groupUser: StGroupUser) {
		this.groupFeatureFacadeService.toggleInviteUserIntoGroup(groupUser, this.groupAllData.id, false);
	}

	async receivedInvitation(groupUser: StGroupUser) {
		const message = `Do you want to accept or decline ${groupUser.nickName}'s invitation to your group ?`;
		const isUserAccepted = await DialogService.presentConfirmationPopOver(message, 'Accept', 'Decline');
		this.groupFeatureFacadeService.toggleUsersInvitationRequestToGroup(groupUser, this.groupAllData.id, isUserAccepted);
	}

	displaySearchedUsers(users: StUserIndentificationDataFragment[]) {
		this.displayUsers = users;
	}
}
