import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {StockDetailsPage} from './stock-details.page';
import {StockTrackerModule} from '../../features/stock-tracker/stock-tracker.module';
import {SharedModule} from '../../shared/shared.module';
import {FirstRowContainerComponent} from './container/first-row-container/first-row-container.component';
import {SecondRowContainerComponent} from './container/second-row-container/second-row-container.component';
import {ThirdRowContainerComponent} from './container/third-row-container/third-row-container.component';
import {FourthRowContainerComponent} from './container/fourth-row-container/fourth-row-container.component';
import {FifthRowContainerComponent} from './container/fifth-row-container/fifth-row-container.component';
import {SixthRowContainerComponent} from './container/sixth-row-container/sixth-row-container.component';
import {SeventhRowContainerComponent} from './container/seventh-row-container/seventh-row-container.component';
import {EigthRowContainerComponent} from './container/eigth-row-container/eigth-row-container.component';

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
        StockTrackerModule,
        SharedModule
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
        EigthRowContainerComponent,
    ]
})
export class StockDetailsPageModule {
}
