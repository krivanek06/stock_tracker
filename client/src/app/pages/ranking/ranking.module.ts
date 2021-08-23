import {NgModule} from '@angular/core';
import {RankingPage} from './ranking.page';
import {RouterModule, Routes} from '@angular/router';
import {MenuHeaderModule} from "@pages-shared";
import {HeaderModule} from "@shared";
import {IonicModule} from "@ionic/angular";


const routes: Routes = [
    {
        path: '',
        component: RankingPage
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MenuHeaderModule,
        HeaderModule,
        IonicModule,
    ],
    declarations: [RankingPage]
})
export class RankingPageModule {
}
