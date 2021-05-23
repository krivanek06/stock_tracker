import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StUserIndetification} from '@core';

@Component({
    selector: 'app-user-identification-info',
    templateUrl: './user-identification-info.component.html',
    styleUrls: ['./user-identification-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIdentificationInfoComponent implements OnInit {
    @Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() stUserIndetification: StUserIndetification;
    @Input() clickable = false;

    constructor() {
    }

    ngOnInit() {
    }

    clickedPerson() {
        if (this.clickable) {
            this.clickedEmitter.emit();
        }
    }
}
