import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { UserDisplayModule } from '@hall-of-fame';
import { LoaderWrapperModule } from '@shared';
import { HallOfFameUsersBestComponent } from './hall-of-fame-users-best.component';

@NgModule({
	declarations: [HallOfFameUsersBestComponent],
	imports: [CommonModule, UserDisplayModule, LoaderWrapperModule, MatDividerModule],
	exports: [HallOfFameUsersBestComponent],
})
export class HallOfFameUsersBestModule {}
