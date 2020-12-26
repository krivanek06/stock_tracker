import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UploadedFile} from '../../../models/sharedModel';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
    @Output() uploadedFilesEmitter: EventEmitter<UploadedFile[]> = new EventEmitter<UploadedFile[]>();

    @Input() defaultUrl: string;
    @Input() filePath: string;
    @Input() fileName: string;
    @Input() singleFile = true;
    @Input() oneLine = false;
    @Input() showInput = true;

    files: File[] = [];
    isHovering: boolean;
    private uploadedFiles: UploadedFile[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    // public method
    clearImages() {
        this.uploadedFiles = [];
        this.files.splice(0, this.files.length);
    }


    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    onDrop(files: FileList) {
        this.clearImages();
        if (this.singleFile) {
            this.files.push(files.item(0));
        } else {
            for (let i = 0; i < files.length; i++) {
                this.files.push(files.item(i));
            }
        }
    }

    uploadFile(file: UploadedFile) {
        this.uploadedFiles = [...this.uploadedFiles, file];
        if (this.uploadedFiles.length === this.files.length) {
            this.uploadedFilesEmitter.emit(this.uploadedFiles);
        }
    }
}
