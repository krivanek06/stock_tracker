import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GraphqlUserService, StUserIdentificationDataFragment } from '@core';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-user-account-search-form',
	templateUrl: './user-account-search-form.component.html',
	styleUrls: ['./user-account-search-form.component.scss'],
})
export class UserAccountSearchFormComponent implements OnInit {
	@Output() searchedUsersEmitter: EventEmitter<StUserIdentificationDataFragment[]> = new EventEmitter();
	form!: FormGroup;

	constructor(private fb: FormBuilder, private graphqlUserService: GraphqlUserService) {}

	get username(): AbstractControl {
		return this.form.get('username') as AbstractControl;
	}

	ngOnInit(): void {
		this.form = this.fb.group({
			username: [],
		});
		this.watchForm();
	}

	private watchForm() {
		this.username.valueChanges
			.pipe(
				debounceTime(500),
				distinctUntilChanged(),
				switchMap((res: string) => {
					if (res.length <= 2) {
						return of(null);
					}
					return this.graphqlUserService.queryUserIdentificationByUsername(res);
				})
			)
			.subscribe((users) => this.searchedUsersEmitter.emit(users || []));
	}
}
