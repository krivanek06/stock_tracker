import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCardsComponent} from './components/article-cards/article-cards.component';
import {SharedModule} from '../../shared/shared.module';
import {SymbolMovementTableCardComponent} from './components/symbol-movement-table-card/symbol-movement-table-card.component';


@NgModule({
    declarations: [
        ArticleCardsComponent,
        SymbolMovementTableCardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        SymbolMovementTableCardComponent,
        ArticleCardsComponent
    ]
})
export class StockDataFeatureModule {
}
