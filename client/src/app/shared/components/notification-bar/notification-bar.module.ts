import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotificationProgressComponent } from './notification-bar.component';
import { NotificationProgressDirective } from './notification-bar.directive';
@NgModule({
	declarations: [NotificationProgressComponent, NotificationProgressDirective],
	imports: [CommonModule, MatProgressBarModule, MatIconModule, MatDialogModule],
	exports: [NotificationProgressDirective],
})
export class NotificationBarModule {}
