import { UserAccountInfoListModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { PositionCardModule } from '@shared';
import { UserDisplayComponent } from './user-display.component';

@NgModule({
	declarations: [UserDisplayComponent],
	imports: [CommonModule, UserAccountInfoListModule, PositionCardModule, MatDialogModule],
	exports: [UserDisplayComponent],
})
export class UserDisplayModule {}
