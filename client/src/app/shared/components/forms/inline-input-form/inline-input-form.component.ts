import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-inline-input-form',
    templateUrl: './inline-input-form.component.html',
    styleUrls: ['./inline-input-form.component.scss'],
})
export class InlineInputFormComponent implements OnInit {
    @Input() widthInPercent = 40;
    @Input() label: string;
    @Output() creationEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() closingEmitter: EventEmitter<any> = new EventEmitter<any>();

    watchlistName = '';

    constructor() {
    }

    ngOnInit() {
    }

    emitCreation() {
        if (this.watchlistName === '' || this.watchlistName.length > 50) {
            console.log('invalid form');
            return;
        }

        this.creationEmitter.emit(this.watchlistName);
        this.watchlistName = '';
    }

    emitClosing() {
        this.closingEmitter.emit();
    }

}
