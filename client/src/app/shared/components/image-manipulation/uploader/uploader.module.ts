import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadTaskComponent} from "./upload-task/upload-task.component";
import {UploaderComponent} from "./uploader.component";
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule, DropzoneDirectiveModule} from "../../../directives";



@NgModule({
  declarations: [UploadTaskComponent, UploaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule,
    DropzoneDirectiveModule
  ],
  exports: [UploaderComponent]
})
export class UploaderModule { }
