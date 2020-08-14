import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCardsComponent} from './components/article-cards/article-cards.component';
import {FinancialChartModalContainerComponent} from './container/modal/financial-chart-modal-container/financial-chart-modal-container.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {ArticleComponent} from './components/article/article.component';
import {SharedModule} from '../../shared/shared.module';
import {SymbolMovementTableCardComponent} from './components/symbol-movement-table-card/symbol-movement-table-card.component';
import {NewsArticlesContainerComponent} from './container/news-articles-container/news-articles-container.component';


@NgModule({
    declarations: [
        ArticleCardsComponent,
        FinancialChartModalContainerComponent,
        FinancialChartContainerComponent,
        ArticleComponent,
        SymbolMovementTableCardComponent,
        NewsArticlesContainerComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        FinancialChartModalContainerComponent,
        FinancialChartContainerComponent,
        SymbolMovementTableCardComponent,
        NewsArticlesContainerComponent
    ],
    entryComponents: [
        FinancialChartModalContainerComponent,
    ],
})
export class StockDataFeatureModule {
}
