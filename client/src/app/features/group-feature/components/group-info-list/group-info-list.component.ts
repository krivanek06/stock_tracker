import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupIdentificationDataFragment} from '@core';

@Component({
    selector: 'app-group-info-list',
    templateUrl: './group-info-list.component.html',
    styleUrls: ['./group-info-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupInfoListComponent implements OnInit {
    @Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() groupPartialData: StGroupIdentificationDataFragment;
    @Input() clickable = true;

    constructor() {
    }

    ngOnInit() {
    }

    clickedGroup() {
        this.clickedEmitter.emit();
    }

}
