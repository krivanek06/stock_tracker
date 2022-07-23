import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { StGroupAllData, StGroupUser, StUserPublicData } from '@core';
import { MomentService } from '@shared';
import { GroupMemberSortValuesEnum, GROUP_MEMBERS_SORT_INPUT_SOURCE } from './../../model';

@Component({
	selector: 'app-group-members-table',
	templateUrl: './group-members-table.component.html',
	styleUrls: ['./group-members-table.component.scss'],
})
export class GroupMembersTableComponent implements OnInit {
	@Output() clickedUserEmitter: EventEmitter<StGroupUser> = new EventEmitter();

	@Input() groupAllData!: StGroupAllData;
	@Input() user?: StUserPublicData | null;
	form!: FormGroup;

	GROUP_MEMBERS_SORT_INPUT_SOURCE = GROUP_MEMBERS_SORT_INPUT_SOURCE;
	GroupMemberSortValuesEnum = GroupMemberSortValuesEnum;

	showPortfolioSinceMember = false;

	constructor(private fb: FormBuilder) {}

	get groupMemberSort(): AbstractControl {
		return this.form.get('groupMemberSort') as AbstractControl;
	}

	ngOnInit() {
		this.initForm();
		this.watchFormValueChange();
	}

	clickedMember(groupUser: StGroupUser) {
		if (MomentService.isMoreThan(groupUser.portfolio.lastPortfolioSnapshot.date, 14)) {
			this.clickedUserEmitter.emit(groupUser);
		}
	}

	private initForm(): void {
		this.form = this.fb.group({
			groupMemberSort: [GROUP_MEMBERS_SORT_INPUT_SOURCE[0].value],
		});
	}

	private watchFormValueChange(): void {
		this.groupMemberSort.valueChanges.subscribe((res) => {
			if (GroupMemberSortValuesEnum.biggest_gains_since_member === res) {
				this.showPortfolioSinceMember = true;
			} else {
				this.showPortfolioSinceMember = false;
			}
		});
	}
}
