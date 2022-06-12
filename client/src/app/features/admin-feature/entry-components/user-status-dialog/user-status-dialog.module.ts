import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DefaultImgDirectiveModule, LoaderWrapperModule } from '@shared';
import { UserStatusBasicInfoComponent } from './user-status-basic-info/user-status-basic-info.component';
import { UserStatusDialogComponent } from './user-status-dialog.component';
import { UserStatusGroupsComponent } from './user-status-groups/user-status-groups.component';
import { UserStatusHoldingsComponent } from './user-status-holdings/user-status-holdings.component';
import { UserStatusRolesComponent } from './user-status-roles/user-status-roles.component';
import { UserStatusWatchlistComponent } from './user-status-watchlist/user-status-watchlist.component';

@NgModule({
	declarations: [
		UserStatusDialogComponent,
		UserStatusBasicInfoComponent,
		UserStatusGroupsComponent,
		UserStatusRolesComponent,
		UserStatusHoldingsComponent,
		UserStatusWatchlistComponent,
	],
	imports: [CommonModule, MatDialogModule, MatButtonModule, DefaultImgDirectiveModule, LoaderWrapperModule, MatIconModule],
	exports: [UserStatusDialogComponent],
})
export class UserStatusDialogModule {}
