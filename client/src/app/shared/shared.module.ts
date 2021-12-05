import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationBarModule } from './components';
import { DefaultImgDirectiveModule } from './directives';
import { MatModuleModule } from './mat-module.module';

@NgModule({
	imports: [CommonModule, MatModuleModule, ReactiveFormsModule, DefaultImgDirectiveModule, NotificationBarModule],
	exports: [CommonModule, MatModuleModule, ReactiveFormsModule, DefaultImgDirectiveModule, NotificationBarModule],
})
export class SharedModule {}
