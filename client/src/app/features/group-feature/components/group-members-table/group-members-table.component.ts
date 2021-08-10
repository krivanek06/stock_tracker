import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { StGroupAllData, StGroupUser, StUserPublicData } from './../../../../core/graphql-schema/customGraphql.service';
import { GROUP_MEMBERS_SORT_INPUT_SOURCE } from './../../model';

@Component({
	selector: 'app-group-members-table',
	templateUrl: './group-members-table.component.html',
	styleUrls: ['./group-members-table.component.scss'],
})
export class GroupMembersTableComponent implements OnInit {
	@Output() clickedUserEmitter: EventEmitter<StGroupUser> = new EventEmitter();

	@Input() groupAllData: StGroupAllData;
	@Input() user: StUserPublicData;
	form: FormGroup;

	GROUP_MEMBERS_SORT_INPUT_SOURCE = GROUP_MEMBERS_SORT_INPUT_SOURCE;

	constructor(private fb: FormBuilder) {}

	get groupMemberSort(): AbstractControl {
		return this.form.get('groupMemberSort');
	}

	ngOnInit() {
		this.form = this.fb.group({
			groupMemberSort: [],
		});
	}

	clickedMember(groupUser: StGroupUser) {
		this.clickedUserEmitter.emit(groupUser);
	}
}
