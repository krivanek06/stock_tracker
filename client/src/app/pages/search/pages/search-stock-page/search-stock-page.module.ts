import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStockPageComponent } from './search-stock-page.component';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {GenericCardModule, GenericExtensionPanelModule} from "@shared";
import {MarketSearchModule} from "@market-feature";

const routes: Routes = [
	{
		path: '',
		component: SearchStockPageComponent,
	},
];

@NgModule({
	declarations: [SearchStockPageComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, GenericExtensionPanelModule, MarketSearchModule, GenericCardModule],
})
export class SearchStockPageModule {}
