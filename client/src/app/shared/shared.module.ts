import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMatInputWrapperModule, NotificationBarModule } from './components';
import { DefaultImgDirectiveModule } from './directives';
import { MatModuleModule } from './mat-module.module';
import { NumberFormatterPipeModule } from './pipes';

@NgModule({
	imports: [
		CommonModule,
		MatModuleModule,
		ReactiveFormsModule,
		DefaultImgDirectiveModule,
		NotificationBarModule,
		NumberFormatterPipeModule,
		FormMatInputWrapperModule,
	],
	exports: [
		CommonModule,
		MatModuleModule,
		ReactiveFormsModule,
		DefaultImgDirectiveModule,
		NotificationBarModule,
		NumberFormatterPipeModule,
		FormMatInputWrapperModule,
	],
})
export class SharedModule {}
