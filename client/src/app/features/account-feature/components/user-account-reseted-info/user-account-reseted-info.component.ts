import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StUserResetedAccount} from '@core';
import {Confirmable} from '@shared';

@Component({
    selector: 'app-user-account-reseted-info',
    templateUrl: './user-account-reseted-info.component.html',
    styleUrls: ['./user-account-reseted-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountResetedInfoComponent implements OnInit {
    @Output() resetAccountEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() resetedAccountInfo: StUserResetedAccount[] = [];
    @Input() showResetButton = false;

    constructor() {
    }

    ngOnInit() {
    }

    @Confirmable('Please confirm reseting account. You will start again with 15 000$ portfolio. All your holdings will be lost.')
    resetAccount() {
        this.resetAccountEmitter.emit();
    }
}
