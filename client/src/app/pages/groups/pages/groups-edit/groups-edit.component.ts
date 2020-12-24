import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {StGroupAllData, StUserPartialInformation, User_Status_In_Group} from '../../../../api/customGraphql.service';
import {GroupService} from '../../../../features/group-feature/services/group.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploaderComponent} from '../../../../shared/components/image-manipulation/uploader/uploader.component';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {cloneDeep} from 'lodash';
import {UploadedFile} from '../../../../shared/models/sharedModel';
import {PopoverController} from '@ionic/angular';
import {GROUPS_PAGES} from '../../model/groups.enum';
import {GroupMemberPositionChangePopOverComponent} from '../../../../features/group-feature/entry-components/group-member-position-change-pop-over/group-member-position-change-pop-over.component';
import {GroupMemberPosition} from '../../../../features/group-feature/model/group.model';
import {GroupMemberPositionChangeEnum} from '../../../../features/group-feature/model/group.enum';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';

@Component({
    selector: 'app-groups-edit',
    templateUrl: './groups-edit.component.html',
    styleUrls: ['./groups-edit.component.scss']
})
export class GroupsEditComponent extends ComponentBase implements OnInit {
    @ViewChild('uploader') uploader: UploaderComponent;
    group: StGroupAllData;
    form: FormGroup;

    User_Status_In_Group = User_Status_In_Group;

    constructor(private activatedRoute: ActivatedRoute,
                private groupService: GroupService,
                private route: Router,
                private ionicDialogService: IonicDialogService,
                private popoverController: PopoverController,
                private fb: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.initGroup();
    }

    async submit() {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Do you really want to make changes in group: ${this.group.name} ?`);
        if (confirmation) {
            this.groupService.editGroup(this.form.getRawValue(), this.group);
        }
    }

    cancelEdit() {
        this.route.navigate([`menu/groups/${GROUPS_PAGES.READ}/${this.group.groupId}`]);
    }

    uploadedGroupImage(files: UploadedFile[]) {
        this.form.get('imagePath').patchValue(files[0].path);
        this.form.get('imageUrl').patchValue(files[0].downloadURL);
    }


    sendInvitation(invitedUser: StUserPartialInformation) {
        // do not send invitation twice
        const invitedUIDs = this.group.invitationSent.map(u => u.user.uid);
        const memberUIDs = this.group.invitationSent.map(u => u.user.uid);
        if (invitedUIDs.includes(invitedUser.uid) || memberUIDs.includes(invitedUser.uid)) {
            return;
        }
        this.group.invitationSent = [...this.group.invitationSent, {user: invitedUser, sinceDate: undefined}];
    }

    removeUserFromSection(selectedUser: StUserPartialInformation, status: User_Status_In_Group) {
        if (status === User_Status_In_Group.InvitationSent) {
            this.group.invitationSent = this.group.invitationSent.filter(groupUser => groupUser.user.uid !== selectedUser.uid);
        } else if (status === User_Status_In_Group.InvitationReceived) {
            this.group.invitationSent = this.group.invitationReceived.filter(groupUser => groupUser.user.uid !== selectedUser.uid);
        } else if (status === User_Status_In_Group.Member) {
            this.group.invitationSent = this.group.members.filter(groupUser => groupUser.user.uid !== selectedUser.uid);
        } else if (status === User_Status_In_Group.Manager) {
            this.group.invitationSent = this.group.managers.filter(groupUser => groupUser.user.uid !== selectedUser.uid);
        }
    }

    async changeGroupMemberSection(user: StUserPartialInformation, status: User_Status_In_Group) {
        const result = await this.showGroupMemberModification(user, status);
        if (!result) {
            return;
        }
        if (result.values === GroupMemberPositionChangeEnum.REMOVE_SENT_INVITATION) {
            this.removeUserFromSection(user, User_Status_In_Group.InvitationSent);
        } else if (result.values === GroupMemberPositionChangeEnum.REMOVE_RECEIVED_INVITATION) {
            this.removeUserFromSection(user, User_Status_In_Group.InvitationReceived);
        } else if (result.values === GroupMemberPositionChangeEnum.REMOVE_MEMBER) {
            this.removeUserFromSection(user, User_Status_In_Group.Member);
        } else if (result.values === GroupMemberPositionChangeEnum.REMOVE_MANAGER) {
            this.removeUserFromSection(user, User_Status_In_Group.Manager);
        } else if (result.values === GroupMemberPositionChangeEnum.ACCEPT_RECEIVED_INVITATION) {
            this.removeUserFromSection(user, User_Status_In_Group.InvitationReceived);
            this.group.members = [...this.group.members, {user, sinceDate: new Date().toDateString()}];
        } else if (result.values === GroupMemberPositionChangeEnum.SET_AS_MANAGER) {
            this.group.managers = [...this.group.managers, {user, sinceDate: new Date().toDateString()}];
        } else if (result.values === GroupMemberPositionChangeEnum.SET_AS_OWNER) {
            this.group.owner = {user, sinceDate: new Date().toDateString()};
        }
    }

    private async showGroupMemberModification(user: StUserPartialInformation, status: User_Status_In_Group): Promise<GroupMemberPosition> {
        const popover = await this.popoverController.create({
            component: GroupMemberPositionChangePopOverComponent,
            cssClass: 'custom-popover',
            translucent: true,
            componentProps: {
                userStatus: status,
                userName: user.nickName
            }
        });

        await popover.present();
        const res = await popover.onDidDismiss();
        return res.data?.groupMemberPosition as GroupMemberPosition;
    }

    private initGroup() {
        this.activatedRoute.params.pipe(
            filter(x => x.id),
            switchMap(x => this.groupService.querySTGroupAllDataByGroupId(x.id)),
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.group = cloneDeep(res);
            this.initForm();
        });
    }

    private initForm() {
        this.form = this.fb.group({
            name: [this.group.name, [Validators.required]],
            description: [this.group.description, [Validators.required]],
            imagePath: [this.group.imagePath],
            imageUrl: [this.group.imageUrl]
        });
    }


}
