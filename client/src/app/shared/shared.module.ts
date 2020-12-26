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

import {InlineModificationFormComponent} from './components/forms/inline-modification-form/inline-modification-form.component';
import {GenericChartComponent} from './components/charts/generic-chart/generic-chart.component';
import {GenericChartCardComponent} from './components/cards/generic-chart-card/generic-chart-card.component';
import {FinancialChartContainerComponent} from './containers/financial-chart-container/financial-chart-container.component';
import {EconomicChartModalContainerComponent} from './containers/modal/economic-chart-modal-container/economic-chart-modal-container.component';
import {RelativeTimePipe} from './pipes/relatimeTime.pipe';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { ValueStateDirective } from './directives/value-state.directive';
import {PriceCompareItemComponent} from './components/items/price-compare-item/price-compare-item.component';
import {InlineInputPopUpComponent} from './components/pop-ups/inline-input-pop-up/inline-input-pop-up.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import {UploaderComponent} from './components/image-manipulation/uploader/uploader.component';
import {UploadTaskComponent} from './components/image-manipulation/upload-task/upload-task.component';
import {PriceChangeItemComponent} from './components/items/price-change-item/price-change-item.component';
import {ClickableNameItemComponent} from './components/items/clickable-name-item/clickable-name-item.component';

@NgModule({
    declarations: [
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        RelativeTimePipe,
        HeaderComponent,
        InlineModificationFormComponent,
        FixedRangeSliderWithTimeComponent,
        GenericChartComponent,
        GenericChartCardComponent,
        FinancialChartContainerComponent,
        EconomicChartModalContainerComponent,
        ValueStateDirective,
        PriceCompareItemComponent,
        InlineInputPopUpComponent,
        DropzoneDirective,
        UploaderComponent,
        UploadTaskComponent,
        PriceChangeItemComponent,
        ClickableNameItemComponent
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
        NgxDatatableModule
    ],
    exports: [
        CommonModule,
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
        GaugeChartComponent,
        NumberFormatterPipe,
        RelativeTimePipe,
        HeaderComponent,
        InlineModificationFormComponent,
        FixedRangeSliderWithTimeComponent,
        GenericChartComponent,
        GenericChartCardComponent,
        FinancialChartContainerComponent,
        EconomicChartModalContainerComponent,
        NgxDatatableModule,
        ValueStateDirective,
        PriceCompareItemComponent,
        InlineInputPopUpComponent,
        UploaderComponent,
        UploadTaskComponent,
        PriceChangeItemComponent,
        ClickableNameItemComponent

    ],
    entryComponents: [
        EconomicChartModalContainerComponent,
        InlineInputPopUpComponent

    ]
})
export class SharedModule {
}
