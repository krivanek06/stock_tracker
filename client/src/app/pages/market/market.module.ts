import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { MarketFeatureModule, MarketOverviewPreloadGuard } from '@market-feature';
import { PagesSharedModule } from '@pages-shared';
import { SharedModule } from '@shared';
import { StockWatchlistModule } from '@stock-watchlist-feature';
import { MarketPage } from './market.page';
import { MarketCalendarComponent } from './pages/market-calendar/market-calendar.component';
import { MarketCryptoComponent } from './pages/market-crypto/market-crypto.component';
import { MarketEtfComponent } from './pages/market-etf/market-etf.component';
import { MarketNewsComponent } from './pages/market-news/market-news.component';
import { MarketOtherComponent } from './pages/market-other/market-other.component';
import { MarketOverviewComponent } from './pages/market-overview/market-overview.component';
import { MarketTopStocksComponent } from './pages/market-top-stocks/market-top-stocks.component';

const routes: Routes = [
	{
		path: '',
		component: MarketPage,
		resolve: [MarketOverviewPreloadGuard],
	},
];

@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes), MarketFeatureModule, PagesSharedModule, StockWatchlistModule, MatExpansionModule],
	declarations: [
		MarketPage,
		MarketOverviewComponent,
		MarketTopStocksComponent,
		MarketCryptoComponent,
		MarketCalendarComponent,
		MarketEtfComponent,
		MarketNewsComponent,
		MarketOtherComponent,
	],
})
export class MarketPageModule {}
