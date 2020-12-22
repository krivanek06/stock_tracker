import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadedFile} from '../../../../shared/models/sharedModel';
import {StGroupAllDataInput, StUserPartialInformation} from '../../../../api/customGraphql.service';
import {GroupService} from '../../../../features/group-feature/services/group.service';

@Component({
    selector: 'app-groups-create',
    templateUrl: './groups-create.component.html',
    styleUrls: ['./groups-create.component.scss'],
})
export class GroupsCreateComponent implements OnInit {
    invitationSent: StUserPartialInformation[] = [];
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private groupService: GroupService) {
    }

    ngOnInit() {
        this.initForm();
    }

    submit() {
        this.groupService.createGroup(this.form.getRawValue(), this.invitationSent);

        // restore to default;
        this.form.reset();
        this.invitationSent = [];
    }


    uploadedGroupImage(files: UploadedFile[]) {
        this.form.get('imagePath').patchValue(files[0].path);
        this.form.get('imageUrl').patchValue(files[0].downloadURL);
    }

    sendInvitation(userPartialInformation: StUserPartialInformation) {
        if (this.invitationSent.includes(userPartialInformation)) {
            return;
        }
        this.invitationSent = [...this.invitationSent, userPartialInformation];
    }

    invitationRemove(user: StUserPartialInformation) {
        this.invitationSent = this.invitationSent.filter(x => x.uid !== user.uid);
    }

    private initForm() {
        this.form = this.fb.group({
            name: [null, [Validators.required]],
            description: [null, [Validators.required]],
            imagePath: [null],
            imageUrl: [null]
        });
    }


}
