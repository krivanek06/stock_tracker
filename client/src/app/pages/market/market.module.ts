import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { MarketOverviewPreloadGuard } from '@market-feature';
import { MarketPage } from './market.page';
import {MARKET_PAGE_ENUM} from "./model/market.model";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "@shared";
import {MenuHeaderModule} from "@pages-shared";

const routes: Routes = [
	{
		path: '',
		component: MarketPage,
		resolve: [MarketOverviewPreloadGuard],
		children: [
			{
				path: '',
				redirectTo: MARKET_PAGE_ENUM.topStocks,
				pathMatch: 'full'
			},
			{
				path: MARKET_PAGE_ENUM.topStocks,
				loadChildren:  () => import('./pages/market-top-stocks/market-top-stocks-page.module').then((m) => m.MarketTopStocksPageModule),
			},
			{
				path: MARKET_PAGE_ENUM.overview,
				loadChildren:  () => import('./pages/market-overview/market-overview-page.module').then((m) => m.MarketOverviewPageModule),
			},
			{
				path: MARKET_PAGE_ENUM.etf,
				loadChildren:  () => import('./pages/market-etf/market-etf-page.module').then((m) => m.MarketEtfPageModule),
			},
			{
				path: MARKET_PAGE_ENUM.news,
				loadChildren:  () => import('./pages/market-news/market-news-page.module').then((m) => m.MarketNewsPageModule),
			},
			{
				path: MARKET_PAGE_ENUM.crypto,
				loadChildren:  () => import('./pages/market-crypto/market-crypto-page.module').then((m) => m.MarketCryptoPageModule),
			},
			{
				path: MARKET_PAGE_ENUM.calendar,
				loadChildren:  () => import('./pages/market-calendar/market-calendar-page.module').then((m) => m.MarketCalendarPageModule),
			},
			{
				path: MARKET_PAGE_ENUM.other,
				loadChildren:  () => import('./pages/market-other/market-other-page.module').then((m) => m.MarketOtherPageModule),
			}
		]
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), MatExpansionModule, IonicModule, HeaderModule, MenuHeaderModule],
	declarations: [
		MarketPage
	],
})
export class MarketPageModule {}
