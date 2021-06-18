import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StGroupUser, StUserPublicData} from '@core';

@Component({
    selector: 'app-group-user-base-information',
    templateUrl: './group-user-base-information.component.html',
    styleUrls: ['./group-user-base-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupUserBaseInformationComponent implements OnInit {
    @Input() groupUser: StGroupUser;
    @Input() useClassStyling: 'first-position' | 'second-position' | 'third-position' | 'my-position' | '' = '';
    @Input() showIncreasePosition: boolean = false;
    @Input() clickable: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

}
