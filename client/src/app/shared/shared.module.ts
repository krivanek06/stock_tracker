import {NgModule} from '@angular/core';
import {
    DefaultImgDirective,
    DisableControlDirective,
    DropzoneDirective,
    RecommendationDirective,
    ScrollOffsetDirective,
    TooltipDirective
} from './directives';
import {
    ArticleCardsComponent,
    ClickableNameItemComponent,
    FinancialChartComponent,
    FixedRangeSliderComponent,
    GaugeChartComponent,
    GenericCardComponent,
    GenericChartComponent,
    GenericExtensionPanelComponent,
    GenericFadingCardContentComponent,
    GenericFancyCardComponent,
    GenericListComponent,
    InlineModificationFormComponent,
    PieChartWrapperComponent,
    PositionChangeItemComponent,
    PriceChangeItemComponent,
    PriceCompareItemComponent,
    RangeRatingSliderComponent,
    SearchWrapperComponent,
    StockInfoIdentificationItemComponent,
    TableHighLowRangeComponent,
    TableIncreasingItemComponent,
    TitleWithLogoItemComponent,
    UploaderComponent,
    UploadTaskComponent
} from './components';
import {FinancialChartContainerComponent, HeaderComponent, StockSummaryContainerComponent} from './containers';
import {
    ConfirmationPopOverComponent,
    FinancialChartModalComponent,
    InlineInputPopUpComponent,
    OptionPickerPopOverComponent
} from './entry-components';
import {SharedProvidersModule} from './shared-providers.module';
import {ListSkeletonComponent} from './components/lists';
import {SharedMaterialModule} from './shared-material.module';
import {SharedPipesModule} from './pipes';


@NgModule({
    declarations: [
        FixedRangeSliderComponent,
        DefaultImgDirective,
        FinancialChartComponent,
        GaugeChartComponent,
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
        GenericFadingCardContentComponent,
        TableHighLowRangeComponent,
        RecommendationDirective,
        ArticleCardsComponent,
        StockInfoIdentificationItemComponent,
        FinancialChartModalComponent,
        StockSummaryContainerComponent,
        RangeRatingSliderComponent,
        TableIncreasingItemComponent,
        DisableControlDirective,
        PositionChangeItemComponent,
        OptionPickerPopOverComponent,
        ConfirmationPopOverComponent,
        ListSkeletonComponent,
        GenericExtensionPanelComponent,
        PieChartWrapperComponent
    ],
    imports: [
        SharedProvidersModule,
        SharedMaterialModule,
        SharedPipesModule
    ],
    exports: [
        SharedProvidersModule,
        FixedRangeSliderComponent,
        DefaultImgDirective,
        GaugeChartComponent,
        SharedPipesModule,
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
        GenericFadingCardContentComponent,
        TableHighLowRangeComponent,
        RecommendationDirective,
        ArticleCardsComponent,
        StockInfoIdentificationItemComponent,
        FinancialChartModalComponent,
        StockSummaryContainerComponent,
        RangeRatingSliderComponent,
        TableIncreasingItemComponent,
        DisableControlDirective,
        PositionChangeItemComponent,
        OptionPickerPopOverComponent,
        ConfirmationPopOverComponent,
        ListSkeletonComponent,
        GenericExtensionPanelComponent,
        PieChartWrapperComponent,
        SharedMaterialModule
    ],
    entryComponents: [
        InlineInputPopUpComponent,
        OptionPickerPopOverComponent
    ]
})
export class SharedModule {
}
