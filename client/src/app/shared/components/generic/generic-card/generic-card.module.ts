import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';
import { GenericCardComponent } from './generic-card.component';

@NgModule({
	declarations: [GenericCardComponent],
	imports: [CommonModule, IonicModule, MatCardModule, MatDividerModule],
	exports: [GenericCardComponent],
})
export class GenericCardModule {}
