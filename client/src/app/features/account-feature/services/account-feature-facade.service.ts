import {Injectable} from '@angular/core';
import {GraphqlAccountService} from '@core';
import {StUserEditDataInput} from '@core';
import {Confirmable, DialogService} from '@shared';


@Injectable()
export class AccountFeatureFacadeService {

    constructor(private graphqlAccount: GraphqlAccountService) {
    }

    @Confirmable('Confirm editing data')
    async editUser(editInput: StUserEditDataInput) {
        this.graphqlAccount.editUser(editInput).subscribe(() => DialogService.presentToast(`Account information has been changed`));
    }

    @Confirmable('Please confirm reseting account. You will start again with 15 000$ portfolio. All your holdings will be lost.')
    async resetUserAccount() {
        this.graphqlAccount.resetUserAccount().subscribe(() => DialogService.presentToast(`Account has been reseted`));
    }
}
