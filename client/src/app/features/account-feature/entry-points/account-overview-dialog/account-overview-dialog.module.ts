import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComposedSearchedUserDataModule } from '@composed-components-feature';
import { LoaderWrapperModule } from '@shared';
import { AccountOverviewDialogComponent } from './account-overview-dialog.component';
@NgModule({
	declarations: [AccountOverviewDialogComponent],
	imports: [CommonModule, MatToolbarModule, ComposedSearchedUserDataModule, MatDialogModule, MatButtonModule, MatIconModule, LoaderWrapperModule],
	exports: [AccountOverviewDialogComponent],
})
export class AccountOverviewDialogModule {}
