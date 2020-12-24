import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GroupMemberPosition} from '../../model/group.model';
import {NavParams, PopoverController} from '@ionic/angular';
import {User_Status_In_Group} from '../../../../api/customGraphql.service';
import {
    GROUP_PROMOTE_MANAGER,
    GROUP_PROMOTE_MEMBER,
    GROUP_PROMOTE_RECEIVED_INVITATION,
    GROUP_PROMOTE_SENT_INVITATION
} from '../../model/group.constants';

@Component({
    selector: 'app-group-member-position-change-pop-over',
    templateUrl: './group-member-position-change-pop-over.component.html',
    styleUrls: ['./group-member-position-change-pop-over.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupMemberPositionChangePopOverComponent implements OnInit {
    userStatus: string;
    userName: string;
    groupMemberPositions: GroupMemberPosition[] = [];

    constructor(private popoverController: PopoverController,
                private navParams: NavParams) {
        this.userName = this.navParams.get('userName');
        this.userStatus = this.navParams.get('userStatus');
    }

    ngOnInit() {
        this.initGroupMemberPositions();
    }

    dismissModal() {
        this.popoverController.dismiss();
    }

    selectPosition(groupMemberPosition: GroupMemberPosition) {
        this.popoverController.dismiss({groupMemberPosition});
    }

    private initGroupMemberPositions() {
        if (this.userStatus === User_Status_In_Group.InvitationReceived) {
            this.groupMemberPositions = GROUP_PROMOTE_RECEIVED_INVITATION;
        } else if (this.userStatus === User_Status_In_Group.InvitationSent) {
            this.groupMemberPositions = GROUP_PROMOTE_SENT_INVITATION;
        } else if (this.userStatus === User_Status_In_Group.Member) {
            this.groupMemberPositions = GROUP_PROMOTE_MEMBER;
        } else if (this.userStatus === User_Status_In_Group.Manager) {
            this.groupMemberPositions = GROUP_PROMOTE_MANAGER;
        }
    }
}
