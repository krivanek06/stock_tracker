import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {LoginPage} from './login.page';
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
