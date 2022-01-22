import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TicketFormModule } from '../../components';
import { TicketFormDialogComponent } from './ticket-form-dialog.component';

@NgModule({
	declarations: [TicketFormDialogComponent],
	imports: [CommonModule, TicketFormModule, MatToolbarModule, MatIconModule, MatButtonModule],
})
export class TicketFormDialogModule {}
