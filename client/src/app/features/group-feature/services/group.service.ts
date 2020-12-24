import {Injectable} from '@angular/core';
import {GraphqlGroupService} from './graphql-group.service';
import {createSTGroupAllDataInput, GroupForm} from '../../stock-watchlist-feature/model/group.model';
import {StGroupAllData, StUserPartialInformation} from '../../../api/customGraphql.service';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';
import {Observable} from 'rxjs';
import {GROUPS_PAGES} from '../../../pages/groups/model/groups.enum';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

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

    createGroup(form: GroupForm, invitationSent: StUserPartialInformation[] = []) {
        const groupInput = createSTGroupAllDataInput(this.authFeatureService.user.uid, form, invitationSent);
        this.graphqlGroupService.createGroup(groupInput).subscribe(() =>
            this.ionicDialogService.presentToast(`Group ${groupInput.name} has been created`));
    }

    editGroup(form: GroupForm, group: StGroupAllData) {
        const groupInput = createSTGroupAllDataInput(group.owner.user.uid,
            form,
            group.invitationSent.map(x => x.user),
            group.invitationReceived.map(x => x.user),
            group.managers.map(x => x.user),
            group.members.map(x => x.user));

        groupInput.groupId = group.groupId;

        this.graphqlGroupService.editGroup(groupInput).pipe(
            switchMap(() => this.graphqlGroupService.querySTGroupAllDataByGroupId(groupInput.groupId, true))
        ).subscribe(() => {
            this.route.navigate([`menu/groups/${GROUPS_PAGES.READ}/${groupInput.groupId}`]);
            this.ionicDialogService.presentToast(`Changes for group ${groupInput.name} has been saved`);
        });
    }
}


