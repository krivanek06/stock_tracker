import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchBasicComponent } from './search-basic.component';

const routes: Routes = [
	{
		path: '',
		component: SearchBasicComponent,
		children: [
			{
				path: '',
				redirectTo: 'stock',
				pathMatch: 'full',
			},
			{
				path: 'stock',
				loadChildren: () => import('./pages/search-stock-page/search-stock-page.module').then((m) => m.SearchStockPageModule),
			},
			{
				path: 'user',
				loadChildren: () => import('./pages/search-user-page/search-user-page.module').then((m) => m.SearchUserPageModule),
			},
			{
				path: 'group',
				loadChildren: () => import('./pages/search-group-page/search-group-page.module').then((m) => m.SearchGroupPageModule),
			},
		],
	},
];

@NgModule({
	declarations: [SearchBasicComponent],
	imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class SearchBasicModule {}
