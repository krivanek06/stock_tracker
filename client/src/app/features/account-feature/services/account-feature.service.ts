import {Injectable} from '@angular/core';
import {GraphqlAccountService} from './graphql-account.service';
import {Confirmable, IonicDialogService, StUserEditDataInput} from '@core';


@Injectable({
    providedIn: 'root'
})
export class AccountFeatureService {

    constructor(private graphqlAccount: GraphqlAccountService) {
    }

    @Confirmable('Confirm editing data')
    async editUser(editInput: StUserEditDataInput) {
        this.graphqlAccount.editUser(editInput)
            .subscribe(() => IonicDialogService.presentToast(`Account information has been changed`));
    }

    @Confirmable('Please confirm reseting account. You will start again with 15 000$ portfolio. All your holdings will be lost.')
    async resetUserAccount() {
        this.graphqlAccount.resetUserAccount()
            .subscribe(() => IonicDialogService.presentToast(`Account has been reseted`));
    }
}
