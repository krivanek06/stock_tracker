import { AccountOverviewDialogComponent } from '@account-feature';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StGroupAllData, StGroupUser, StUserPublicData } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { DialogService, IdNameContainer } from '@shared';
import { USER_MEMBER_ACTIONS_ENUM } from '../../group-details-overview.model';

@Component({
	selector: 'app-group-details-overview-members-container',
	templateUrl: './group-details-overview-members-container.component.html',
	styleUrls: ['./group-details-overview-members-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewMembersContainerComponent implements OnInit {
	@Input() groupAllData!: StGroupAllData;
	@Input() user?: StUserPublicData | null;

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService, private dialog: MatDialog) {}

	ngOnInit() {}

	clickedMember(groupUser: StGroupUser) {
		console.log('clicked', groupUser);
		if (this.user && this.groupAllData.owner.id === this.user.id && groupUser.id !== this.groupAllData.owner.id) {
			// if I am the owner and I did not clicked on myself
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
		if (await DialogService.showConfirmDialog(message)) {
			console.log('remove user from group');
			this.groupFeatureFacadeService.removeMemberFromGroup(this.groupAllData, groupUser);
		}
	}

	private async makeGroupUserAsOwner(groupUser: StGroupUser) {
		const message = `Please confirm making group member ${groupUser.nickName} as a new group owner. 
        You will be permanently removed from your position.`;
		if (await DialogService.showConfirmDialog(message)) {
			console.log('make new group owener');
		}
	}

	private showGroupUserDetails(groupUser: StGroupUser) {
		this.dialog.open(AccountOverviewDialogComponent, {
			data: { userIdentification: groupUser },
			panelClass: 'g-mat-dialog-big',
		});
	}
}