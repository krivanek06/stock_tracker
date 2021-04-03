import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadedFile, UploaderComponent} from '@shared';
import {StUserPublicData} from '@core';
import {GroupFeatureFacadeService} from '@group-feature';

@Component({
    selector: 'app-groups-create',
    templateUrl: './groups-create.component.html',
    styleUrls: ['./groups-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsCreateComponent implements OnInit {
    @ViewChild('uploader') uploader: UploaderComponent;
    invitationSent: StUserPublicData[] = [];
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private groupService: GroupFeatureFacadeService) {
    }

    ngOnInit() {
        this.initForm();
    }

    async submit() {
        if (await this.groupService.createGroup(this.form.getRawValue(), this.invitationSent)) {
            // restore to default;
            this.form.reset();
            this.invitationSent = [];
            this.uploader.clearImages();
        }
    }


    uploadedGroupImage(files: UploadedFile[]) {
        this.form.get('imagePath').patchValue(files[0].path);
        this.form.get('imageUrl').patchValue(files[0].downloadURL);
    }

    sendInvitation(userPublicData: StUserPublicData) {
        if (this.invitationSent.includes(userPublicData)) {
            return;
        }
        this.invitationSent = [...this.invitationSent, userPublicData];
    }

    invitationRemove(userPublicData: StUserPublicData) {
        this.invitationSent = this.invitationSent.filter(x => x.uid !== userPublicData.uid);
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
