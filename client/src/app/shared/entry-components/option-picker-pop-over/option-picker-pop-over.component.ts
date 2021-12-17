import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdNameContainer } from '../../models';

@Component({
	selector: 'app-option-picker-pop-over',
	templateUrl: './option-picker-pop-over.component.html',
	styleUrls: ['./option-picker-pop-over.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionPickerPopOverComponent implements OnInit {
	constructor(
		private dialogRef: MatDialogRef<OptionPickerPopOverComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { title: string; options: IdNameContainer[] }
	) {}

	ngOnInit(): void {}

	dismissModal() {
		this.dialogRef.close();
	}

	pickData(id: string) {
		this.dialogRef.close(id);
	}
}
