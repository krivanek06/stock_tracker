import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { maxLengthValidator, minLengthValidator, requiredValidator } from '../../validators';

@Component({
	selector: 'app-inline-input-pop-up',
	templateUrl: './inline-input-pop-up.component.html',
	styleUrls: ['./inline-input-pop-up.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineInputPopUpComponent implements OnInit {
	form!: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<InlineInputPopUpComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { inputLabel: string },
		private fb: FormBuilder
	) {}

	get inputData(): AbstractControl {
		return this.form.get('inputData') as AbstractControl;
	}

	ngOnInit() {
		this.initForm();
		console.log('addsa');
	}

	submit() {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			this.dialogRef.close(this.inputData.value);
		}
	}

	dismiss() {
		this.dialogRef.close();
	}

	private initForm() {
		this.form = this.fb.group({
			inputData: [null, [requiredValidator, maxLengthValidator(50), minLengthValidator(4)]],
		});
	}
}
