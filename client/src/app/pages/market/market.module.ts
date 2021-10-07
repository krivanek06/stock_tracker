import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
	MarketCalendarDividendPayoutModule,
	MarketCalendarEarningsModule,
	MarketCalendarEconomicModule,
	MarketCalendarIpoModule,
	MarketCalendarSplitHistoryModule,
	MarketChartBuilderModule,
	MarketCompanyQuotesTableModule,
	MarketOverviewPreloadGuard,
	MarketSectorHeatMapModule,
	MarketStockNewsModule,
	MarketTopTableCryptoModule,
} from '@market-feature';
import {
	ChartKeyValueFormatterPipeModule,
	FinancialChartContainerModule,
	GenericCardModule,
	GenericChartModule,
	GenericExtensionPanelModule,
	GenericListModule,
	HeaderModule,
	PieChartWrapperModule,
} from '@shared';
import { MenuHeaderModule } from 'src/app/features/composed-components-feature';
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
		// children: [
		// 	{
		// 		path: MARKET_PAGE_ENUM.topStocks,
		// 		loadChildren: () => import('./pages/market-top-stocks/market-top-stocks-page.module').then((m) => m.MarketTopStocksPageModule),
		// 	},
		// 	{
		// 		path: MARKET_PAGE_ENUM.overview,
		// 		loadChildren: () => import('./pages/market-overview/market-overview-page.module').then((m) => m.MarketOverviewPageModule),
		// 	},
		// 	{
		// 		path: MARKET_PAGE_ENUM.etf,
		// 		loadChildren: () => import('./pages/market-etf/market-etf-page.module').then((m) => m.MarketEtfPageModule),
		// 	},
		// 	{
		// 		path: MARKET_PAGE_ENUM.news,
		// 		loadChildren: () => import('./pages/market-news/market-news-page.module').then((m) => m.MarketNewsPageModule),
		// 	},
		// 	{
		// 		path: MARKET_PAGE_ENUM.crypto,
		// 		loadChildren: () => import('./pages/market-crypto/market-crypto-page.module').then((m) => m.MarketCryptoPageModule),
		// 	},
		// 	{
		// 		path: MARKET_PAGE_ENUM.calendar,
		// 		loadChildren: () => import('./pages/market-calendar/market-calendar-page.module').then((m) => m.MarketCalendarPageModule),
		// 	},
		// 	{
		// 		path: MARKET_PAGE_ENUM.other,
		// 		loadChildren: () => import('./pages/market-other/market-other-page.module').then((m) => m.MarketOtherPageModule),
		// 	},
		// 	{
		// 		path: '',
		// 		redirectTo: MARKET_PAGE_ENUM.topStocks,
		// 		pathMatch: 'full',
		// 	},
		// ],
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatExpansionModule,
		IonicModule,
		HeaderModule,
		MenuHeaderModule,
		MarketChartBuilderModule,
		FinancialChartContainerModule,
		GenericListModule,
		GenericChartModule,
		GenericExtensionPanelModule,
		MarketSectorHeatMapModule,
		ChartKeyValueFormatterPipeModule,
		MarketCompanyQuotesTableModule,
		MarketStockNewsModule,
		PieChartWrapperModule,
		MarketTopTableCryptoModule,
		MarketCalendarEconomicModule,
		MarketCalendarEarningsModule,
		MarketCalendarIpoModule,
		MarketCalendarSplitHistoryModule,
		MarketCalendarDividendPayoutModule,
		GenericCardModule,
	],
	declarations: [
		MarketPage,
		MarketTopStocksComponent,
		MarketOverviewComponent,
		MarketOtherComponent,
		MarketNewsComponent,
		MarketEtfComponent,
		MarketCryptoComponent,
		MarketCalendarComponent,
	],
})
export class MarketPageModule {}
