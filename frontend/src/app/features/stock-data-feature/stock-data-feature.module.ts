import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCardsComponent} from './components/article-cards/article-cards.component';
import {FinancialChartCardModalContainerComponent} from './container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {FinancialChartContainerComponent} from './container/financial-chart-container/financial-chart-container.component';
import {ArticleComponent} from './components/article/article.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        ArticleCardsComponent,
        FinancialChartCardModalContainerComponent,
        FinancialChartContainerComponent,
        ArticleComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ArticleCardsComponent,
        FinancialChartCardModalContainerComponent,
        FinancialChartContainerComponent,
        ArticleComponent
    ],
    entryComponents: [
        FinancialChartCardModalContainerComponent,
    ],
})
export class StockDataFeatureModule {
}
