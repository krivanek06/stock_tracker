import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CustomBubblePaginationComponent } from './custom-bubble-pagination.component';

@NgModule({
	declarations: [CustomBubblePaginationComponent],
	imports: [CommonModule, MatIconModule],
	exports: [CustomBubblePaginationComponent],
})
export class CustomBubblePaginationModule {}
