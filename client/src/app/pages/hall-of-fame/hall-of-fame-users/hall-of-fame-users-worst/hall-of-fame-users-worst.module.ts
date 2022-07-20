import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDisplayModule } from '@hall-of-fame';
import { LoaderWrapperModule } from '@shared';
import { HallOfFameUsersWorstComponent } from './hall-of-fame-users-worst.component';

@NgModule({
	declarations: [HallOfFameUsersWorstComponent],
	imports: [CommonModule, UserDisplayModule, LoaderWrapperModule],
	exports: [HallOfFameUsersWorstComponent],
})
export class HallOfFameUsersWorstModule {}
