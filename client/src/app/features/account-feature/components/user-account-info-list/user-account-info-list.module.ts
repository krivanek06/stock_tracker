import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, PriceChangeItemModule } from '@shared';
import { UserAccountInfoListComponent } from './user-account-info-list.component';

@NgModule({
	declarations: [UserAccountInfoListComponent],
	imports: [CommonModule, IonicModule, PriceChangeItemModule, DefaultImgDirectiveModule, MatIconModule, MatTooltipModule],
	exports: [UserAccountInfoListComponent],
})
export class UserAccountInfoListModule {}
