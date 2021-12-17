import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { StockInfoIdentificationItemModule } from '@shared';
import { MenuHeaderComponent } from './containers/menu-header/menu-header.component';
import { SideNavigationComponent } from './containers/side-navigation/side-navigation.component';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
@NgModule({
	declarations: [MenuPage, SideNavigationComponent, MenuHeaderComponent],
	imports: [
		CommonModule,
		MenuPageRoutingModule,
		IonicModule,
		MatTooltipModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		StockInfoIdentificationItemModule,
	],
})
export class MenuPageModule {}
