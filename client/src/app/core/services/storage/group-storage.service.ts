import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { StGroupAllData } from '../../graphql-schema';
import { QueryStGroupByGroupIdGQL } from './../../graphql-schema';
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

	get membersIds(): string[] {
		return this.activeGroup.groupMemberData.members.map((m) => m.id);
	}

	get sentInvitationIds(): string[] {
		return this.activeGroup.groupMemberData.invitationSent.map((m) => m.id);
	}

	get invitationReceivedIds(): string[] {
		return this.activeGroup.groupMemberData.invitationReceived.map((m) => m.id);
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

	getActiveGroupNotNull(): Observable<StGroupAllData> {
		return this.activeGroup$.asObservable().pipe(filter((res) => !!res));
	}

	setActiveGroupId(groupId: string): void {
		this.activeGroupId$.next(groupId);
	}

	isUserOwner(): boolean {
		return this.activeGroup.owner.id === this.userStorageService.user?.id;
	}

	isUserManager(): boolean {
		return this.activeGroup.managers.map((m) => m.id).includes(this.userStorageService.user?.id);
	}

	isUserMember(): boolean {
		return this.activeGroup.groupMemberData.members.map((m) => m.id).includes(this.userStorageService.user?.id);
	}

	isUserInvited(): boolean {
		return this.activeGroup.groupMemberData.invitationSent.map((m) => m.id).includes(this.userStorageService.user?.id);
	}

	isUserInvitationReceived(): boolean {
		return this.activeGroup.groupMemberData.invitationReceived.map((m) => m.id).includes(this.userStorageService.user?.id);
	}

	isUserOwnerObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && group.owner.id === user?.id)
		);
	}

	isUserManagerObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && user.groups.groupMember.map((g) => g.id).includes(group.id))
		);
	}

	isUserMemberObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && group.groupMemberData.members.map((m) => m.id).includes(user?.id))
		);
	}

	isUserInvitedObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && user.groups.groupInvitationReceived.map((g) => g.id).includes(group.id))
		);
	}

	hasUserAlreadySentInvitaitonIntoGroup(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && user.groups.groupInvitationSent.map((g) => g.id).includes(group.id))
		);
	}

	// return true if user is not owner / member / manager / sent invitation / received invitation - then user can request invitation into group
	canUserSendInvitationObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => {
				if (!group || !user) {
					return false;
				}
				if (user.groups.groupOwner.map((g) => g.id).includes(group.id)) {
					return false;
				}
				if (user.groups.groupInvitationSent.map((g) => g.id).includes(group.id)) {
					return false;
				}
				if (user.groups.groupInvitationReceived.map((g) => g.id).includes(group.id)) {
					return false;
				}
				if (user.groups.groupMember.map((g) => g.id).includes(group.id)) {
					return false;
				}
				return true;
			})
		);
	}

	private initGroupSubscription(): void {
		this.activeGroupId$
			.pipe(
				switchMap((groupid) => {
					if (!groupid) {
						return of(null);
					}
					return this.queryStGroupByGroupIdGQL
						.watch({
							id: groupid,
						})
						.valueChanges.pipe(map((res) => res.data.querySTGroupByGroupId));
				})
			)
			.subscribe((groupData) => this.activeGroup$.next(groupData));
	}
}
