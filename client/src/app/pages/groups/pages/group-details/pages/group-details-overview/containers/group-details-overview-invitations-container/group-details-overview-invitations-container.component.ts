import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StGroupAllData, StGroupUser, StUserIndentificationDataFragment} from '@core';
import {ConfirmableWithCheckbox, DialogService} from '@shared';

@Component({
    selector: 'app-group-details-overview-invitations-container',
    templateUrl: './group-details-overview-invitations-container.component.html',
    styleUrls: ['./group-details-overview-invitations-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsOverviewInvitationsContainerComponent implements OnInit {
    @Input() groupAllData: StGroupAllData;

    constructor() {
    }

    ngOnInit() {
    }

    @ConfirmableWithCheckbox('Please confirm sending invitation for the selected user', 'Confirm')
    inviteUser(userIdentification: StUserIndentificationDataFragment) {
        console.log(userIdentification);
    }

    @ConfirmableWithCheckbox('Please confirm removing invitation for the selected user', 'Confirm')
    removeInvitation(groupUser: StGroupUser) {
        console.log(groupUser);
    }

    async receivedInvitation(groupUser: StGroupUser) {
        const message = `Do you want to accept or decline ${groupUser.nickName}'s invitation to your group ?`;
        const result = await DialogService.presentConfirmationPopOver(message, 'Accept', 'Decline');
        console.log(result)
    }
}
