import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { MarketSearchModule } from '@market-feature';
import { GenericExtensionPanelModule, ListSkeletonModule, MatCardWrapperModule } from '@shared';
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
		MatTooltipModule,
		MatCardWrapperModule,
		MarketSearchModule,
		ListSkeletonModule,
		MatButtonModule,
		GenericExtensionPanelModule,
		RouterModule.forChild(routes),
	],
})
export class SearchStockPageModule {}
