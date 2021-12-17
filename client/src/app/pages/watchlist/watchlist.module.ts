import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, GenericListModule, HeaderModule } from '@shared';
import { WatchlistTableModule } from '@stock-watchlist-feature';
import { WatchlistPage } from './watchlist.page';

const routes: Routes = [
	{
		path: '',
		component: WatchlistPage,
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, HeaderModule, GenericListModule, GenericCardModule, WatchlistTableModule],
	declarations: [WatchlistPage],
})
export class WatchlistPageModule {}
