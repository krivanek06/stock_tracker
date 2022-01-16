import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PositionCardComponent } from './position-card.component';

@NgModule({
	declarations: [PositionCardComponent],
	imports: [CommonModule, IonicModule],
	exports: [PositionCardComponent],
})
export class PositionCardModule {}
