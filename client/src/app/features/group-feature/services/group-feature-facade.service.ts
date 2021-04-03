import {Injectable} from '@angular/core';
import {GraphqlGroupService, StUserPublicData} from '@core';
import {StGroupAllData, StGroupPartialData, UserStorageService} from '@core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {createSTGroupAllDataInput, createSTGroupAllDataInputFromGroup} from '../utils';
import {GroupForm} from '../model';
import {Confirmable, DialogService} from '@shared';

@Injectable()
export class GroupFeatureFacadeService {

    constructor(private route: Router,
                private userStorageService: UserStorageService,
                private graphqlGroupService: GraphqlGroupService) {
    }

    querySTGroupAllDataByGroupId(groupId: string): Observable<StGroupAllData> {
        return this.graphqlGroupService.querySTGroupAllDataByGroupId(groupId);
    }

    @Confirmable('Please confirm creating new group')
    async createGroup(form: GroupForm, invitationSent: StUserPublicData[] = []): Promise<boolean> {
        const groupInput = createSTGroupAllDataInput(this.userStorageService.user.uid, form, invitationSent);
        this.graphqlGroupService.createGroup(groupInput).subscribe(() =>
            DialogService.presentToast(`Group ${groupInput.name} has been created`));

        return true;
    }

    @Confirmable('Please confirm making changes in group')
    async editGroup(form: GroupForm, group: StGroupAllData): Promise<void> {
        const groupInput = createSTGroupAllDataInputFromGroup(form, group);

        groupInput.groupId = group.groupId;

        this.graphqlGroupService.editGroup(groupInput).subscribe(() => {
            this.route.navigate([`menu/groups/read/${groupInput.groupId}`]);
            DialogService.presentToast(`Changes for group ${groupInput.name} has been saved`);
        });
    }

    @Confirmable('Please confirm deleting group')
    async deleteGroup(stGroupPartialData: StGroupPartialData): Promise<void> {
        this.graphqlGroupService.deleteGroup(stGroupPartialData).subscribe(() => {
            DialogService.presentToast(`Group ${stGroupPartialData.name} has been deleted`);
        });

        this.route.navigate([`menu/groups/create`]);
    }

    /**
     * Send or cancel already existing invitation request to group
     */
    @Confirmable('Please confirm your decision')
    async toggleInvitationRequestToGroup(stGroupPartialData: StGroupPartialData): Promise<boolean> {
        await this.graphqlGroupService.toggleInvitationRequestToGroup(stGroupPartialData).toPromise();
        await DialogService.presentToast(`Operation has been saved`);

        return true;
    }

    /**
     * if user got group invitation, accept or deny request
     */
    @Confirmable('Please confirm your decision')
    async answerReceivedGroupInvitation(stGroupPartialData: StGroupPartialData, accept: boolean): Promise<boolean> {
        await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();

        const result = accept ? 'accepted' : 'declined';
        await DialogService.presentToast(`You ${result} group ${stGroupPartialData.name}'s invitation`);

        return true;
    }

    @Confirmable('Please confirm your decision')
    async leaveGroup(stGroupPartialData: StGroupPartialData): Promise<boolean> {
        await this.graphqlGroupService.leaveGroup(stGroupPartialData.groupId).toPromise();
        await DialogService.presentToast(`You left group ${stGroupPartialData.name}`);

        return true;
    }
}


