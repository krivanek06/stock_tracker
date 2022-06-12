import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { OptionPickerPopOverComponent } from './option-picker-pop-over.component';

@NgModule({
	declarations: [OptionPickerPopOverComponent],
	imports: [CommonModule, IonicModule, MatDialogModule],
	exports: [OptionPickerPopOverComponent],
})
export class OptionPickerPopOverModule {}
