import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ComposedSearchedUserDataModule } from '@composed-components-feature';
import { IonicModule } from '@ionic/angular';
import { AccountOverviewDialogComponent } from './account-overview-dialog.component';

@NgModule({
	declarations: [AccountOverviewDialogComponent],
	imports: [CommonModule, IonicModule, ComposedSearchedUserDataModule, MatDialogModule],
	exports: [AccountOverviewDialogComponent],
})
export class AccountOverviewDialogModule {}
