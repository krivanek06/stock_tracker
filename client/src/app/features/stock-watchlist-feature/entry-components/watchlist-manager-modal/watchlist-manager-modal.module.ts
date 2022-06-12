import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InlineModificationFormModule } from '@shared';
import { WatchlistManagerModalComponent } from './watchlist-manager-modal.component';

@NgModule({
	declarations: [WatchlistManagerModalComponent],
	imports: [CommonModule, MatDialogModule, InlineModificationFormModule, MatToolbarModule, MatIconModule, MatButtonModule],
})
export class WatchlistManagerModalModule {}
