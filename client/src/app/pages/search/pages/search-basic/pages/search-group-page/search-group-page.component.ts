import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphqlGroupService, GroupStorageService, StGroupIdentificationDataFragment } from '@core';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-search-group-page',
	templateUrl: './search-group-page.component.html',
	styleUrls: ['./search-group-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchGroupPageComponent implements OnInit, OnDestroy {
	searchedGroups$: Observable<StGroupIdentificationDataFragment[]>;
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private graphqlGroupService: GraphqlGroupService,
		private groupStorageService: GroupStorageService,
		private router: Router
	) {}
	ngOnDestroy(): void {}

	ngOnInit() {
		this.initForm();
		this.watchForm();
	}

	visit(group: StGroupIdentificationDataFragment) {
		this.groupStorageService.setActiveGroupId(group.id);
		this.router.navigateByUrl(`/menu/groups`);
	}

	private initForm() {
		this.form = this.fb.group({
			groupName: [null],
		});
	}

	private watchForm() {
		this.searchedGroups$ = this.form.get('groupName').valueChanges.pipe(
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
