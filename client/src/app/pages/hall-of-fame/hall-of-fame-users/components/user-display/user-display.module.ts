import { UserAccountInfoListModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDisplayComponent } from './user-display.component';

@NgModule({
	declarations: [UserDisplayComponent],
	imports: [CommonModule, UserAccountInfoListModule],
	exports: [UserDisplayComponent],
})
export class UserDisplayModule {}
