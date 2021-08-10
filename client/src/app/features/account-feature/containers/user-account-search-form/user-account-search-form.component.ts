import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GraphqlQueryService, StUserIndentificationDataFragment } from '@core';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-user-account-search-form',
	templateUrl: './user-account-search-form.component.html',
	styleUrls: ['./user-account-search-form.component.scss'],
})
export class UserAccountSearchFormComponent implements OnInit {
	@Output() searchedUsersEmitter: EventEmitter<StUserIndentificationDataFragment[]> = new EventEmitter();
	form: FormGroup;

	constructor(private fb: FormBuilder, private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			username: [],
		});
		this.watchForm();
	}

	private watchForm() {
		this.form
			.get('username')
			.valueChanges.pipe(
				debounceTime(500),
				distinctUntilChanged(),
				switchMap((res: string) => {
					if (res.length <= 2) {
						return of(null);
					}
					return this.graphqlQueryService.queryUserPublicDataByUsername(res);
				})
			)
			.subscribe((users) => this.searchedUsersEmitter.emit(users));
	}
}
