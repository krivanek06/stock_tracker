import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-watchlist-creation',
    templateUrl: './watchlist-creation.component.html',
    styleUrls: ['./watchlist-creation.component.scss'],
})
export class WatchlistCreationComponent implements OnInit {
    @Output() creationEmitter: EventEmitter<string> = new EventEmitter<string>();

    showForm = false;

    constructor() {
    }

    ngOnInit() {
    }

    createWatchList(watchlistName: string) {
        this.creationEmitter.emit(watchlistName);
        this.toggleShowFormButton();
    }



    toggleShowFormButton() {
        this.showForm = !this.showForm;
    }


}
