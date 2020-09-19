import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {IonicModule} from '@ionic/angular';
import {HighchartsChartModule} from 'highcharts-angular';
import {DefaultImgDirective} from './directives/default-img.directive';
import {FinancialChartComponent} from './components/charts/financial-chart/financial-chart.component';
import {GaugeChartComponent} from './components/charts/gauge-chart/gauge-chart.component';
import {FixedRangeSliderComponent} from './components/charts/fixed-range-slider/fixed-range-slider.component';
import {NumberFormatterPipe} from './pipes/numberFormatter.pipe';
import {HeaderComponent} from './containers/header/header.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FixedRangeSliderWithTimeComponent} from './components/charts/fixed-range-slider-with-time/fixed-range-slider-with-time.component';
import {ApolloModule} from 'apollo-angular';
import {InlineInputFormComponent} from './components/forms/inline-input-form/inline-input-form.component';
import {GenericChartComponent} from './components/charts/generic-chart/generic-chart.component';
import {GenericChartCardComponent} from './components/cards/generic-chart-card/generic-chart-card.component';
import {FinancialChartModalContainerComponent} from './containers/modal/financial-chart-modal-container/financial-chart-modal-container.component';
import {FinancialChartContainerComponent} from './containers/financial-chart-container/financial-chart-container.component';
import {EconomicChartModalContainerComponent} from './containers/modal/economic-chart-modal-container/economic-chart-modal-container.component';
import {RelativeTimePipe} from './pipes/relatimeTime.pipe';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { ValueStateDirective } from './directives/value-state.directive';

@NgModule({
    declarations: [
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        RelativeTimePipe,
        HeaderComponent,
        InlineInputFormComponent,
        FixedRangeSliderWithTimeComponent,
        GenericChartComponent,
        GenericChartCardComponent,
        FinancialChartModalContainerComponent,
        FinancialChartContainerComponent,
        EconomicChartModalContainerComponent,
        ValueStateDirective,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        HighchartsChartModule,
        IonicModule,
        PerfectScrollbarModule,
        ApolloModule,
        NgxDatatableModule
    ],
    exports: [
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
        RelativeTimePipe,
        HeaderComponent,
        ApolloModule,
        InlineInputFormComponent,
        FixedRangeSliderWithTimeComponent,
        GenericChartComponent,
        GenericChartCardComponent,
        FinancialChartModalContainerComponent,
        FinancialChartContainerComponent,
        EconomicChartModalContainerComponent,
        NgxDatatableModule,
        ValueStateDirective
    ],
    entryComponents: [
        FinancialChartModalContainerComponent,
        EconomicChartModalContainerComponent
    ]
})
export class SharedModule {
}
