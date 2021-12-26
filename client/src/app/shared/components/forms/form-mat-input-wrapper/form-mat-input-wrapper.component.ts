import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { MatSliderChange } from '@angular/material/slider';
import { first } from 'rxjs/operators';
import { Required } from '../../../decorators';
import { InputSource, InputSourceSliderConfig, InputType } from '../../../models';

/**
 * Wrapper pre inputy.
 * Sluzi na to, aby sme nemuseli na kazdom mieste nanovo stylovat inputy a aby sme mohli lahsie
 * tie inputy naparametrizovat.
 */
@Component({
	selector: 'app-form-mat-input-wrapper',
	templateUrl: './form-mat-input-wrapper.component.html',
	styleUrls: ['./form-mat-input-wrapper.component.scss'],
})
export class FormMatInputWrapperComponent implements OnInit, OnChanges {
	/* emits only if showCloseIcon === true &&  inputType === 'TEXT' */
	@Output() resetInputValueEmitter: EventEmitter<void> = new EventEmitter<void>();

	@Required
	@Input()
	controlName!: string;

	@Required
	@Input()
	inputCaption!: string;

	@Input() prefixIcon: string | undefined;

	@Input() inputType: InputType = 'TEXT';
	@Input() inputAutoComplete = true;
	@Input() disabled = false;
	@Input() hintText: string | undefined;
	@Input() showCloseIcon = false; // use only if inputType === 'TEXT'
	@Input() inputSource: InputSource[] | null | undefined = []; // data which are displayed in Select.options
	@Input() fieldsetAdditionalClasses = '';
	@Input() inputTypeSliderConfig!: InputSourceSliderConfig;

	@Input() highlightField = false;
	@Input() sliderLabelShowDollarSign = false;

	/*
	Only used when inputType === BUTTON
  */
	@Input() buttonOffCaption: string | undefined;

	@ViewChild('formFieldDatePicker') endDatePicker?: MatDatepicker<Date>;
	selectedInputSouce: InputSource | undefined; // ONLY USED FOR inputType === SELECT

	formInputControl!: FormControl;
	private copyInputSource: InputSource[] = []; // storing original inputSource when filtering in inputType === MULTISELECT

	constructor(private controlContainer: ControlContainer) { }

	get chipInputControl(): FormControl {
		return this.formInputControl.get('trueFormInput') as FormControl;
	}

	get chipSearchInputControl(): FormControl {
		return this.formInputControl.get('searchInput') as FormControl;
	}

	get usedFormControl(): FormControl {
		return this.formInputControl;
	}

	get shouldBeErrorsShowed(): boolean | null {
		if (!this.usedFormControl) {
			return false;
		}

		return this.usedFormControl.errors && (this.usedFormControl.touched || this.usedFormControl.dirty);
	}

	ngOnInit(): void {
		this.formInputControl = this.controlContainer.control?.get(this.controlName) as FormControl;

		// create copy - used when filtering
		if (this.inputSource && this.copyInputSource.length === 0) {
			this.copyInputSource = [...this.inputSource];
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.inputSource?.currentValue && this.copyInputSource.length === 0) {
			this.copyInputSource = [...(changes?.inputSource?.currentValue as InputSource[])];
		}

		// when in editing we patch value into selectedInputSouce m we want to find a value
		// form inputSource to display image (flag, etc.)
		if (this.inputType === 'SELECT' && !!this.formInputControl && !!this.inputSource) {
			this.selectedInputSouce = this.inputSource?.find((s) => s.value === this.formInputControl.value);
			if (!this.selectedInputSouce) {
				this.formInputControl.valueChanges.pipe(first()).subscribe((res) => {
					this.selectedInputSouce = this.inputSource?.find((s) => s.value === res);
				});
			}
		}
	}

	resetValue(): void {
		this.resetInputValueEmitter.emit();
	}

	toggleButton(): void {
		this.formInputControl.patchValue(!this.formInputControl.value);
	}

	/*
	 * used when inputType === MULTISELECT to filter data
	 * */
	multiSelectKeyPress(event: any): void {
		const value = event.target?.value;
		this.inputSource = this.copyInputSource.filter((inputSource) => inputSource.caption.toString().toLowerCase().startsWith(value.toLowerCase()));
	}

	selectOption(event: MatSelectChange): void {
		if (!this.inputSource) {
			return;
		}

		this.selectedInputSouce = this.inputSource.find((s) => s.value === event.source.value);
	}

	setSliderValue(event: MatSliderChange): void {
		this.usedFormControl.patchValue(event.value);
	}

	datePickerOpen() {
		if (!this.formInputControl.disabled && this.endDatePicker && this.inputType === 'DATEPICKER') {
			this.endDatePicker.open();
		}
	}

}
