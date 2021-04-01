import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPage} from './about.page';
import {SharedModule} from '../../shared/shared.module';
import {PagesSharedModule} from '@pages-shared';

const routes: Routes = [
    {
        path: '',
        component: AboutPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        PagesSharedModule
    ],
    declarations: [AboutPage]
})
export class AboutPageModule {
}
