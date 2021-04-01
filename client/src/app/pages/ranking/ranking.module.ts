import {NgModule} from '@angular/core';
import {RankingPage} from './ranking.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PagesSharedModule} from '@pages-shared';


const routes: Routes = [
    {
        path: '',
        component: RankingPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        PagesSharedModule
    ],
    declarations: [RankingPage]
})
export class RankingPageModule {
}
