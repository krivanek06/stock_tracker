import {NgModule} from '@angular/core';
import {
    UserAccountFormComponent,
    UserAccountInfoComponent,
    UserAccountInfoListComponent,
    UserAccountResetedInfoComponent
} from './components';
import {SharedModule} from '../../shared/shared.module';
import {UserAccountSearchComponent} from './containers';


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
