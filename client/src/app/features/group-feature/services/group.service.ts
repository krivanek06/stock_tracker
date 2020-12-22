import {Injectable} from '@angular/core';
import {GraphqlGroupService} from './graphql-group.service';
import {createSTGroupAllDataInput, GroupForm} from '../../stock-watchlist-feature/model/group.model';
import {StUserPartialInformation} from '../../../api/customGraphql.service';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private authFeatureService: AuthFeatureService,
                private ionicDialogService: IonicDialogService,
                private graphqlGroupService: GraphqlGroupService) {
    }

    createGroup(form: GroupForm, invitationSent: StUserPartialInformation[] = []) {
        const groupInput = createSTGroupAllDataInput(this.authFeatureService.user.uid, form, invitationSent);
        this.graphqlGroupService.createGroup(groupInput).subscribe(() =>
            this.ionicDialogService.presentToast(`Group ${groupInput.name} has been created`));
    }
}
