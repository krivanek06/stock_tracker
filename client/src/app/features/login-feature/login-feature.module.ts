import {NgModule} from '@angular/core';
import {AuthenticationPopoverComponent} from './entry-points';
import {LoginComponent, RegistrationComponent} from './components';
import {SharedModule} from '@shared';


@NgModule({
    declarations: [
        AuthenticationPopoverComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AuthenticationPopoverComponent,
        RegistrationComponent,
        LoginComponent
    ]
})
export class LoginFeatureModule {
}
