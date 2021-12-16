import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InlineInputPopUpComponent } from './inline-input-pop-up.component';

@NgModule({
	declarations: [InlineInputPopUpComponent],
	imports: [CommonModule, IonicModule, ReactiveFormsModule],
	exports: [InlineInputPopUpComponent],
})
export class InlineInputPopUpModule {}
