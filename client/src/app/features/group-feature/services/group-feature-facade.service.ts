import { Injectable } from '@angular/core';
import {
	GraphqlGroupService,
	GroupStorageService,
	StGroupAllData,
	StGroupAllDataInput,
	StGroupIdentificationDataFragment,
	UserStorageService,
} from '@core';
import { ModalController } from '@ionic/angular';
import { Confirmable, DialogService } from '@shared';
import { GroupCreateModalComponent } from '../entry-components';
import { GroupForm } from '../model';

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

	async createGroup(): Promise<void> {
		const modal = await this.modalController.create({
			component: GroupCreateModalComponent,
			cssClass: 'custom-modal',
		});
		await modal.present();

		const dismiss = await modal.onDidDismiss();
		const groupAllDataInput = dismiss?.data?.groupAllDataInput as StGroupAllDataInput;

		if (!!groupAllDataInput) {
			await this.graphqlGroupService.createGroup(groupAllDataInput).toPromise();
			await DialogService.presentToast(`Group ${groupAllDataInput.name} has been created`);
		}
	}

	async answerReceivedGroupInvitation(stGroupPartialData: StGroupIdentificationDataFragment, accept: boolean): Promise<void> {
		await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();
		const result = accept ? 'accepted' : 'declined';
		await DialogService.presentToast(`You ${result} group ${stGroupPartialData.name}'s invitation`);
	}

	@Confirmable('Please confirm making changes in group')
	async editGroup(form: GroupForm, group: StGroupAllData): Promise<void> {
		/*const groupInput = createSTGroupAllDataInputFromGroup(form, group);

        groupInput.groupId = group.groupId;

        this.graphqlGroupService.editGroup(groupInput).subscribe(() => {
            this.route.navigate([`menu/groups/read/${groupInput.groupId}`]);
            DialogService.presentToast(`Changes for group ${groupInput.name} has been saved`);
        });*/
	}

	@Confirmable('Please confirm deleting group')
	async deleteGroup(stGroupPartialData: StGroupIdentificationDataFragment): Promise<void> {
		this.graphqlGroupService.deleteGroup(stGroupPartialData).subscribe(() => {
			DialogService.presentToast(`Group ${stGroupPartialData.name} has been deleted`);
		});

		//this.route.navigate([`menu/groups/create`]);
	}

	/**
	 * Send or cancel already existing invitation request to group
	 */
	@Confirmable('Please confirm your decision')
	async toggleInvitationRequestToGroup(stGroupPartialData: StGroupIdentificationDataFragment): Promise<boolean> {
		await this.graphqlGroupService.toggleInvitationRequestToGroup(stGroupPartialData).toPromise();
		await DialogService.presentToast(`Operation has been saved`);

		return true;
	}

	@Confirmable('Please confirm your decision')
	async leaveGroup(stGroupPartialData: StGroupIdentificationDataFragment): Promise<boolean> {
		await this.graphqlGroupService.leaveGroup(stGroupPartialData.id).toPromise();
		await DialogService.presentToast(`You left group ${stGroupPartialData.name}`);

		return true;
	}
}
