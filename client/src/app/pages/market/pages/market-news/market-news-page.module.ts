import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketStockNewsModule } from '@market-feature';
import { MarketNewsComponent } from './market-news.component';

const routes: Routes = [
	{
		path: '',
		component: MarketNewsComponent,
	},
];

@NgModule({
	declarations: [MarketNewsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), MarketStockNewsModule],
})
export class MarketNewsPageModule {}
