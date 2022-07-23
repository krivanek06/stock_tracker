import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsTimeMoreThanPipe } from './is-time-more-than.pipe';

@NgModule({
	declarations: [IsTimeMoreThanPipe],
	imports: [CommonModule],
	exports: [IsTimeMoreThanPipe],
})
export class IsTimeMoreThanModule {}
