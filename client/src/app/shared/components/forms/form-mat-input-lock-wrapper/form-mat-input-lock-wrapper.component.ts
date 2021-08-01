import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {InputSource, InputType} from '../../../models';
import {AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-form-mat-input-lock-wrapper',
    templateUrl: './form-mat-input-lock-wrapper.component.html',
    styleUrls: ['./form-mat-input-lock-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormMatInputLockWrapperComponent implements OnInit {
    @Input() controlName: string;
    @Input() inputType: InputType;
    @Input() inputCaption: string;
    @Input() hintText: string;
    @Input() inputSource: InputSource[] = []; // data which are displayed in Select.options

    @Input() chipMaxAllowed = 999; // only used when inputType === MULTISELECT
    @Input() chipSelectedValues: InputSource[] = []; // used display selected values when inputType === CHIPSELECT

    @Input() sliderMaxValue: number;
    @Input() sliderMinValue: number;
    @Input() sliderStepValue: number;
    @Input() sliderLabelShowDollarSign: boolean = false;

    form: FormGroup;

    constructor(private controlContainer: ControlContainer,
                private fb: FormBuilder) {

    }

    get disabled(): AbstractControl {
        return this.form.get('disabled') as AbstractControl;
    }

    ngOnInit() {
        const formInputControl = this.controlContainer.control.get(this.controlName) as FormControl;
        this.form = this.fb.group({
            disabled: [formInputControl.disabled]
        });

        this.disabled.valueChanges.subscribe(isDisabled => {
            if (isDisabled) {
                formInputControl.disable();
            } else {
                formInputControl.enable();
            }
        });
    }

}
