import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { ReplaceCharPipeModule, StockInfoIdentificationItemModule } from '@shared';
import { SideNavigationComponent } from './side-navigation.component';

@NgModule({
	declarations: [SideNavigationComponent],
	imports: [
		CommonModule,
		IonicModule,
		MatTooltipModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		StockInfoIdentificationItemModule,
		ReplaceCharPipeModule,
	],
	exports: [SideNavigationComponent],
})
export class SideNavigationModule {}
