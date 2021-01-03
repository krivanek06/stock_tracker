import {Injectable} from '@angular/core';
import {GraphqlGroupService} from './graphql-group.service';
import {StGroupAllData, StGroupPartialData, StUserPartialInformation} from '../../../api/customGraphql.service';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';
import {Observable} from 'rxjs';
import {GROUPS_PAGES} from '../../../pages/groups/model/groups.enum';
import {Router} from '@angular/router';
import {createSTGroupAllDataInput} from '../utils/convertor';
import {GroupForm} from '../model/group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private route: Router,
                private authFeatureService: AuthFeatureService,
                private ionicDialogService: IonicDialogService,
                private graphqlGroupService: GraphqlGroupService) {
    }

    querySTGroupAllDataByGroupId(groupId: string): Observable<StGroupAllData> {
        return this.graphqlGroupService.querySTGroupAllDataByGroupId(groupId);
    }

    async createGroup(form: GroupForm, invitationSent: StUserPartialInformation[] = []): Promise<boolean> {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Please confirm creating group: ${form.name} ?`);
        if (!confirmation) {
            return false;
        }
        const groupInput = createSTGroupAllDataInput(this.authFeatureService.user.uid, form, invitationSent);
        this.graphqlGroupService.createGroup(groupInput).subscribe(() =>
            this.ionicDialogService.presentToast(`Group ${groupInput.name} has been created`));

        return true;
    }

    async editGroup(form: GroupForm, group: StGroupAllData): Promise<void> {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Do you really want to make changes in group: ${group.name} ?`);
        if (!confirmation) {
            return;
        }
        const groupInput = createSTGroupAllDataInput(group.owner.user.uid,
            form,
            group.invitationSent.map(x => x.user),
            group.invitationReceived.map(x => x.user),
            group.managers.map(x => x.user),
            group.members.map(x => x.user));

        groupInput.groupId = group.groupId;

        this.graphqlGroupService.editGroup(groupInput).subscribe(() => {
            this.route.navigate([`menu/groups/${GROUPS_PAGES.READ}/${groupInput.groupId}`]);
            this.ionicDialogService.presentToast(`Changes for group ${groupInput.name} has been saved`);
        });
    }

    async deleteGroup(stGroupPartialData: StGroupPartialData): Promise<void> {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Please confirm deleting group: ${stGroupPartialData.name} ?`);
        if (!confirmation) {
            return;
        }

        this.graphqlGroupService.deleteGroup(stGroupPartialData).subscribe(() => {
            this.ionicDialogService.presentToast(`Group ${stGroupPartialData.name} has been deleted`);
        });

        this.route.navigate([`menu/groups/${GROUPS_PAGES.CREATE}`]);
    }

    /**
     * Send or cancel already existing invitation request to group
     */
    async toggleInvitationRequestToGroup(stGroupPartialData: StGroupPartialData): Promise<boolean> {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Please confirm your decision`);
        if (!confirmation) {
            return false;
        }

        await this.graphqlGroupService.toggleInvitationRequestToGroup(stGroupPartialData).toPromise();
        await this.ionicDialogService.presentToast(`Operation has been saved`);

        return true;
    }

    /**
     * if user got group invitation, accept or deny request
     */
    async answerReceivedGroupInvitation(stGroupPartialData: StGroupPartialData, accept: boolean): Promise<boolean> {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Please confirm your decision`);
        if (!confirmation) {
            return false;
        }

        await this.graphqlGroupService.answerReceivedGroupInvitation(stGroupPartialData, accept).toPromise();

        const result = accept ? 'accepted' : 'declined';
        await this.ionicDialogService.presentToast(`You ${result} group ${stGroupPartialData.name}'s invitation`);

        return true;
    }


    async leaveGroup(stGroupPartialData: StGroupPartialData): Promise<boolean> {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Please confirm your decision`);
        if (!confirmation) {
            return false;
        }
        await this.graphqlGroupService.leaveGroup(stGroupPartialData.groupId).toPromise();
        await this.ionicDialogService.presentToast(`You left group ${stGroupPartialData.name}`);

        return true;
    }
}


