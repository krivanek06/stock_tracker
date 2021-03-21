import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginPage} from './login.page';
import {LoginFeatureModule} from '../../features/login-feature/login-feature.module';

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
        LoginFeatureModule
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {
}
