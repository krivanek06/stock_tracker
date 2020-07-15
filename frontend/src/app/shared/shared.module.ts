import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ConfirmDialogComponent} from './components/presentation/confirm-dialog/confirm-dialog.component';
import {IonicModule} from '@ionic/angular';
import {HighchartsChartModule} from 'highcharts-angular';
import {DefaultImgDirective} from './directives/default-img.directive';
import {FinancialChartComponent} from './components/financial-chart/financial-chart.component';
import {GaugeChartComponent} from './components/gauge-chart/gauge-chart.component';
import {FixedRangeSliderComponent} from './components/fixed-range-slider/fixed-range-slider.component';
import { MillionOrBillionPipe } from './pipes/millionOrBillion.pipe';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        MillionOrBillionPipe,
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
        MillionOrBillionPipe,
    ],
    entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {
}
