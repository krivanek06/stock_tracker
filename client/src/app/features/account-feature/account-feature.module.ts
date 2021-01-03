import {NgModule} from '@angular/core';
import {UserAccountInfoComponent} from './components/user-account-info/user-account-info.component';
import {SharedModule} from '../../shared/shared.module';
import {UserAccountInfoListComponent} from './components/user-account-info-list/user-account-info-list.component';
import {UserAccountSearchComponent} from './containers/user-account-search/user-account-search.component';
import {UserAccountFormComponent} from './components/user-account-form/user-account-form.component';
import {UserAccountResetedInfoComponent} from './components/user-account-reseted-info/user-account-reseted-info.component';


@NgModule({
    declarations: [
        UserAccountInfoComponent,
        UserAccountInfoListComponent,
        UserAccountSearchComponent,
        UserAccountFormComponent,
        UserAccountResetedInfoComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        UserAccountInfoComponent,
        UserAccountInfoListComponent,
        UserAccountSearchComponent,
        UserAccountFormComponent,
        UserAccountResetedInfoComponent
    ]
})
export class AccountFeatureModule {
}
