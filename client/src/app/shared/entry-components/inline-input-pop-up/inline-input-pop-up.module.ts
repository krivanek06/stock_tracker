import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InlineInputPopUpComponent } from './inline-input-pop-up.component';

@NgModule({
	declarations: [InlineInputPopUpComponent],
	imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
	exports: [InlineInputPopUpComponent],
})
export class InlineInputPopUpModule {}
