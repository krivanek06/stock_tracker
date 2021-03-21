import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationContainerComponent} from './containers';
import {LoginComponent, RegistrationComponent} from './components';
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
export class LoginFeatureModule {
}
