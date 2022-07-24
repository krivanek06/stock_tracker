import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserAccountButtonsComponent } from './user-account-buttons.component';

@NgModule({
	declarations: [UserAccountButtonsComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule],
	exports: [UserAccountButtonsComponent],
})
export class UserAccountButtonsModule {}
