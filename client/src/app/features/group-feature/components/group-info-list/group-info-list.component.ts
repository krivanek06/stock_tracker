import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupPartialData} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-group-info-list',
    templateUrl: './group-info-list.component.html',
    styleUrls: ['./group-info-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupInfoListComponent implements OnInit {
    @Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() groupPartialData: StGroupPartialData;
    @Input() clickable = true;

    constructor() {
    }

    ngOnInit() {
    }

    clickedGroup() {
        this.clickedEmitter.emit();
    }

}
