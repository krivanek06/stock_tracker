import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserStorageService, StGroupAllData} from '@core';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GroupStorageService {
    private activeGroup$: BehaviorSubject<StGroupAllData> = new BehaviorSubject<StGroupAllData>(null);

    constructor(private userStorageService: UserStorageService) {
    }

    getActiveGroup(): Observable<StGroupAllData> {
        return this.activeGroup$.asObservable();
    }

    get activeGroup(): StGroupAllData {
        if (!this.activeGroup$.getValue()) {
            throw new Error('trying to access activeGroup in GroupUserRolesService, but does not exists');
        }
        return this.activeGroup$.getValue();
    }

    set activeGroup(group: StGroupAllData) {
        this.activeGroup$.next(group);
    }

    isUserOwner(): boolean {
        return this.activeGroup.owner.user.uid === this.userStorageService.user.uid;
    }

    isUserManager(): boolean {
        return this.activeGroup.managers.map(m => m.user.uid).includes(this.userStorageService.user.uid);
    }

    isUserMember(): boolean {
        return this.activeGroup.members.map(m => m.user.uid).includes(this.userStorageService.user.uid);
    }

    isUserInvited(): boolean {
        return this.activeGroup.invitationSent.map(m => m.user.uid).includes(this.userStorageService.user.uid);
    }

    isUserInvitationReceived(): boolean {
        return this.activeGroup.invitationReceived.map(m => m.user.uid).includes(this.userStorageService.user.uid);
    }

    isUserOwnerObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.owner.user.uid === this.userStorageService.user.uid));
    }

    isUserManagerObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.managers.map(m => m.user.uid).includes(this.userStorageService.user.uid)));
    }

    isUserMemberObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.members.map(m => m.user.uid).includes(this.userStorageService.user.uid)));
    }

    isUserInvitedObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.invitationSent.map(m => m.user.uid).includes(this.userStorageService.user.uid)));
    }

    isUserInvitationReceivedObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.invitationReceived.map(m => m.user.uid).includes(this.userStorageService.user.uid)));
    }

}
