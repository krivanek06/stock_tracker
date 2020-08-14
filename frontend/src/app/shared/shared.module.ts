import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {IonicModule} from '@ionic/angular';
import {HighchartsChartModule} from 'highcharts-angular';
import {DefaultImgDirective} from './directives/default-img.directive';
import {FinancialChartComponent} from './components/charts/financial-chart/financial-chart.component';
import {GaugeChartComponent} from './components/charts/gauge-chart/gauge-chart.component';
import {FixedRangeSliderComponent} from './components/charts/fixed-range-slider/fixed-range-slider.component';
import { NumberFormatterPipe } from './pipes/numberFormatter.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import {PieChartComponent} from './components/charts/pie-chart/pie-chart.component';
import {BarChartComponent} from './components/charts/bar-chart/bar-chart.component';
import {HeaderComponent} from './components/header/header.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {FixedRangeSliderWithTimeComponent} from './components/charts/fixed-range-slider-with-time/fixed-range-slider-with-time.component';
import {ApolloModule} from 'apollo-angular';
import {VariablePieChartComponent} from './components/charts/variable-pie-chart/variable-pie-chart.component';
import {InlineInputFormComponent} from './components/forms/inline-input-form/inline-input-form.component';
import {GenericChartComponent} from './components/charts/generic-chart/generic-chart.component';
import {GenericChartCardComponent} from './components/cards/generic-chart-card/generic-chart-card.component';

@NgModule({
    declarations: [
        TimeAgoPipe,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        PieChartComponent,
        BarChartComponent,
        HeaderComponent,
        InlineInputFormComponent,
        FixedRangeSliderWithTimeComponent,
        VariablePieChartComponent,
        GenericChartComponent,
        GenericChartCardComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        HighchartsChartModule,
        IonicModule,
        PerfectScrollbarModule,
        ApolloModule
    ],
    exports: [
        TimeAgoPipe,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        PerfectScrollbarModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        IonicModule,
        HighchartsChartModule,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        PieChartComponent,
        BarChartComponent,
        HeaderComponent,
        ApolloModule,
        VariablePieChartComponent,
        InlineInputFormComponent,
        FixedRangeSliderWithTimeComponent,
        GenericChartComponent,
        GenericChartCardComponent
    ]
})
export class SharedModule {
}
