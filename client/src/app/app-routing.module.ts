import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: '',
				redirectTo: 'menu',
				pathMatch: 'full',
			},
			{
				path: 'menu',
				loadChildren: () => import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
			},
			{
				path: '**',
				redirectTo: 'menu',
			},
		],
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
