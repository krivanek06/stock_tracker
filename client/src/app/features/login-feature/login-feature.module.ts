import {NgModule} from '@angular/core';
import {AuthenticationContainerComponent} from './containers';
import {LoginComponent, RegistrationComponent} from './components';
import {SharedModule} from '@shared';


@NgModule({
    declarations: [
        AuthenticationContainerComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AuthenticationContainerComponent,
        RegistrationComponent,
        LoginComponent
    ]
})
export class LoginFeatureModule {
}
