import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ConfirmDialogComponent} from './components/dialog/confirm-dialog/confirm-dialog.component';
import {IonicModule} from '@ionic/angular';
import {HighchartsChartModule} from 'highcharts-angular';
import {DefaultImgDirective} from './directives/default-img.directive';
import {FinancialChartComponent} from './components/charts/financial-chart/financial-chart.component';
import {GaugeChartComponent} from './components/charts/gauge-chart/gauge-chart.component';
import {FixedRangeSliderComponent} from './components/charts/fixed-range-slider/fixed-range-slider.component';
import { NumberFormatterPipe } from './pipes/numberFormatter.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import {GaugeChartCardComponent} from './components/cards/gauge-chart-card/gauge-chart-card.component';
import {FinancialChartCardComponent} from './components/cards/financial-chart-card/financial-chart-card.component';
import {PieChartComponent} from './components/charts/pie-chart/pie-chart.component';
import {PieChartCardComponent} from './components/cards/pie-chart-card/pie-chart-card.component';
import {BarChartCardComponent} from './components/cards/bar-chart-card/bar-chart-card.component';
import {BarChartComponent} from './components/charts/bar-chart/bar-chart.component';
import {HeaderComponent} from './components-smart/header/header.component';

@NgModule({
    declarations: [
        TimeAgoPipe,
        ConfirmDialogComponent,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        GaugeChartCardComponent,
        FinancialChartCardComponent,
        PieChartComponent,
        PieChartCardComponent,
        BarChartCardComponent,
        BarChartComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        NgxAuthFirebaseUIModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        HighchartsChartModule,
        IonicModule,
    ],
    exports: [
        TimeAgoPipe,
        NgxAuthFirebaseUIModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        IonicModule,
        HighchartsChartModule,
        ConfirmDialogComponent,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        GaugeChartCardComponent,
        FinancialChartCardComponent,
        PieChartComponent,
        PieChartCardComponent,
        BarChartCardComponent,
        BarChartComponent,
        HeaderComponent
    ],
    entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {
}
