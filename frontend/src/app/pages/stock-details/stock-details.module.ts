import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {StockDetailsPage} from './stock-details.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from '../../shared/shared.module';
import {FirstRowContainerComponent} from './container/first-row-container/first-row-container.component';
import {SecondRowContainerComponent} from './container/second-row-container/second-row-container.component';
import {ThirdRowContainerComponent} from './container/third-row-container/third-row-container.component';
import {FourthRowContainerComponent} from './container/fourth-row-container/fourth-row-container.component';
import {FifthRowContainerComponent} from './container/fifth-row-container/fifth-row-container.component';
import {SixthRowContainerComponent} from './container/sixth-row-container/sixth-row-container.component';
import {SeventhRowContainerComponent} from './container/seventh-row-container/seventh-row-container.component';
import {NewsArticlesContainerComponent} from '../../features/stock-data-feature/container/news-articles-container/news-articles-container.component';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';

const routes: Routes = [
    {
        path: '',
        component: StockDetailsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        StockWatchlistModule,
        SharedModule,
        StockDetailsFeatureModule,
        StockDataFeatureModule
    ],
    declarations: [
        StockDetailsPage,
        FirstRowContainerComponent,
        SecondRowContainerComponent,
        ThirdRowContainerComponent,
        FourthRowContainerComponent,
        FifthRowContainerComponent,
        SixthRowContainerComponent,
        SeventhRowContainerComponent,
    ]
})
export class StockDetailsPageModule {
}
