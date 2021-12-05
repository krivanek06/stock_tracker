import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	imports: [MatButtonModule, MatIconModule, MatRippleModule, MatCardModule, MatDividerModule, MatDialogModule, MatTooltipModule, MatInputModule],
	exports: [MatButtonModule, MatIconModule, MatRippleModule, MatCardModule, MatDividerModule, MatDialogModule, MatTooltipModule, MatInputModule],
})
export class MatModuleModule {}
