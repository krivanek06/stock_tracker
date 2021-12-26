import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import {
	QueryStGroupAllDataGroupMemberHoldingsDataGQL,
	QueryStGroupByGroupIdWithoutHoldingGQL,
	StGroupAllData,
	StGroupAllDataGroupMemberHoldingsDataFragment,
	StGroupAllDataWithoutHoldingsFragment,
	StGroupHoldings
} from '../../graphql-schema';
import { StHolding } from './../../graphql-schema/customGraphql.service';
import { UserStorageService } from './user-storage.service';

@Injectable({
	providedIn: 'root',
})
export class GroupStorageService {
	private activeGroup$: BehaviorSubject<StGroupAllDataWithoutHoldingsFragment | null> =
		new BehaviorSubject<StGroupAllDataWithoutHoldingsFragment | null>(null);
	private activeGroupMemberHoldings$: BehaviorSubject<StGroupAllDataGroupMemberHoldingsDataFragment | null> =
		new BehaviorSubject<StGroupAllDataGroupMemberHoldingsDataFragment | null>(null);
	private activeGroupId$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

	constructor(
		private userStorageService: UserStorageService,
		private queryStGroupByGroupIdWithoutHoldingGQL: QueryStGroupByGroupIdWithoutHoldingGQL,
		private queryStGroupAllDataGroupMemberHoldingsDataGQL: QueryStGroupAllDataGroupMemberHoldingsDataGQL
	) {
		this.initActiveGroupSubscription();
		this.initActiveGroupMemberHoldings();
	}

	get membersIds(): string[] {
		return this.activeGroup.groupMemberData.members.map((m) => m?.id as string);
	}

	get sentInvitationIds(): string[] {
		return this.activeGroup.groupMemberData.invitationSent.map((m) => m?.id as string);
	}

	get invitationReceivedIds(): string[] {
		return this.activeGroup.groupMemberData?.invitationReceived?.map((m) => m?.id as string) || [];
	}

	get activeGroup(): StGroupAllData {
		if (!this.activeGroup$.getValue()) {
			throw new Error('trying to access activeGroup$ in GroupStorageService, but does not exists');
		}
		return { ...this.activeGroup$.getValue(), groupMemberData: { ...this.activeGroup$.getValue()?.groupMemberData, ...this.activeGroupMemberHoldings$.getValue() } } as StGroupAllData;
	}

	get activeGroupId(): string {
		if (!this.activeGroupId$.getValue()) {
			throw new Error('trying to access activeGroupId$ in GroupStorageService, but does not exists');
		}
		return this.activeGroupId$.getValue() as string;
	}

	getActivatedGroupId(): Observable<string | null> {
		return this.activeGroupId$.asObservable();
	}

	getActiveGroup(): Observable<StGroupAllData | null> {
		return this.activeGroup$.asObservable() as Observable<StGroupAllData | null>;
	}

	getActiveGroupHoldings(): Observable<StGroupHoldings[] | undefined> {
		return this.activeGroupMemberHoldings$.asObservable().pipe(
			filter((groupData) => !!groupData?.groupMemberData?.holdings),
			map((groupData) => groupData?.groupMemberData?.holdings?.map((h) => h as StGroupHoldings))
		);
	}

	getActiveGroupHoldingsOnlyHolding(): Observable<StHolding[] | undefined> {
		return this.getActiveGroupHoldings().pipe(map((res) => res?.map((h) => h.holding)));
	}

	getActiveGroupNotNull(): Observable<StGroupAllData> {
		return this.activeGroup$.asObservable().pipe(filter((res) => !!res)) as Observable<StGroupAllData>;
	}

	setActiveGroupId(groupId: string | null): void {
		this.activeGroup$.next(null);
		this.activeGroupId$.next(groupId);
	}

	isUserOwner(): boolean {
		return this.activeGroup.owner.id === this.userStorageService.user?.id;
	}

	isUserManager(): boolean {
		return this.activeGroup.managers.map((m) => m?.id).includes(this.userStorageService.user?.id);
	}

	isUserMember(): boolean {
		return this.activeGroup.groupMemberData.members.map((m) => m?.id).includes(this.userStorageService.user?.id);
	}

	isUserInvited(): boolean {
		return this.activeGroup.groupMemberData.invitationSent.map((m) => m?.id).includes(this.userStorageService.user?.id);
	}

	isUserInvitationReceived(): boolean {
		return !!this.activeGroup?.groupMemberData?.invitationReceived?.map((m) => m?.id).includes(this.userStorageService.user?.id);
	}

	isUserOwnerObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && group.owner.id === user?.id)
		);
	}

	isUserManagerObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && !!user?.groups?.groupMember?.map((g) => g?.id).includes(group.id))
		);
	}

	isUserMemberObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && group.groupMemberData.members.map((m) => m?.id).includes(user?.id))
		);
	}

	isUserInvitedObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && !!user.groups?.groupInvitationReceived?.map((g) => g?.id).includes(group.id))
		);
	}

	isUserWatchingGroupObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && !!user.groups?.groupWatched?.map((g) => g?.id).includes(group.id))
		);
	}

	hasUserAlreadySentInvitaitonIntoGroup(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => !!group && !!user && !!user.groups?.groupInvitationSent?.map((g) => g?.id).includes(group.id))
		);
	}

	canUserWatchGroup(): Observable<boolean> {
		return combineLatest([this.isUserMemberObs(), this.isUserOwnerObs(), this.isUserWatchingGroupObs()]).pipe(
			map(([isMember, isOwner, isUserWatching]) => !isUserWatching)
		);
	}

	// return true if user is not owner / member / manager / sent invitation / received invitation - then user can request invitation into group
	canUserSendInvitationObs(): Observable<boolean> {
		return combineLatest([this.getActiveGroup(), this.userStorageService.getUser()]).pipe(
			map(([group, user]) => {
				if (!group || !user) {
					return false;
				}
				if (user.groups?.groupOwner?.map((g) => g?.id).includes(group.id)) {
					return false;
				}
				if (user.groups?.groupInvitationSent?.map((g) => g?.id).includes(group.id)) {
					return false;
				}
				if (user.groups?.groupInvitationReceived?.map((g) => g?.id).includes(group.id)) {
					return false;
				}
				if (user.groups?.groupMember?.map((g) => g?.id).includes(group.id)) {
					return false;
				}
				return true;
			})
		);
	}

	private initActiveGroupSubscription(): void {
		this.activeGroupId$
			.pipe(
				switchMap((groupid) => {
					if (!groupid) {
						return of(null);
					}
					return this.queryStGroupByGroupIdWithoutHoldingGQL
						.watch(
							{
								id: groupid,
							},
							{
								fetchPolicy: 'network-only',
							}
						)
						.valueChanges.pipe(map((res) => res.data.querySTGroupByGroupId));
				})
			)
			.subscribe((groupData) => this.activeGroup$.next(groupData as StGroupAllDataWithoutHoldingsFragment));
	}

	private initActiveGroupMemberHoldings(): void {
		this.activeGroupId$
			.pipe(
				switchMap((groupid) => {
					if (!groupid) {
						return of(null);
					}
					return this.queryStGroupAllDataGroupMemberHoldingsDataGQL
						.watch(
							{
								id: groupid,
							},
							{
								fetchPolicy: 'network-only',
							}
						)
						.valueChanges.pipe(map((res) => res.data.querySTGroupByGroupId));
				})
			)
			.subscribe((groupData) => this.activeGroupMemberHoldings$.next(groupData as StGroupAllDataGroupMemberHoldingsDataFragment));
	}
}
