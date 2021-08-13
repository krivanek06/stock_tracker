import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InputSource, InputType } from '../../../models';

@Component({
	selector: 'app-form-mat-input-lock-wrapper',
	templateUrl: './form-mat-input-lock-wrapper.component.html',
	styleUrls: ['./form-mat-input-lock-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMatInputLockWrapperComponent implements OnInit {
	@Input() controlName: string;
	@Input() inputType: InputType;
	@Input() inputCaption: string;
	@Input() hintText: string;
	@Input() inputSource: InputSource[] = []; // data which are displayed in Select.options
	@Input() highlightField: boolean;

	@Input() chipMaxAllowed = 999; // only used when inputType === MULTISELECT
	@Input() chipSelectedValues: InputSource[] = []; // used display selected values when inputType === CHIPSELECT

	@Input() sliderMaxValue: number;
	@Input() sliderMinValue: number;
	@Input() sliderStepValue: number;
	@Input() sliderLabelShowDollarSign: boolean = false;

	@Input() showChangeInput: boolean;
	@Input() changeInputTo: InputType;

	allowChangeInput: boolean;

	form: FormGroup;

	formInputControl: FormControl;

	private originalValue: unknown;

	constructor(private controlContainer: ControlContainer, private fb: FormBuilder) {}

	get disabled(): AbstractControl {
		return this.form.get('disabled') as AbstractControl;
	}

	ngOnInit() {
		this.formInputControl = this.controlContainer.control.get(this.controlName) as FormControl;
		this.originalValue = this.formInputControl.value;

		this.form = this.fb.group({
			disabled: [this.formInputControl.disabled],
		});

		this.disabled.valueChanges.subscribe((isDisabled) => {
			if (isDisabled) {
				this.formInputControl.disable();
				this.formInputControl.patchValue(this.originalValue);
			} else {
				this.formInputControl.enable();
			}
		});
	}

	changeInput() {
		this.allowChangeInput = !this.allowChangeInput;
	}

	resetForm(forceDisable: boolean = false) {
		this.originalValue = this.formInputControl.value;

		if (forceDisable) {
			this.disabled.patchValue(true);
		}
	}
}
