import {Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {UploadedFile} from '../../../models/sharedModel';

@Component({
    selector: 'app-upload-task',
    templateUrl: './upload-task.component.html',
    styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {
    @Output() uploadedFilesEmitter: EventEmitter<UploadedFile> = new EventEmitter<UploadedFile>();

    @Input() file: File;
    @Input() filePath: string;

    task: AngularFireUploadTask;

    percentage$: Observable<number>;
    snapshot$: Observable<any>;
    downloadURL: string;

    constructor(private storage: AngularFireStorage) {
    }

    ngOnInit() {
        this.startUpload();
    }

    startUpload() {

        // The storage path
        const path = `${this.filePath}/${Date.now()}_${this.file.name}`;

        // Reference to storage bucket
        const ref = this.storage.ref(path);

        // The main task
        this.task = this.storage.upload(path, this.file);

        // Progress monitoring
        this.percentage$ = this.task.percentageChanges();

        this.snapshot$ = this.task.snapshotChanges().pipe(
            // The file's download URL
            finalize(async () => {
                this.downloadURL = await ref.getDownloadURL().toPromise();
                this.uploadedFilesEmitter.emit({downloadURL: this.downloadURL, path});
            }),
        );
    }

}