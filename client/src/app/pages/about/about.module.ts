import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPage} from './about.page';
import {MenuHeaderModule} from '@pages-shared';
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "@shared";
import {CommonModule} from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: AboutPage
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MenuHeaderModule,
        IonicModule,
        HeaderModule,
        CommonModule
    ],
    declarations: [AboutPage]
})
export class AboutPageModule {
}
