import {NgModule} from '@angular/core';
import {GroupsEditComponent} from './pages/groups-edit/groups-edit.component';
import {GroupsComponent} from './groups.component';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {GroupFeatureModule, ResolveGroupDetailsGuard} from '@group-feature';
import {AccountFeatureModule} from '@account-feature';
import {PagesSharedModule} from '@pages-shared';
import {GROUPS_PAGES} from './model/groups.model';
import {StockTradingFeatureModule} from '@stock-trading-feature';


const routes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        children: [
            {
                path: GROUPS_PAGES.OVERVIEW,
                loadChildren: () => import('./pages/groups-overview/groups-overview.module').then(m => m.GroupsOverviewModule)
            },
            {
                path: `${GROUPS_PAGES.DETAILS}/:groupId`,
                loadChildren: () => import('./pages/group-details/group-details.module').then(m => m.GroupDetailsModule),
                resolve: [ResolveGroupDetailsGuard],
            },
            {
                path: '',
                redirectTo: GROUPS_PAGES.OVERVIEW,
                pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    declarations: [
        GroupsEditComponent,
        GroupsComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        AccountFeatureModule,
        RouterModule.forChild(routes),
        PagesSharedModule,
        StockTradingFeatureModule
    ]
})
export class GroupsModule {
}
