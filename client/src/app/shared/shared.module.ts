import {NgModule} from '@angular/core';
import {DefaultImgDirective, DropzoneDirective, RecommendationDirective, ScrollOffsetDirective, TooltipDirective} from './directives';
import {
    ArticleCardsComponent,
    ClickableNameItemComponent,
    FinancialChartComponent,
    FixedRangeSliderComponent,
    GaugeChartComponent,
    GenericCardComponent,
    GenericChartComponent,
    GenericFadingCardContentComponent,
    GenericFancyCardComponent,
    GenericListComponent,
    InlineInputPopUpComponent,
    InlineModificationFormComponent,
    PriceChangeItemComponent,
    PriceCompareItemComponent, RangeRatingSliderComponent,
    SearchWrapperComponent,
    StockInfoIdentificationItemComponent,
    TableHighLowRangeComponent, TableIncreasingItemComponent,
    TitleWithLogoItemComponent,
    UploaderComponent,
    UploadTaskComponent
} from './components';
import {HoldingsTotalInvestedPipe, NumberFormatterPipe, ObjNgForPipe, RelativeTimePipe, SumUpPipe} from './pipes';
import {FinancialChartContainerComponent, HeaderComponent, StockSummaryContainerComponent} from './containers';
import {FinancialChartModalComponent} from './entry-components';
import {SharedProvidersModule} from './shared-providers.module';


@NgModule({
    declarations: [
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
        NumberFormatterPipe,
        RelativeTimePipe,
        SumUpPipe,
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
        ArticleCardsComponent,
        StockInfoIdentificationItemComponent,
        FinancialChartModalComponent,
        StockSummaryContainerComponent,
        HoldingsTotalInvestedPipe,
        RangeRatingSliderComponent,
        TableIncreasingItemComponent
    ],
    imports: [
        SharedProvidersModule
    ],
    exports: [
        SharedProvidersModule,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        GaugeChartComponent,
        NumberFormatterPipe,
        RelativeTimePipe,
        SumUpPipe,
        HeaderComponent,
        InlineModificationFormComponent,
        GenericChartComponent,
        GenericCardComponent,
        FinancialChartContainerComponent,
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
        ArticleCardsComponent,
        StockInfoIdentificationItemComponent,
        FinancialChartModalComponent,
        StockSummaryContainerComponent,
        HoldingsTotalInvestedPipe,
        RangeRatingSliderComponent,
        TableIncreasingItemComponent
    ],
    entryComponents: [
        InlineInputPopUpComponent
    ]
})
export class SharedModule {
}
