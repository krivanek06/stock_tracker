import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { MARKET_PAGE_ENUM } from './market.model';
import { MarketPage } from './market.page';

const routes: Routes = [
	{
		path: '',
		component: MarketPage,
		children: [
			{
				path: '',
				redirectTo: MARKET_PAGE_ENUM.topStocks,
			},
			{
				path: MARKET_PAGE_ENUM.topStocks,
				loadChildren: () => import('./market-top-stocks/market-top-stocks.module').then((m) => m.MarketTopStocksModule),
			},
			{
				path: MARKET_PAGE_ENUM.overview,
				loadChildren: () => import('./market-overview/market-overview.module').then((m) => m.MarketOverviewModule),
			},
			{
				path: MARKET_PAGE_ENUM.other,
				loadChildren: () => import('./market-other/market-other.module').then((m) => m.MarketOtherModule),
			},
			{
				path: MARKET_PAGE_ENUM.news,
				loadChildren: () => import('./market-news/market-news.module').then((m) => m.MarketNewsModule),
			},
			{
				path: MARKET_PAGE_ENUM.etf,
				loadChildren: () => import('./market-etf/market-etf.module').then((m) => m.MarketEtfModule),
			},
			{
				path: MARKET_PAGE_ENUM.crypto,
				loadChildren: () => import('./market-crypto/market-crypto.module').then((m) => m.MarketCryptoModule),
			},
			{
				path: MARKET_PAGE_ENUM.calendar,
				loadChildren: () => import('./market-calendar/market-calendar.module').then((m) => m.MarketCalendarModule),
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule, MatSelectModule],
	declarations: [MarketPage],
})
export class MarketPageModule {}
