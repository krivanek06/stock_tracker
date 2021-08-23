import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StockWatchlistModule } from '@stock-watchlist-feature';
import { MenuHeaderComponent } from './menu-header/menu-header.component';

@NgModule({
	declarations: [MenuHeaderComponent],
	imports: [SharedModule, StockWatchlistModule],
	exports: [MenuHeaderComponent],
})
export class PagesSharedModule {}
