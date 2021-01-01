import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StGroupAllData} from '../../../api/customGraphql.service';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GroupUserRolesService {
    private activeGroup$: BehaviorSubject<StGroupAllData> = new BehaviorSubject<StGroupAllData>(null);

    constructor(private authService: AuthFeatureService) {
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
        return this.activeGroup.owner.user.uid === this.authService.user.uid;
    }

    isUserManager(): boolean {
        return this.activeGroup.managers.map(m => m.user.uid).includes(this.authService.user.uid);
    }

    isUserMember(): boolean {
        return this.activeGroup.members.map(m => m.user.uid).includes(this.authService.user.uid);
    }

    isUserInvited(): boolean {
        return this.activeGroup.invitationSent.map(m => m.user.uid).includes(this.authService.user.uid);
    }

    isUserInvitationReceived(): boolean {
        return this.activeGroup.invitationReceived.map(m => m.user.uid).includes(this.authService.user.uid);
    }

    isUserOwnerObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.owner.user.uid === this.authService.user.uid));
    }

    isUserManagerObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.managers.map(m => m.user.uid).includes(this.authService.user.uid)));
    }

    isUserMemberObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.members.map(m => m.user.uid).includes(this.authService.user.uid)));
    }

    isUserInvitedObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.invitationSent.map(m => m.user.uid).includes(this.authService.user.uid)));
    }

    isUserInvitationReceivedObs(): Observable<boolean> {
        return this.getActiveGroup().pipe(map(g => g.invitationReceived.map(m => m.user.uid).includes(this.authService.user.uid)));
    }

}
