import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserAccountButtonsComponent } from './user-account-buttons.component';

@NgModule({
	declarations: [UserAccountButtonsComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
	exports: [UserAccountButtonsComponent],
})
export class UserAccountButtonsModule {}
