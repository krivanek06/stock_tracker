import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StGroupAllData } from '../../graphql-schema';
import { QueryStGroupByGroupIdGQL } from './../../graphql-schema/customGraphql.service';
import { UserStorageService } from './user-storage.service';

@Injectable({
	providedIn: 'root',
})
export class GroupStorageService {
	private activeGroup$: BehaviorSubject<StGroupAllData> = new BehaviorSubject<StGroupAllData>(null);
	private activeGroupId$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

	constructor(private userStorageService: UserStorageService, private queryStGroupByGroupIdGQL: QueryStGroupByGroupIdGQL) {
		this.initGroupSubscription();
	}

	get activeGroup(): StGroupAllData {
		if (!this.activeGroup$.getValue()) {
			throw new Error('trying to access activeGroup$ in GroupStorageService, but does not exists');
		}
		return this.activeGroup$.getValue();
	}

	get activeGroupId(): string {
		if (!this.activeGroupId$.getValue()) {
			throw new Error('trying to access activeGroupId$ in GroupStorageService, but does not exists');
		}
		return this.activeGroupId$.getValue();
	}

	getActiveGroup(): Observable<StGroupAllData> {
		return this.activeGroup$.asObservable();
	}

	setActiveGroupId(groupId: string): void {
		this.activeGroupId$.next(groupId);
	}

	isUserOwner(): boolean {
		return this.activeGroup.owner.id === this.userStorageService.user.id;
	}

	isUserManager(): boolean {
		return this.activeGroup.managers.map((m) => m.id).includes(this.userStorageService.user.id);
	}

	isUserMember(): boolean {
		return this.activeGroup.groupMemberData.members.map((m) => m.id).includes(this.userStorageService.user.id);
	}

	isUserInvited(): boolean {
		return this.activeGroup.groupMemberData.invitationSent.map((m) => m.id).includes(this.userStorageService.user.id);
	}

	isUserInvitationReceived(): boolean {
		return this.activeGroup.groupMemberData.invitationReceived.map((m) => m.id).includes(this.userStorageService.user.id);
	}

	isUserOwnerObs(): Observable<boolean> {
		return this.getActiveGroup().pipe(map((g) => g.owner.id === this.userStorageService.user.id));
	}

	isUserManagerObs(): Observable<boolean> {
		return this.getActiveGroup().pipe(map((g) => g.managers.map((m) => m.id).includes(this.userStorageService.user.id)));
	}

	isUserMemberObs(): Observable<boolean> {
		return this.getActiveGroup().pipe(map((g) => g.groupMemberData.members.map((m) => m.id).includes(this.userStorageService.user.id)));
	}

	isUserInvitedObs(): Observable<boolean> {
		return this.getActiveGroup().pipe(map((g) => g.groupMemberData.invitationSent.map((m) => m.id).includes(this.userStorageService.user.id)));
	}

	isUserInvitationReceivedObs(): Observable<boolean> {
		return this.getActiveGroup().pipe(map((g) => g.groupMemberData.invitationReceived.map((m) => m.id).includes(this.userStorageService.user.id)));
	}

	private initGroupSubscription(): void {
		this.activeGroupId$
			.pipe(
				switchMap((groupid) => {
					if (!groupid) {
						return of(null);
					}
					return this.queryStGroupByGroupIdGQL
						.fetch({
							id: groupid,
						})
						.pipe(map((res) => res.data.querySTGroupByGroupId));
				})
			)
			.subscribe((groupData) => this.activeGroup$.next(groupData));
	}
}
