import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
	GraphqlGroupService,
	GroupStorageService,
	StGroupAllData,
	StGroupAllDataInput,
	StGroupIdentificationDataFragment,
	StGroupUser,
	StUserIndentificationDataFragment,
	UserStorageService
} from '@core';
import { DialogService } from '@shared';
import { GroupCreateModalComponent, GroupMemberOverviewModalComponent } from '../entry-components';

@Injectable({
	providedIn: 'root',
})
export class GroupFeatureFacadeService {
	constructor(
		private dialog: MatDialog,
		private userStorageService: UserStorageService,
		private groupStorageService: GroupStorageService,
		private graphqlGroupService: GraphqlGroupService
	) { }

	async createGroup(editedGroup?: StGroupAllData): Promise<void> {
		const dialogRef = this.dialog.open(GroupCreateModalComponent, {
			data: { editedGroup },
			panelClass: 'g-mat-dialog-big',
			maxWidth: '100vw',
			minWidth: '60vw',
		});

		const dismiss = await dialogRef.afterClosed().toPromise();
		const groupAllDataInput = dismiss?.groupAllDataInput as StGroupAllDataInput;

		if (!!groupAllDataInput) {
			if (!editedGroup) {
				DialogService.showNotificationBar(`Your request to create group ${groupAllDataInput.name} has been sent`, 'notification');
				await this.graphqlGroupService.createGroup(groupAllDataInput).toPromise();
				DialogService.showNotificationBar(`Group ${groupAllDataInput.name} has been created`);
			} else {
				await this.graphqlGroupService.editGroup(groupAllDataInput).toPromise();
				this.groupStorageService.setActiveGroupId(groupAllDataInput?.groupId || null);
				DialogService.showNotificationBar(`Group ${groupAllDataInput.name} has been edited`);
			}
		}
	}

	async showGroupMemberOverviewModal(groupUser: StGroupUser): Promise<void> {
		this.dialog.open(GroupMemberOverviewModalComponent, {
			data: { groupUser },
			panelClass: 'g-mat-dialog-big',
		});
	}

	/***
	 * User can send or cancel his sent invitation request to group
	 * @param groupId
	 */
	async answerReceivedGroupInvitation(stGroupPartialData: StGroupIdentificationDataFragment, accept: boolean): Promise<void> {
		await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();
		const result = accept ? 'accepted' : 'declined';
		DialogService.showNotificationBar(`You ${result} group ${stGroupPartialData.name}'s invitation`);
	}

	async deleteGroup(): Promise<boolean> {
		if (this.userStorageService.user.id !== this.groupStorageService.activeGroup.owner.id) {
			DialogService.showNotificationBar('Action terminated! Only the group owner can delete this group', 'error');
			return false;
		}

		await this.graphqlGroupService.deleteGroup(this.groupStorageService.activeGroup).toPromise();
		DialogService.showNotificationBar(`Group ${this.groupStorageService.activeGroup.name} has been deleted`);

		return true;
	}

	/***
	 * User can send or cancel his sent invitation request to group
	 * @param groupId
	 */
	async toggleInvitationRequestToGroup(stGroupPartialData: StGroupIdentificationDataFragment, sendInvitation: boolean): Promise<void> {
		await this.graphqlGroupService.toggleInvitationRequestToGroup(stGroupPartialData, sendInvitation).toPromise();

		if (sendInvitation) {
			DialogService.showNotificationBar(`You have send your request to join group ${stGroupPartialData.name}`);
		} else {
			DialogService.showNotificationBar(`You have declined your request to joining group ${stGroupPartialData.name}`);
		}
	}

	/***
		Group manager / owner can invite / remove invitation for user
		@param  userId - id of user who is invited
		@param  groupId - id of group where user is invited
		@param  inviteUser - invite or remove invitation if false
	*/
	async toggleInviteUserIntoGroup(groupUser: StUserIndentificationDataFragment | StGroupUser, groupId: string, inviteUser: boolean): Promise<void> {
		// remove invitation for user
		if (!inviteUser) {
			await this.graphqlGroupService.toggleInviteUserIntoGroup(groupUser, groupId, inviteUser).toPromise();
			DialogService.showNotificationBar(`Group invitation for user: ${groupUser.nickName} has been removed`);
			return;
		}
		// check if user already a member or received invitation
		if (this.groupStorageService.membersIds.includes(groupUser.id)) {
			DialogService.showNotificationBar(`User: ${groupUser.nickName} is already a member of this group`, 'error');
			return;
		}
		// do not allow double invitaiton
		if (this.groupStorageService.sentInvitationIds.includes(groupUser.id)) {
			DialogService.showNotificationBar(`You have already sent an invitation for user: ${groupUser.nickName}`, 'error');
			return;
		}
		// user sent invitaiton to group
		if (this.groupStorageService.invitationReceivedIds.includes(groupUser.id)) {
			DialogService.showNotificationBar(`User: ${groupUser.nickName} already sent an invitation for this group, please accept his`, 'error');
			return;
		}
		// cannot invite yourself into group
		if (this.groupStorageService.activeGroup.owner.id === groupUser.id) {
			DialogService.showNotificationBar(`Sorry man, you cannot invite yourself. Check the 'join group' button`, 'error');
			return;
		}

		// send invitation for user
		//DialogService.showConfirmDialog(`Sending invitation for ${groupUser.nickName}`);
		await this.graphqlGroupService.toggleInviteUserIntoGroup(groupUser, groupId, inviteUser).toPromise();
		DialogService.showNotificationBar(`Group invitation to user: ${groupUser.nickName} has been send`);
	}

	/***
		Group owner / manager can accept / deny users request into group
		@param  userId - id of user who is invited
		@param  groupId - id of group where user is invited
		@param  acceptUser - acceptUser or remove invitationReceived if false
	*/
	async toggleUsersInvitationRequestToGroup(groupUser: StGroupUser | StUserIndentificationDataFragment, groupId: string, acceptUser: boolean) {
		await this.graphqlGroupService.toggleUsersInvitationRequestToGroup(groupUser.id, groupId, acceptUser).toPromise();

		if (acceptUser) {
			DialogService.showNotificationBar(`You have successfully accpted user: ${groupUser.nickName} into group`);
		} else {
			DialogService.showNotificationBar(`You have declined user: ${groupUser.nickName} request for joining into group`);
		}
	}

	async leaveGroup(): Promise<void> {
		await this.graphqlGroupService.leaveGroup(this.groupStorageService.activeGroup.id).toPromise();
		DialogService.showNotificationBar(`You left group ${this.groupStorageService.activeGroup.name}`);
	}

	async removeMemberFromGroup({ id, name }: StGroupAllData, groupUser: StGroupUser): Promise<void> {
		await this.graphqlGroupService.removeMemberFromGroup(id, groupUser).toPromise();
		DialogService.showNotificationBar(`You have successfully removed user ${groupUser.nickName} from group ${name}`);
	}

	async toggleWatchGroup({ id, name }: StGroupAllData, startWatching: boolean): Promise<void> {
		await this.graphqlGroupService.toggleWatchGroup(id, startWatching).toPromise();
		if (startWatching) {
			DialogService.showNotificationBar(`You have saved group ${name} into your watchlist`);
		} else {
			DialogService.showNotificationBar(`You have removed group ${name} from your watchlist`);
		}
	}
}
