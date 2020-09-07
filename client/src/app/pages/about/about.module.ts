import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutPage} from './about.page';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: AboutPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AboutPage]
})
export class AboutPageModule {
}
