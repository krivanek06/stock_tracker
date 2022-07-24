import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeactivatedAccountComponent } from './user-account-deactivated-message.component';

@NgModule({
	declarations: [DeactivatedAccountComponent],
	imports: [CommonModule],
	exports: [DeactivatedAccountComponent],
})
export class DeactivatedAccountModule {}
