import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getDownloadURL, percentage, ref, Storage, uploadBytesResumable, UploadTask } from '@angular/fire/storage';
//import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UploadedFile } from '../../../../models';
@Component({
	selector: 'app-upload-task',
	templateUrl: './upload-task.component.html',
	styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {
	@Output() uploadedFilesEmitter: EventEmitter<UploadedFile> = new EventEmitter<UploadedFile>();

	@Input() file: File;
	@Input() filePath: string;
	@Input() fileName: string;
	@Input() maxWidth = 130;
	@Input() maxHeight = 130;

	task: UploadTask;

	percentage$: Observable<number>;
	downloadURL: string;

	constructor(private storage: Storage) {}

	ngOnInit() {
		this.startUpload();
	}

	startUpload() {
		// The storage path
		const path = this.fileName ? `${this.filePath}/${this.fileName}` : `${this.filePath}/${Date.now()}_${this.file.name}`;

		// Reference to storage bucket
		const refefence = ref(this.storage, path);

		// The main task
		this.task = uploadBytesResumable(refefence, this.file);

		// Progress monitoring
		this.percentage$ = percentage(this.task).pipe(map((x: any) => x.progress));

		// emit when finished
		percentage(this.task)
			.pipe(first((x: any) => x.progress === 100))
			.subscribe(async (res) => {
				// The file's download URL
				console.log('final', res);
				this.downloadURL = await getDownloadURL(res.snapshot.ref);
				this.uploadedFilesEmitter.emit({ downloadURL: this.downloadURL, path });
			});
	}
}
