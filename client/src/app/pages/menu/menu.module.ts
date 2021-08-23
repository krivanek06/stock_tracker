import { NgModule } from '@angular/core';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
	imports: [CommonModule, MenuPageRoutingModule, IonicModule, MatTooltipModule],
	declarations: [MenuPage],
})
export class MenuPageModule {}
