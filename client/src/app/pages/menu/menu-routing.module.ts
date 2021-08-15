import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core';
import { MenuPage } from './menu.page';

const routes: Routes = [
	{
		path: '',
		component: MenuPage,
		children: [
			{
				path: 'dashboard',
				canActivate: [AuthGuard],
				loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardPageModule),
			},
			{
				path: 'watchlist',
				canActivate: [AuthGuard],
				loadChildren: () => import('../watchlist/watchlist.module').then((m) => m.WatchlistPageModule),
			},
			{
				path: 'trading',
				canActivate: [AuthGuard],
				loadChildren: () => import('../trading/trading.module').then((m) => m.TradingPageModule),
			},
			{
				path: 'market',
				loadChildren: () => import('../market/market.module').then((m) => m.MarketPageModule),
			},
			{
				path: 'ranking',
				canActivate: [AuthGuard],
				loadChildren: () => import('../ranking/ranking.module').then((m) => m.RankingPageModule),
			},
			{
				path: 'about',
				canActivate: [AuthGuard],
				loadChildren: () => import('../about/about.module').then((m) => m.AboutPageModule),
			},
			{
				path: 'admin',
				canActivate: [AuthGuard],
				loadChildren: () => import('../admin/admin.module').then((m) => m.AdminPageModule),
			},
			{
				path: 'groups',
				//canActivate: [AuthGuard],
				loadChildren: () => import('../groups/groups.module').then((m) => m.GroupsModule),
			},
			{
				path: 'account',
				canActivate: [AuthGuard],
				loadChildren: () => import('../account/account.module').then((m) => m.AccountPageModule),
			},
			{
				path: 'search',
				loadChildren: () => import('../search/search.module').then((m) => m.SearchPageModule),
			},
			{
				path: '',
				redirectTo: 'dashboard',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuPageRoutingModule {}
