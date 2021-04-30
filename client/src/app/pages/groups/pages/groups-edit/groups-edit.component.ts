import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {
    componentDestroyed,
    GroupStorageService,
    StGroupAllData,
    StGroupUser,
    StUserPublicData,
    User_Status_In_Group,
    UserStorageService
} from '@core';
import {
    convertStGroupAllDataToStGroupPartialData,
    createNewStGroupUser,
    GroupFeatureFacadeService,
    GroupMemberPosition,
    GroupMemberPositionChangeEnum,
    GroupMemberPositionChangePopOverComponent
} from '@group-feature';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadedFile, UploaderComponent} from '@shared';
import {cloneDeep} from 'lodash';
import {PopoverController} from '@ionic/angular';
import {GROUPS_PAGES} from '../../model/groups.enum';

@Component({
    selector: 'app-groups-edit',
    templateUrl: './groups-edit.component.html',
    styleUrls: ['./groups-edit.component.scss']
})
export class GroupsEditComponent implements OnInit, OnDestroy {
    @ViewChild('uploader') uploader: UploaderComponent;
    group: StGroupAllData;
    form: FormGroup;
    isUserOwner: boolean;
    User_Status_In_Group = User_Status_In_Group;

    constructor(private activatedRoute: ActivatedRoute,
                private groupService: GroupFeatureFacadeService,
                private userStorageService: UserStorageService,
                private route: Router,
                private groupUserRolesService: GroupStorageService,
                private popoverController: PopoverController,
                private fb: FormBuilder) {
    }

    ngOnDestroy(): void {

    }

    ngOnInit() {
        this.initGroup();
    }

    async submit() {
        this.groupService.editGroup(this.form.getRawValue(), this.group);
    }

    cancelEdit() {
        this.route.navigate([`menu/groups/${GROUPS_PAGES.READ}/${this.group.groupId}`]);
    }

    deleteGroup() {
        const groupPartialData = convertStGroupAllDataToStGroupPartialData(this.group);
        this.groupService.deleteGroup(groupPartialData);
    }

    uploadedGroupImage(files: UploadedFile[]) {
        this.form.get('imagePath').patchValue(files[0].path);
        this.form.get('imageUrl').patchValue(files[0].downloadURL);
    }


    sendInvitation(invitedUser: StUserPublicData) {
        // do not send invitation twice
        const invitedUIDs = this.group.invitationSent.map(u => u.useridentification.uid);
        const memberUIDs = this.group.invitationSent.map(u => u.useridentification.uid);
        if (invitedUIDs.includes(invitedUser.uid) || memberUIDs.includes(invitedUser.uid)) {
            return;
        }
        this.group.invitationSent = [...this.group.invitationSent, createNewStGroupUser(invitedUser)];
    }

    removeUserFromSection(selectedUser: StGroupUser, status: User_Status_In_Group) {
        if (!this.isUserOwner && status === User_Status_In_Group.Manager) {
            return;
        }
        if (status === User_Status_In_Group.InvitationSent) {
            this.group.invitationSent = this.group.invitationSent.filter(groupUser => groupUser.useridentification.uid !== selectedUser.useridentification.uid);
        } else if (status === User_Status_In_Group.InvitationReceived) {
            this.group.invitationReceived = this.group.invitationReceived.filter(groupUser => groupUser.useridentification.uid !== selectedUser.useridentification.uid);
        } else if (status === User_Status_In_Group.Member) {
            this.group.members = this.group.members.filter(groupUser => groupUser.useridentification.uid !== selectedUser.useridentification.uid);
        } else if (status === User_Status_In_Group.Manager) {
            this.group.managers = this.group.managers.filter(groupUser => groupUser.useridentification.uid !== selectedUser.useridentification.uid);
        }
    }

    async changeGroupMemberSection(user: StGroupUser, status: User_Status_In_Group) {
        if (!this.isUserOwner && status === User_Status_In_Group.Manager) {
            return;
        }
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
            this.group.members = [...this.group.members, user];
        } else if (result.values === GroupMemberPositionChangeEnum.SET_AS_MANAGER) {
            this.group.managers = [...this.group.managers, user];
        } else if (result.values === GroupMemberPositionChangeEnum.SET_AS_OWNER) {
            this.group.owner = user;
        }
    }

    private async showGroupMemberModification(user: StGroupUser, status: User_Status_In_Group): Promise<GroupMemberPosition> {
        const popover = await this.popoverController.create({
            component: GroupMemberPositionChangePopOverComponent,
            cssClass: 'custom-popover',
            translucent: true,
            componentProps: {
                userStatus: status,
                userName: user.useridentification.nickName
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
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            this.group = cloneDeep(res);
            this.groupUserRolesService.activeGroup = res;
            this.isUserOwner = this.groupUserRolesService.isUserOwner();
            this.initForm();
        });
    }

    private initForm() {
        this.form = this.fb.group({
            name: [{value: this.group.name, disabled: !this.isUserOwner}, [Validators.required]],
            description: [this.group.description, [Validators.required]],
            imagePath: [this.group.imagePath],
            imageUrl: [this.group.imageUrl]
        });
    }
}
