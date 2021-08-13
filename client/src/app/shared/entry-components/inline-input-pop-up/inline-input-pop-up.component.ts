import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-inline-input-pop-up',
	templateUrl: './inline-input-pop-up.component.html',
	styleUrls: ['./inline-input-pop-up.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineInputPopUpComponent implements OnInit {
	inputLabel: string;
	form: FormGroup;

	constructor(private popoverController: PopoverController, private navParams: NavParams, private fb: FormBuilder) {
		this.inputLabel = this.navParams.get('inputLabel');
	}

	ngOnInit() {
		this.initForm();
	}

	submit() {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			this.popoverController.dismiss({ inputData: this.inputData.value });
		}
	}

	dismiss() {
		this.popoverController.dismiss(null);
	}

	private initForm() {
		this.form = this.fb.group({
			inputData: [null, [Validators.required, Validators.maxLength(150)]],
		});
	}

	get inputData(): AbstractControl {
		return this.form.get('inputData');
	}
}
