import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationContainerComponent} from './containers/authentication-container/authentication-container.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        AuthenticationContainerComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        AuthenticationContainerComponent,
        RegistrationComponent,
        LoginComponent
    ]
})
export class AuthFeatureModule {
}
