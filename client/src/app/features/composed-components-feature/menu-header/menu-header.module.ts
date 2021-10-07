import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StockInfoIdentificationItemModule } from '@shared';
import { MenuHeaderComponent } from './menu-header.component';

@NgModule({
	declarations: [MenuHeaderComponent],
	imports: [CommonModule, IonicModule, StockInfoIdentificationItemModule],
	exports: [MenuHeaderComponent],
})
export class MenuHeaderModule {}
