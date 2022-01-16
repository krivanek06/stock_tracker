import { UserAccountInfoListModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PositionCardModule } from '@shared';
import { UserDisplayComponent } from './user-display.component';

@NgModule({
	declarations: [UserDisplayComponent],
	imports: [CommonModule, UserAccountInfoListModule, PositionCardModule],
	exports: [UserDisplayComponent],
})
export class UserDisplayModule {}
