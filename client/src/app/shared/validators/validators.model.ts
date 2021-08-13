import { AbstractControl } from '@angular/forms';

/**
 * Validovacia funkcia. Tento type bude skoro to iste ako angularovy ValidatorFn, ale namiesto [key: string]: any
 * tu budeme vraciat [errorName: string]: { errorText: string } | null, aby sme vedeli zadavat custom error texty.
 */
export type CustomInputValidatorFn = (
	control: AbstractControl,
	additionalData?: any
) => {
	[errorName: string]: {
		errorText: string;
	};
} | null;

export type AsyncValidatorStats = 'PENDING' | 'INVALID' | 'VALID';
