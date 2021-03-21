import {Injectable} from '@angular/core';
import {GraphqlGroupService} from './graphql-group.service';
import {Confirmable, IonicDialogService, StGroupAllData, StGroupPartialData, StUserPartialInformation, UserStorageService} from '@core';
import {Observable} from 'rxjs';
import {GROUPS_PAGES} from '../../../pages/groups/model/groups.enum';
import {Router} from '@angular/router';
import {createSTGroupAllDataInput} from '../utils';
import {GroupForm} from '../model';

@Injectable({
    providedIn: GroupService
})
export class GroupService {

    constructor(private route: Router,
                private userStorageService: UserStorageService,
                private graphqlGroupService: GraphqlGroupService) {
    }

    querySTGroupAllDataByGroupId(groupId: string): Observable<StGroupAllData> {
        return this.graphqlGroupService.querySTGroupAllDataByGroupId(groupId);
    }

    @Confirmable('Please confirm creating new group')
    async createGroup(form: GroupForm, invitationSent: StUserPartialInformation[] = []): Promise<boolean> {
        const groupInput = createSTGroupAllDataInput(this.userStorageService.user.uid, form, invitationSent);
        this.graphqlGroupService.createGroup(groupInput).subscribe(() =>
            IonicDialogService.presentToast(`Group ${groupInput.name} has been created`));

        return true;
    }

    @Confirmable('Please confirm making changes in group')
    async editGroup(form: GroupForm, group: StGroupAllData): Promise<void> {
        const groupInput = createSTGroupAllDataInput(group.owner.user.uid,
            form,
            group.invitationSent.map(x => x.user),
            group.invitationReceived.map(x => x.user),
            group.managers.map(x => x.user),
            group.members.map(x => x.user));

        groupInput.groupId = group.groupId;

        this.graphqlGroupService.editGroup(groupInput).subscribe(() => {
            this.route.navigate([`menu/groups/${GROUPS_PAGES.READ}/${groupInput.groupId}`]);
            IonicDialogService.presentToast(`Changes for group ${groupInput.name} has been saved`);
        });
    }

    @Confirmable('Please confirm deleting group')
    async deleteGroup(stGroupPartialData: StGroupPartialData): Promise<void> {
        this.graphqlGroupService.deleteGroup(stGroupPartialData).subscribe(() => {
            IonicDialogService.presentToast(`Group ${stGroupPartialData.name} has been deleted`);
        });

        this.route.navigate([`menu/groups/${GROUPS_PAGES.CREATE}`]);
    }

    /**
     * Send or cancel already existing invitation request to group
     */
    @Confirmable('Please confirm your decision')
    async toggleInvitationRequestToGroup(stGroupPartialData: StGroupPartialData): Promise<boolean> {
        await this.graphqlGroupService.toggleInvitationRequestToGroup(stGroupPartialData).toPromise();
        await IonicDialogService.presentToast(`Operation has been saved`);

        return true;
    }

    /**
     * if user got group invitation, accept or deny request
     */
    @Confirmable('Please confirm your decision')
    async answerReceivedGroupInvitation(stGroupPartialData: StGroupPartialData, accept: boolean): Promise<boolean> {
        await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();

        const result = accept ? 'accepted' : 'declined';
        await IonicDialogService.presentToast(`You ${result} group ${stGroupPartialData.name}'s invitation`);

        return true;
    }

    @Confirmable('Please confirm your decision')
    async leaveGroup(stGroupPartialData: StGroupPartialData): Promise<boolean> {
        await this.graphqlGroupService.leaveGroup(stGroupPartialData.groupId).toPromise();
        await IonicDialogService.presentToast(`You left group ${stGroupPartialData.name}`);

        return true;
    }
}


