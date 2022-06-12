import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickableDirectiveDirective } from './clickable-directive.directive';

@NgModule({
	declarations: [ClickableDirectiveDirective],
	imports: [CommonModule],
	exports: [ClickableDirectiveDirective],
})
export class ClickableDirectiveModule {}
