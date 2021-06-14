import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StGroupAllData} from '../../graphql-schema';
import {UserStorageService} from './user-storage.service';

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
        return this.activeGroup.owner.id === this.userStorageService.user.id;
    }

    isUserManager(): boolean {
        return this.activeGroup.managers.map(m => m.id).includes(this.userStorageService.user.id);
    }

    isUserMember(): boolean {
        return this.activeGroup.members.map(m => m.id).includes(this.userStorageService.user.id);
    }

    isUserInvited(): boolean {
        return this.activeGroup.invitationSent.map(m => m.id).includes(this.userStorageService.user.id);
    }

    isUserInvitationReceived(): boolean {
        return this.activeGroup.invitationReceived.map(m => m.id).includes(this.userStorageService.user.id);
    }

    isUserOwnerObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(
            map(g => g.owner.id === this.userStorageService.user.id)
        );
    }

    isUserManagerObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(
            map(g => g.managers.map(m => m.id).includes(this.userStorageService.user.id))
        );
    }

    isUserMemberObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(
            map(g => g.members.map(m => m.id).includes(this.userStorageService.user.id))
        );
    }

    isUserInvitedObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(
            map(g => g.invitationSent.map(m => m.id).includes(this.userStorageService.user.id))
        );
    }

    isUserInvitationReceivedObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(
            map(g => g.invitationReceived.map(m => m.id).includes(this.userStorageService.user.id))
        );
    }

}
