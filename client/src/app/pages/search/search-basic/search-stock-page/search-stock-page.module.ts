import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MarketSearchModule } from '@market-feature';
import { GenericCardModule, GenericExtensionPanelModule, ListSkeletonModule } from '@shared';
import { SearchStockPageComponent } from './search-stock-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockPageComponent,
	},
];

@NgModule({
	declarations: [SearchStockPageComponent],
	imports: [
		CommonModule,
		IonicModule,
		GenericCardModule,
		MarketSearchModule,
		ListSkeletonModule,
		GenericExtensionPanelModule,
		RouterModule.forChild(routes),
	],
})
export class SearchStockPageModule {}
