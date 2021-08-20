import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GraphqlQueryService, StUserIndentificationDataFragment } from '@core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-user-account-search',
	templateUrl: './user-account-search.component.html',
	styleUrls: ['./user-account-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountSearchComponent implements OnInit {
	@Output() clickedUserEmitter: EventEmitter<StUserIndentificationDataFragment> = new EventEmitter<StUserIndentificationDataFragment>();

	@Input() fullWith = false;
	searchedUsers$: Observable<StUserIndentificationDataFragment[]>;
	form: FormGroup;

	constructor(private fb: FormBuilder, private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit() {
		this.initForm();
		this.watchForm();
	}

	clickedUser(user: StUserIndentificationDataFragment) {
		this.clickedUserEmitter.emit(user);
	}

	private initForm() {
		this.form = this.fb.group({
			username: [null],
		});
	}

	private watchForm() {
		this.searchedUsers$ = this.form.get('username').valueChanges.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			switchMap((res) => {
				if (res.length <= 2) {
					return of(null);
				}
				return this.graphqlQueryService.queryUserIdentificationByUsername(res);
			})
		);
	}
}
