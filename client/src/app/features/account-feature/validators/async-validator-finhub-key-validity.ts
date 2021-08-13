import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { ValidatorFinhubKeyValidityGQL } from '@core';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AsyncValidatorFinhubKeyValidity {
	constructor(private ValidatorFinhubKeyValidityGQL: ValidatorFinhubKeyValidityGQL) {}

	createValidator(): AsyncValidatorFn {
		return (control: AbstractControl): Observable<ValidationErrors | null> => {
			return timer(1200).pipe(
				switchMap(() =>
					this.ValidatorFinhubKeyValidityGQL.fetch({
						finuhbKey: control.value,
					}).pipe(
						map((res) => {
							const isValid = res.data.validatorFinhubKeyValidity;
							if (isValid) {
								return null;
							}

							return {
								incorrect_finhub_key: {
									errorText: `Your finhub API key is incorrect`,
								},
							};
						})
					)
				)
			);
		};
	}
}
