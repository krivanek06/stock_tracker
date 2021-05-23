import {NgModule} from '@angular/core';
import {
    UserAccountFormComponent,
    UserAccountInfoComponent,
    UserAccountInfoListComponent,
    UserAccountResetedInfoComponent, UserIdentificationInfoComponent
} from './components';
import {SharedModule} from '@shared';
import {UserAccountSearchComponent} from './containers';
import {AccountFeatureFacadeService} from './services';


@NgModule({
    declarations: [
        UserAccountInfoComponent,
        UserAccountInfoListComponent,
        UserAccountSearchComponent,
        UserAccountFormComponent,
        UserAccountResetedInfoComponent,
        UserIdentificationInfoComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        UserAccountInfoComponent,
        UserAccountInfoListComponent,
        UserAccountSearchComponent,
        UserAccountFormComponent,
        UserAccountResetedInfoComponent,
        UserIdentificationInfoComponent
    ],
    providers: [
        AccountFeatureFacadeService
    ]
})
export class AccountFeatureModule {
}
