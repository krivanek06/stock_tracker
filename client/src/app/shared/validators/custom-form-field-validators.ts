import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { CustomInputValidatorFn } from './validators.model';

export const requiredValidator: CustomInputValidatorFn = (control) => {
	const requiredValidationErrors = Validators.required(control);

	if (!requiredValidationErrors) {
		return null;
	}

	return {
		required: {
			errorText: 'This field is required',
		},
	};
};

export const emailValidator: CustomInputValidatorFn = (control) => {
	const emailValidationErrors = Validators.email(control);

	if (!emailValidationErrors) {
		return null;
	}

	return {
		email: {
			errorText: 'Invalid e-mail address',
		},
	};
};

export const phoneNumberFieldValidator: CustomInputValidatorFn = (control) => {
	if (!control.value) {
		return null;
	}

	const isMatching = !!control.value.match(/^[0-9\+*#]+$/);

	return !isMatching
		? {
				phoneNumber: {
					errorText: 'The phone number can contain only numbers and characters *, + and #',
				},
		  }
		: null;
};

export const intervalValidator = (min: number, max: number) => {
	const minValidatorFn = Validators.min(min);
	const maxValidatorFn = Validators.max(max);

	return (control: AbstractControl) => {
		const minValidationErrors = minValidatorFn(control);
		const maxValidationErrors = maxValidatorFn(control);

		if (minValidationErrors || maxValidationErrors) {
			return {
				interval: {
					errorText: `The given number should be between ${min} and ${max}`,
				},
			};
		}

		return null;
	};
};

export function maxLengthValidator(maxLength: number): ValidatorFn {
	const dmaxLengthValidatorBody: CustomInputValidatorFn = (control: FormControl) => {
		if (!control.value) {
			return null;
		}

		if ((control.value as string).length > maxLength) {
			return {
				max_length_error: {
					errorText: `Maximum length for this input is:  ${maxLength}`,
				},
			};
		}

		return null;
	};
	return dmaxLengthValidatorBody;
}
