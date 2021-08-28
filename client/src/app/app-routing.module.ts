import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'menu',
		loadChildren: () => import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
	},
	{
		path: '',
		redirectTo: 'menu',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: 'menu',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'top',
			preloadingStrategy: PreloadAllModules,
			useHash: false,
			enableTracing: false,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
