import { Injectable } from '@angular/core';
import {
	GraphqlGroupService,
	GroupStorageService,
	StGroupAllData,
	StGroupAllDataInput,
	StGroupIdentificationDataFragment,
	StGroupUser,
	StUserIndentificationDataFragment,
	UserStorageService,
} from '@core';
import { ModalController } from '@ionic/angular';
import { DialogService } from '@shared';
import { GroupCreateModalComponent, GroupMemberOverviewModalComponent } from '../entry-components';

@Injectable({
	providedIn: 'root',
})
export class GroupFeatureFacadeService {
	constructor(
		private modalController: ModalController,
		private userStorageService: UserStorageService,
		private groupStorageService: GroupStorageService,
		private graphqlGroupService: GraphqlGroupService
	) {}

	async createGroup(editedGroup?: StGroupAllData): Promise<void> {
		const modal = await this.modalController.create({
			component: GroupCreateModalComponent,
			componentProps: { editedGroup },
			cssClass: 'custom-modal',
		});
		await modal.present();

		const dismiss = await modal.onDidDismiss();
		const groupAllDataInput = dismiss?.data?.groupAllDataInput as StGroupAllDataInput;

		if (!!groupAllDataInput) {
			if (!editedGroup) {
				await this.graphqlGroupService.createGroup(groupAllDataInput).toPromise();
				await DialogService.showNotificationBar(`Group ${groupAllDataInput.name} has been created`);
			} else {
				await this.graphqlGroupService.editGroup(groupAllDataInput).toPromise();
				this.groupStorageService.setActiveGroupId(groupAllDataInput?.groupId || null);
				await DialogService.showNotificationBar(`Group ${groupAllDataInput.name} has been edited`);
			}
		}
	}

	async showGroupMemberOverviewModal(groupUser: StGroupUser): Promise<void> {
		const modal = await this.modalController.create({
			component: GroupMemberOverviewModalComponent,
			componentProps: { groupUser },
			cssClass: 'custom-modal',
		});
		await modal.present();
	}

	/***
	 * User can send or cancel his sent invitation request to group
	 * @param groupId
	 */
	async answerReceivedGroupInvitation(stGroupPartialData: StGroupIdentificationDataFragment, accept: boolean): Promise<void> {
		await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();
		const result = accept ? 'accepted' : 'declined';
		await DialogService.showNotificationBar(`You ${result} group ${stGroupPartialData.name}'s invitation`);
	}

	async deleteGroup(): Promise<boolean> {
		if (this.userStorageService.user.id !== this.groupStorageService.activeGroup.owner.id) {
			await DialogService.showNotificationBar('Action terminated! Only the group owner can delete this group', 'error');
			return false;
		}

		await this.graphqlGroupService.deleteGroup(this.groupStorageService.activeGroup).toPromise();
		await DialogService.showNotificationBar(`Group ${this.groupStorageService.activeGroup.name} has been deleted`);

		return true;
	}

	/***
	 * User can send or cancel his sent invitation request to group
	 * @param groupId
	 */
	async toggleInvitationRequestToGroup(stGroupPartialData: StGroupIdentificationDataFragment, sendInvitation: boolean): Promise<void> {
		await this.graphqlGroupService.toggleInvitationRequestToGroup(stGroupPartialData, sendInvitation).toPromise();

		if (sendInvitation) {
			await DialogService.showNotificationBar(`You have send your request to join group ${stGroupPartialData.name}`);
		} else {
			await DialogService.showNotificationBar(`You have declined your request to joining group ${stGroupPartialData.name}`);
		}
	}

	/***
		Group manager / owner can invite / remove invitation for user
		@param  userId - id of user who is invited
		@param  groupId - id of group where user is invited
		@param  inviteUser - invite or remove invitation if false
	*/
	async toggleInviteUserIntoGroup(groupUser: StGroupUser | StUserIndentificationDataFragment, groupId: string, inviteUser: boolean): Promise<void> {
		// remove invitation for user
		if (!inviteUser) {
			await this.graphqlGroupService.toggleInviteUserIntoGroup(groupUser.id, groupId, inviteUser).toPromise();
			await DialogService.showNotificationBar(`Group invitation for user: ${groupUser.nickName} has been removed`);
			return;
		}
		// check if user already a member or received invitation
		if (this.groupStorageService.membersIds.includes(groupUser.id)) {
			await DialogService.showNotificationBar(`User: ${groupUser.nickName} is already a member of this group`, 'error');
			return;
		}
		// do not allow double invitaiton
		if (this.groupStorageService.sentInvitationIds.includes(groupUser.id)) {
			await DialogService.showNotificationBar(`You have already sent an invitation for user: ${groupUser.nickName}`, 'error');
			return;
		}
		// user sent invitaiton to group
		if (this.groupStorageService.invitationReceivedIds.includes(groupUser.id)) {
			await DialogService.showNotificationBar(`User: ${groupUser.nickName} already sent an invitation for this group, please accept his`, 'error');
			return;
		}
		// cannot invite yourself into group
		if (this.groupStorageService.activeGroup.owner.id === groupUser.id) {
			await DialogService.showNotificationBar(`Sorry man, you cannot invite yourself. Check the 'join group' button`, 'error');
			return;
		}

		// send invitation for user
		await this.graphqlGroupService.toggleInviteUserIntoGroup(groupUser.id, groupId, inviteUser).toPromise();
		await DialogService.showNotificationBar(`Group invitation to user: ${groupUser.nickName} has been send`);
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
			await DialogService.showNotificationBar(`You have successfully accpted user: ${groupUser.nickName} into group`);
		} else {
			await DialogService.showNotificationBar(`You have declined user: ${groupUser.nickName} request for joining into group`);
		}
	}

	async leaveGroup(): Promise<void> {
		await this.graphqlGroupService.leaveGroup(this.groupStorageService.activeGroup.id).toPromise();
		await DialogService.showNotificationBar(`You left group ${this.groupStorageService.activeGroup.name}`);
	}

	async removeMemberFromGroup({ id, name }: StGroupAllData, groupUser: StGroupUser): Promise<void> {
		await this.graphqlGroupService.removeMemberFromGroup(id, groupUser).toPromise();
		await DialogService.showNotificationBar(`You have successfully removed user ${groupUser.nickName} from group ${name}`);
	}
}
