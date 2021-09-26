import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoaderWrapperComponent } from './loader-wrapper.component';

@NgModule({
	declarations: [LoaderWrapperComponent],
	imports: [CommonModule, IonicModule],
	exports: [LoaderWrapperComponent],
})
export class LoaderWrapperModule {}
