import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData, StGroupUser, StUserPublicData } from '@core';
import { DialogService, IdNameContainer } from '@shared';
import { USER_MEMBER_ACTIONS_ENUM } from '../../model/group-details-overview.model';

@Component({
	selector: 'app-group-details-overview-members-container',
	templateUrl: './group-details-overview-members-container.component.html',
	styleUrls: ['./group-details-overview-members-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewMembersContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;
	@Input() user: StUserPublicData;

	constructor() {}

	ngOnInit() {}

	clickedMember(groupUser: StGroupUser) {
		if (this.groupAllData.owner.id === this.user.id) {
			this.showOptionsForOwner(groupUser);
		} else {
			this.showGroupUserDetails(groupUser);
		}
	}

	private async showOptionsForOwner(groupUser: StGroupUser) {
		const options: IdNameContainer[] = [
			{ id: USER_MEMBER_ACTIONS_ENUM.MAKE_OWNER, name: 'Make user group owner' },
			{ id: USER_MEMBER_ACTIONS_ENUM.SHOW_USER_DETAILS, name: 'Show user details' },
			{ id: USER_MEMBER_ACTIONS_ENUM.REMOVE_FROM_GROUP, name: 'Remove from group' },
		];
		const res = await DialogService.presentOptionsPopOver('Select option', options);

		if (res === USER_MEMBER_ACTIONS_ENUM.MAKE_OWNER) {
			this.makeGroupUserAsOwner(groupUser);
		} else if (res === USER_MEMBER_ACTIONS_ENUM.REMOVE_FROM_GROUP) {
			this.removeGroupUserFromGroup(groupUser);
		} else if (res === USER_MEMBER_ACTIONS_ENUM.SHOW_USER_DETAILS) {
			this.showGroupUserDetails(groupUser);
		}
	}

	private async removeGroupUserFromGroup(groupUser: StGroupUser) {
		const message = `Please confirm removing member ${groupUser.nickName} from group ${this.groupAllData.name}`;
		if (await DialogService.presentConfirmationPopOver(message, 'confirm')) {
			console.log('remove user from group');
		}
	}

	private async makeGroupUserAsOwner(groupUser: StGroupUser) {
		const message = `Please confirm making group member ${groupUser.nickName} as a new group owner. 
        You will be permanently removed from your position.`;
		if (await DialogService.presentConfirmationPopOver(message, 'confirm')) {
			console.log('make new group owener');
		}
	}

	private showGroupUserDetails(groupUser: StGroupUser) {
		console.log('show details');
	}
}
