import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderWrapperComponent } from './loader-wrapper.component';
@NgModule({
	declarations: [LoaderWrapperComponent],
	imports: [CommonModule, MatProgressSpinnerModule, ObserversModule],
	exports: [LoaderWrapperComponent],
})
export class LoaderWrapperModule {}
