import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, DropzoneDirectiveModule } from '../../../directives';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader.component';
@NgModule({
	declarations: [UploadTaskComponent, UploaderComponent],
	imports: [CommonModule, IonicModule, DefaultImgDirectiveModule, DropzoneDirectiveModule, AngularFireStorageModule, MatProgressBarModule],
	exports: [UploaderComponent],
})
export class UploaderModule {}
