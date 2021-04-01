import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AdminPage} from './admin.page';
import {SharedModule} from '../../shared/shared.module';
import {PagesSharedModule} from '@pages-shared';

const routes: Routes = [
    {
        path: '',
        component: AdminPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild(routes),
        PagesSharedModule
    ],
    declarations: [AdminPage]
})
export class AdminPageModule {
}
