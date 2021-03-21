import {NgModule} from '@angular/core';
import {DefaultImgDirective, DropzoneDirective, RecommendationDirective, ScrollOffsetDirective, TooltipDirective} from './directives';
import {FinancialChartComponent, GaugeChartComponent, GenericChartComponent} from './components/charts';
import {FixedRangeSliderComponent, TableHighLowRangeComponent} from './components/range-selector';
import {NumberFormatterPipe, ObjNgForPipe, RelativeTimePipe, SumUpPipe} from './pipes';
import {FinancialChartContainerComponent, HeaderComponent} from './containers';
import {InlineModificationFormComponent} from './components/forms';
import {
    GenericCardComponent,
    GenericFadingCardContentComponent,
    GenericFancyCardComponent,
    GenericListComponent
} from './components/generic';
import {
    ClickableNameItemComponent,
    PriceChangeItemComponent,
    PriceCompareItemComponent,
    StockInfoIdentificationItemComponent,
    TitleWithLogoItemComponent
} from './components/items';
import {InlineInputPopUpComponent} from './components/pop-ups';
import {UploaderComponent, UploadTaskComponent} from './components/image-manipulation';
import {SearchWrapperComponent} from './components';
import {ArticleCardsComponent} from './components/cards';
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
        FinancialChartModalComponent
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
        FinancialChartModalComponent
    ],
    entryComponents: [
        InlineInputPopUpComponent
    ]
})
export class SharedModule {
}
