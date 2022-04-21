import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GenericFancyCardComponent } from './generic-fancy-card.component';

@NgModule({
	declarations: [GenericFancyCardComponent],
	imports: [CommonModule, MatCardModule],
	exports: [GenericFancyCardComponent],
})
export class GenericFancyCardModule {}
