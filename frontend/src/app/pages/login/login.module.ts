import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthFeatureModule} from '../../features/auth-feature/auth-feature.module';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AuthFeatureModule
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {
}
