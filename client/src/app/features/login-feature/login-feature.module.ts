import {NgModule} from '@angular/core';
import {AuthenticationPopoverComponent} from './entry-points';
import {LoginComponent, RegistrationComponent} from './components';
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AuthenticationPopoverComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        IonicModule,
        ReactiveFormsModule

    ],
    exports: [
        AuthenticationPopoverComponent,
        RegistrationComponent,
        LoginComponent
    ]
})
export class LoginFeatureModule {
}
