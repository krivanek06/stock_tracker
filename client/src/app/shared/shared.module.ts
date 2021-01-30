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
import {FixedRangeSliderComponent} from './components/range-selector/fixed-range-slider/fixed-range-slider.component';
import {NumberFormatterPipe} from './pipes/numberFormatter.pipe';
import {HeaderComponent} from './containers/header/header.component';
import {InlineModificationFormComponent} from './components/forms/inline-modification-form/inline-modification-form.component';
import {GenericChartComponent} from './components/charts/generic-chart/generic-chart.component';
import {GenericCardComponent} from './components/generic/generic-card/generic-card.component';
import {FinancialChartContainerComponent} from './containers/financial-chart-container/financial-chart-container.component';
import {RelativeTimePipe} from './pipes/relatimeTime.pipe';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PriceCompareItemComponent} from './components/items/price-compare-item/price-compare-item.component';
import {InlineInputPopUpComponent} from './components/pop-ups/inline-input-pop-up/inline-input-pop-up.component';
import {DropzoneDirective} from './directives/dropzone.directive';
import {UploaderComponent} from './components/image-manipulation/uploader/uploader.component';
import {UploadTaskComponent} from './components/image-manipulation/upload-task/upload-task.component';
import {PriceChangeItemComponent} from './components/items/price-change-item/price-change-item.component';
import {ClickableNameItemComponent} from './components/items/clickable-name-item/clickable-name-item.component';
import {GenericListComponent} from './components/generic/generic-list/generic-list.component';
import {TitleWithLogoItemComponent} from './components/items/title-with-logo-item/title-with-logo-item.component';
import {TooltipDirective} from './directives/tooltip.directive';
import {SearchWrapperComponent} from './components/search-wrapper/search-wrapper.component';
import {ScrollOffsetDirective} from './directives/scroll-offset.directive';
import {GenericFancyCardComponent} from './components/generic/generic-fancy-card/generic-fancy-card.component';
import { ObjNgForPipe } from './pipes/obj-ng-for.pipe';
import {GenericFadingCardContentComponent} from './components/generic/generic-fading-card-content/generic-fading-card-content.component';
import {TableHighLowRangeComponent} from './components/range-selector/table-high-low-range/table-high-low-range.component';
import {RecommendationDirective} from './directives/recommendation.directive';
import {ArticleCardsComponent} from './components/cards/article-cards/article-cards.component';


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
        GenericChartComponent,
        GenericCardComponent,
        FinancialChartContainerComponent,
        PriceCompareItemComponent,
        InlineInputPopUpComponent,
        DropzoneDirective,
        UploaderComponent,
        UploadTaskComponent,
        PriceChangeItemComponent,
        ClickableNameItemComponent,
        GenericListComponent,
        TitleWithLogoItemComponent,
        TooltipDirective,
        SearchWrapperComponent,
        ScrollOffsetDirective,
        GenericFancyCardComponent,
        ObjNgForPipe,
        GenericFadingCardContentComponent,
        TableHighLowRangeComponent,
        RecommendationDirective,
        ArticleCardsComponent
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
        NgxDatatableModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
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
        GenericChartComponent,
        GenericCardComponent,
        FinancialChartContainerComponent,
        NgxDatatableModule,
        PriceCompareItemComponent,
        InlineInputPopUpComponent,
        UploaderComponent,
        UploadTaskComponent,
        PriceChangeItemComponent,
        ClickableNameItemComponent,
        GenericListComponent,
        TitleWithLogoItemComponent,
        TooltipDirective,
        SearchWrapperComponent,
        GenericFancyCardComponent,
        ObjNgForPipe,
        GenericFadingCardContentComponent,
        TableHighLowRangeComponent,
        RecommendationDirective,
        ArticleCardsComponent
    ],
    entryComponents: [
        InlineInputPopUpComponent
    ]
})
export class SharedModule {
}
