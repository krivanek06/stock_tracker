import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-group-types-list',
    templateUrl: './group-types-list.component.html',
    styleUrls: ['./group-types-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupTypesListComponent implements OnInit {
    @Output() clickedGroupEmitter: EventEmitter<string> = new EventEmitter<string>();

    @Input() activeGroup: string;

    constructor() {
    }

    ngOnInit() {
    }

    clickedGroup(group1: string) {
        this.clickedGroupEmitter.emit(group1);
    }
}
