import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StUserPartialInformation, StUserPublicData} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-user-account-info',
    templateUrl: './user-account-info.component.html',
    styleUrls: ['./user-account-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountInfoComponent implements OnInit {
    @Input() user: StUserPublicData;
    @Input() infoUnderImage = true;

    constructor() {
    }

    ngOnInit() {
    }

}
