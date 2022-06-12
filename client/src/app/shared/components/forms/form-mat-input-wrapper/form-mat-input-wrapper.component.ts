import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSliderChange } from '@angular/material/slider';
import { first } from 'rxjs/operators';
import { Required } from '../../../decorators';
import { InputSource, InputSourceSliderConfig, InputType, InputTypeEnum } from '../../../models';

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

	@Input() prefixIcon?: string;

	@Input() inputType: InputTypeEnum | InputType = 'TEXT';
	@Input() inputAutoComplete = true;

	/*
		disable input source
	  */
	@Input() disabled = false;

	/*
		display hint text for input
	  */
	@Input() hintText?: string;

	/*
		 data which are displayed in Select.option
		 use only if inputType === 'SELECT' | 'MULTISELECT' | 'SELECTSEARCH'
	  */
	@Input() inputSource?: InputSource[] | null = []; //s
	@Input() fieldsetAdditionalClasses = '';

	/*
		use only if inputType === 'TEXT'
	  */
	@Input() showCloseIcon = false;
	/*
		used only when when inputType === SLIDER
	  */
	@Input() inputTypeSliderConfig!: InputSourceSliderConfig;
	@ViewChild('matSearchSelectInput') matSearchSelectInput?: ElementRef<HTMLInputElement>;

	/*
			Used for caption of false state when inputType one of BUTTON, SLIDE_TOGGLE and CHECKBOX
		  */
	@Input() inputCaptionOff = '';
	selectedInputSource?: InputSource; // ONLY USED FOR inputType === SELECT

	formInputControl!: FormControl;

	InputType = InputTypeEnum;
	DEFAULT_THUMBNAIL_FORMATTER = (index: number) => index;

	private copyInputSource: InputSource[] = []; // storing original inputSource when filtering in inputType === MULTISELECT

	constructor(private controlContainer: ControlContainer) {}

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
		// this.formInputControl = this.controlContainer.control?.get(this.controlName) as FormControl;
		// // create copy - used when filtering
		// if (this.inputSource && this.copyInputSource.length === 0) {
		// 	this.copyInputSource = [...this.inputSource];
		// }
		// if (this.inputType === 'SLIDER') {
		// 	this.initSliderConfig();
		// }
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['controlName']?.currentValue) {
			this.formInputControl = this.controlContainer.control?.get(this.controlName) as FormControl;
		}

		if (changes?.['inputSource']?.currentValue) {
			this.copyInputSource = [...(changes?.['inputSource']?.currentValue as InputSource[])];
		}

		// when in editing we patch value into selectedInputSource m we want to find a value
		// form inputSource to display image (flag, etc.)
		if ((this.inputType === InputTypeEnum.SELECT || this.inputType === InputTypeEnum.SELECTSEARCH) && !!this.formInputControl && !!this.inputSource) {
			this.findSelectedInputSource();
		}

		// slider config changed
		if (changes?.['inputTypeSliderConfig']?.currentValue && this.inputType === 'SLIDER') {
			this.initSliderConfig();
		}

		// if inputCaptionOff is not provided, add general 'off' text
		if (this.inputType === InputTypeEnum.BUTTON && !this.inputCaptionOff) {
			this.inputCaptionOff = `${this.inputCaption} Off`;
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

	/*
	 * clear input when multi select is closed
	 **/
	closedSearchSelect(): void {
		this.inputSource = [...this.copyInputSource];
		if (this.matSearchSelectInput) {
			this.matSearchSelectInput.nativeElement.value = '';
		}
	}

	selectOption(event: MatSelectChange): void {
		if (!this.inputSource) {
			return;
		}

		this.selectedInputSource = this.inputSource.find((s) => s.value === event.source.value);
	}

	setSliderValue(event: MatSliderChange): void {
		if (!!this.inputTypeSliderConfig.inputSource) {
			// value from inputTypeSliderConfig.inputSource
			const index = event.value as number;
			const data = this.inputTypeSliderConfig.inputSource[index] as InputSource;
			this.usedFormControl.patchValue(data.value);
			this.inputTypeSliderConfig.displayValue = data.caption;
			this.inputTypeSliderConfig.value = index;
		} else {
			// normal value from MatSliderChange
			this.usedFormControl.patchValue(event.value);
			this.inputTypeSliderConfig.displayValue = event.value;
		}
	}

	private findSelectedInputSource(): void {
		this.selectedInputSource = this.inputSource?.find((s) => s.value === this.formInputControl.value);

		/*
		  even if we find selectedInputSource, still listen on change
		  used to be a bug when edited an entity, we patched a 'null' value into form as a default value,
		  but after we patched a value from the entity it did not show the correct value
		*/
		this.formInputControl.valueChanges.pipe(first((res) => !!res)).subscribe((res) => {
			this.selectedInputSource = this.inputSource?.find((s) => s.value === res);
		});
	}

	private initSliderConfig(): void {
		if (!this.inputTypeSliderConfig) {
			throw new Error(`Property inputTypeSliderConfig is required when inputType === 'SLIDER'!`);
		}
		if (!!this.inputTypeSliderConfig.inputSource) {
			// find value from inputTypeSliderConfig.inputSource
			const inputSource = this.usedFormControl.value as unknown;
			const index = this.inputTypeSliderConfig.inputSource.findIndex((s) => s.value === inputSource);
			if (index > -1) {
				this.inputTypeSliderConfig.value = index;
				this.inputTypeSliderConfig.displayValue = this.inputTypeSliderConfig.inputSource[index].caption;
			}
		} else {
			// no inputTypeSliderConfig.inputSource
			this.inputTypeSliderConfig.value = this.usedFormControl.value;
			this.inputTypeSliderConfig.displayValue = this.usedFormControl.value;
		}
	}
}
