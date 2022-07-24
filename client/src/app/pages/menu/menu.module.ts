import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { MenuCreatorCreditsModule, MenuHeaderModule, SideNavigationModule } from '@menu-feature';
import { ReplaceCharPipeModule } from '@shared';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
@NgModule({
	declarations: [MenuPage],
	imports: [
		CommonModule,
		MenuPageRoutingModule,
		IonicModule,
		MatTooltipModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		SideNavigationModule,
		MenuHeaderModule,
		ReplaceCharPipeModule,
		MenuCreatorCreditsModule,
		MatDividerModule,
	],
})
export class MenuPageModule {}
