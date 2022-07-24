import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { UserAccountResetedInfoComponent } from './user-account-reseted-info.component';

@NgModule({
	declarations: [UserAccountResetedInfoComponent],
	imports: [CommonModule, IonicModule, MatButtonModule, MatTooltipModule],
	exports: [UserAccountResetedInfoComponent],
})
export class UserAccountResetedInfoModule {}
