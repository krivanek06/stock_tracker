import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlContainer, FormControl} from '@angular/forms';
import {InputSource, InputType} from '../../../models';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {stFormatLargeNumber} from '../../../utils';

@Component({
    selector: 'app-form-mat-input-wrapper',
    templateUrl: './form-mat-input-wrapper.component.html',
    styleUrls: ['./form-mat-input-wrapper.component.scss'],
})
export class FormMatInputWrapperComponent implements OnInit {
    @Input() controlName: string;
    @Input() inputType: InputType;
    @Input() inputCaption: string;
    @Input() disabled: boolean;
    @Input() hintText: string;
    @Input() inputSource: InputSource[] = []; // data which are displayed in Select.options

    @Input() chipMaxAllowed = 999; // only used when inputType === MULTISELECT
    @Input() chipSelectedValues: InputSource[] = []; // used display selected values when inputType === CHIPSELECT

    @Input() sliderMaxValue: number;
    @Input() sliderMinValue: number;
    @Input() sliderStepValue: number;
    @Input() sliderLabelShowDollarSign: boolean = false;

    @ViewChild('chipSearchInput') chipSearchInput: ElementRef<HTMLInputElement>; // needed to remove value when picked chip on inputType === CHIPSELECT

    formInputControl: FormControl;
    /*
     * used when inputType === CHIPSELECT
     * */
    private copyInputSource: InputSource[] = []; // storing original inputSource when filtering in inputType === MULTISELECT

    constructor(private controlContainer: ControlContainer) {
    }

    get chipInputControl(): FormControl {
        return this.formInputControl.get('trueFormInput') as FormControl;
    }

    get chipSearchInputControl(): FormControl {
        return this.formInputControl.get('searchInput') as FormControl;
    }

    get usedFormControl(): FormControl {
        if (this.inputType === 'CHIPSELECT') {
            return this.chipInputControl;
        }
        return this.formInputControl;
    }

    ngOnInit(): void {
        this.formInputControl = this.controlContainer.control.get(this.controlName) as FormControl;

        if (this.inputType === 'CHIPSELECT') {
            this.controlChipSelect();
        }
    }

    /*
     * used when inputType === MULTISELECT to filter data
     * */
    multiSelectKeyPress(value: string) {
        if (this.copyInputSource.length === 0) {
            this.copyInputSource = [...this.inputSource];
        }
        this.inputSource = this.copyInputSource.filter((inputSource) => inputSource.caption.toString().toLowerCase().startsWith(value.toLowerCase()));
    }

    chipRemoved(chipIndex: number) {
        const values = this.chipInputControl.value as string[];
        this.chipInputControl.patchValue([...values.filter((_, index) => index !== chipIndex)]);
        this.chipSelectedValues.splice(chipIndex, 1);
        this.chipInputControl.markAsDirty();
    }

    chipSuggestionSelected(event: MatAutocompleteSelectedEvent) {
        if (!!this.chipMaxAllowed && this.chipSelectedValues.length === this.chipMaxAllowed) {
            return;
        }

        this.chipSelectedValues = [...this.chipSelectedValues, this.inputSource.find((s) => s.value === event.option.value)];
        this.chipInputControl.patchValue([...this.chipInputControl.value, event.option.value]);
        this.chipSearchInputControl.setValue(null);
        this.chipSearchInput.nativeElement.value = null;
    }

    sliderFormatLabel(value: number) {
        return stFormatLargeNumber(value, null, this.sliderLabelShowDollarSign);
    }

    private controlChipSelect(): void {
        /**
         * CHIPSELECT required format
         * {
         *   searchInput: [value, [validators]],
         *   trueFormInput: [[...values], [validators]]
         * }
         *
         * searchInput - text field for autocompletion
         * trueFormInput - array of values which are send into API
         */
        if (!this.chipInputControl || !this.chipSearchInputControl) {
            throw new Error(`The provided formGroup should have 'searchInput' and 'trueFormInput' controls`);
        }

        if (!Array.isArray(this.chipInputControl.value)) {
            throw new Error(`The 'trueFormInput' control in the provided formGroup should be an array.`);
        }
    }
}
