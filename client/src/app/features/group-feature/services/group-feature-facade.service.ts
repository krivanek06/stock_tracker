import {Injectable} from '@angular/core';
import {GraphqlGroupService, StGroupAllDataInput, StGroupIdentificationDataFragment, StUserPublicData} from '@core';
import {StGroupAllData, UserStorageService} from '@core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {createSTGroupAllDataInput} from '../utils';
import {GroupForm} from '../model';
import {Confirmable, DialogService} from '@shared';
import {GroupCreateModalComponent} from '../entry-components';
import {ModalController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class GroupFeatureFacadeService {

    constructor(private modalController: ModalController,
                private userStorageService: UserStorageService,
                private graphqlGroupService: GraphqlGroupService) {
    }

    querySTGroupAllDataByGroupId(groupId: string): Observable<StGroupAllData> {
        return this.graphqlGroupService.querySTGroupAllDataByGroupId(groupId);
    }

    async createGroup(): Promise<void> {
        const modal = await this.modalController.create({
            component: GroupCreateModalComponent,
            cssClass: 'custom-modal'
        });
        await modal.present();

        const dismiss = await modal.onDidDismiss();
        const groupAllDataInput = dismiss?.data?.groupAllDataInput as StGroupAllDataInput;

        if(!!groupAllDataInput){
            await this.graphqlGroupService.createGroup(groupAllDataInput).toPromise();
            await DialogService.presentToast(`Group ${groupAllDataInput.name} has been created`);
        }
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

    /**
     * if user got group invitation, accept or deny request
     */
    @Confirmable('Please confirm your decision')
    async answerReceivedGroupInvitation(stGroupPartialData: StGroupIdentificationDataFragment, accept: boolean): Promise<boolean> {
        await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();

        const result = accept ? 'accepted' : 'declined';
        await DialogService.presentToast(`You ${result} group ${stGroupPartialData.name}'s invitation`);

        return true;
    }

    @Confirmable('Please confirm your decision')
    async leaveGroup(stGroupPartialData: StGroupIdentificationDataFragment): Promise<boolean> {
        await this.graphqlGroupService.leaveGroup(stGroupPartialData.groupId).toPromise();
        await DialogService.presentToast(`You left group ${stGroupPartialData.name}`);

        return true;
    }
}


