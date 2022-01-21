import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphqlGroupService, StGroupIdentificationDataFragment } from '@core';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-search-group-page',
	templateUrl: './search-group-page.component.html',
	styleUrls: ['./search-group-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchGroupPageComponent implements OnInit {
	searchedGroups$!: Observable<StGroupIdentificationDataFragment[] | null>;
	form!: FormGroup;

	constructor(private fb: FormBuilder, private graphqlGroupService: GraphqlGroupService, private router: Router) {}

	get groupName(): AbstractControl {
		return this.form.get('groupName') as AbstractControl;
	}

	ngOnInit() {
		this.initForm();
		this.watchForm();
	}

	visit(group: StGroupIdentificationDataFragment) {
		this.router.navigateByUrl(`/menu/groups/${group.id}`);
	}

	private initForm() {
		this.form = this.fb.group({
			groupName: [null],
		});
	}

	private watchForm() {
		this.searchedGroups$ = this.groupName.valueChanges.pipe(
			debounceTime(300),
			switchMap((res) => {
				if (!res || res.length <= 1) {
					return of(null);
				}
				return this.graphqlGroupService.queryGroupIdentificationDataByGroupName(res);
			})
		);
	}
}
