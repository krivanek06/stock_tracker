import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-clickable-name-item',
    templateUrl: './clickable-name-item.component.html',
    styleUrls: ['./clickable-name-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickableNameItemComponent implements OnInit {
    @Output() nameClickedEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Input() itemNames: string[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(name: string) {
        this.nameClickedEmitter.emit(name);
    }
}
