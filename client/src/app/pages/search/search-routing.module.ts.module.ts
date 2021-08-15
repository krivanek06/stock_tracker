import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEARCH_PAGE_ENUM } from './models/pages.model';
import { SearchGroupComponent } from './pages/search-group/search-group.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { SearchPage } from './search.page';

const routes: Routes = [
	{
		path: '',
		component: SearchPage,
		children: [
			{
				path: '',
				redirectTo: SEARCH_PAGE_ENUM.STOCK,
			},
			{
				path: SEARCH_PAGE_ENUM.USER,
				component: SearchUserComponent,
			},
			{
				path: SEARCH_PAGE_ENUM.GROUP,
				component: SearchGroupComponent,
			},
			{
				path: SEARCH_PAGE_ENUM.STOCK,
				loadChildren: () => import('./pages/search-stock/search-stock.module').then((m) => m.SearchStockModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SearchPageRoutingModule {}
