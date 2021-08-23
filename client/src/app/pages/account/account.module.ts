import {NgModule} from '@angular/core';
import {AccountPage} from './account.page';
import {RouterModule, Routes} from '@angular/router';
import {GenericCardModule, HeaderModule} from "@shared";
import {MenuHeaderModule} from "@pages-shared";
import {IonicModule} from "@ionic/angular";
import {
    UserAccountFormModule,
    UserAccountNotActivatedMessageModule,
    UserAccountResetedInfoModule
} from "@account-feature";
import {WatchlistModificationContainerModule} from "@stock-watchlist-feature";
import {CommonModule} from "@angular/common";
const routes: Routes = [
    {
        path: '',
        component: AccountPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        MenuHeaderModule,
        IonicModule,
        UserAccountFormModule,
        GenericCardModule,
        UserAccountResetedInfoModule,
        WatchlistModificationContainerModule,
        UserAccountNotActivatedMessageModule,
    ],
    declarations: [
        AccountPage
    ]
})
export class AccountPageModule {
}
