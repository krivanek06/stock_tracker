import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-user-status-roles',
	templateUrl: './user-status-roles.component.html',
	styleUrls: ['./user-status-roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatusRolesComponent implements OnInit, OnChanges {
	@Output() addRoleEmitter: EventEmitter<string> = new EventEmitter<string>();
	@Output() removeRoleEmitter: EventEmitter<string> = new EventEmitter<string>();
	@Input() userRoles: (string | null | undefined)[] = [];
	existingRoles: string[] = ['ROLE_ADMIN', 'ROLE_GROUP_CREATE'];

	private allRoles = ['ROLE_ADMIN', 'ROLE_GROUP_CREATE'];

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.userRoles.currentValue) {
			this.filterExistingRoles();
		}
	}

	ngOnInit(): void {
		this.filterExistingRoles();
	}

	addRole(role: string | null | undefined): void {
		if (!role) {
			return;
		}
		this.addRoleEmitter.emit(role);
	}

	removeRole(role: string | null | undefined): void {
		if (!role) {
			return;
		}
		this.removeRoleEmitter.emit(role);
	}

	private filterExistingRoles(): void {
		this.existingRoles = this.allRoles.filter((r) => !this.userRoles.includes(r));
	}
}
