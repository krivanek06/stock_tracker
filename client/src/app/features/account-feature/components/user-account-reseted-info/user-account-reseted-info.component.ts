import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StUserResetedAccount} from '@core';

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

    resetAccount() {
        this.resetAccountEmitter.emit();
    }
}
