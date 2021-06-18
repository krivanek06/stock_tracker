import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupDetailsOverviewComponent} from './group-details-overview.component';
import {SharedModule} from '@shared';
import {GroupFeatureModule} from '@group-feature';
import {StockTradingFeatureModule} from '@stock-trading-feature';
import {
    GroupDetailsOverviewInvitationsContainerComponent,
    GroupDetailsOverviewMembersContainerComponent,
    GroupDetailsOverviewPortfolioContainerComponent,
    GroupDetailsOverviewTransactionsContainerComponent
} from './containers';
import {AccountFeatureModule} from '@account-feature';

const routes: Routes = [
    {
        path: '',
        component: GroupDetailsOverviewComponent
    },
];

@NgModule({
    declarations: [
        GroupDetailsOverviewComponent,
        GroupDetailsOverviewMembersContainerComponent,
        GroupDetailsOverviewTransactionsContainerComponent,
        GroupDetailsOverviewPortfolioContainerComponent,
        GroupDetailsOverviewInvitationsContainerComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        RouterModule.forChild(routes),
        StockTradingFeatureModule,
        AccountFeatureModule,
    ]
})
export class GroupDetailsOverviewModule {
}
