import {Injectable} from '@angular/core';
import {GraphqlAccountService, StUserEditDataInput} from '@core';
import {DialogService} from '@shared';


@Injectable({
    providedIn: 'root'
})
export class AccountFeatureFacadeService {

    constructor(private graphqlAccount: GraphqlAccountService) {
    }

    async editUser(editInput: StUserEditDataInput): Promise<void> {
        await this.graphqlAccount.editUser(editInput).toPromise();
        await DialogService.presentToast(`Account information has been changed`);
    }


    async resetUserAccount(): Promise<void> {
        await this.graphqlAccount.resetUserAccount().toPromise();
        await DialogService.presentToast(`Account has been reseted`);
    }
}
