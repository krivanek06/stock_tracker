import {Injectable} from '@angular/core';
import {GraphqlAccountService} from './graphql-account.service';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';
import {StUserEditDataInput} from '../../../api/customGraphql.service';

@Injectable({
    providedIn: 'root'
})
export class UserAccountService {

    constructor(private graphqlAccount: GraphqlAccountService,
                private ionicDialogService: IonicDialogService) {
    }

    async editUser(editInput: StUserEditDataInput) {
        this.graphqlAccount.editUser(editInput)
            .subscribe(() => this.ionicDialogService.presentToast(`Account information has been changed`));
    }

    async resetUserAccount() {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Please confirm reseting account. You will start again with 15 000$ portfolio. All your holdings will be lost.`);

        if (confirmation) {
            this.graphqlAccount.resetUserAccount()
                .subscribe(() => this.ionicDialogService.presentToast(`Account has been reseted`));
        }
    }
}
