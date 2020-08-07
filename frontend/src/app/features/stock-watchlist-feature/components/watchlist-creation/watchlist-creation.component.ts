import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-watchlist-creation',
    templateUrl: './watchlist-creation.component.html',
    styleUrls: ['./watchlist-creation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
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
        this.showForm = false;
    }



    toggleShowFormButton() {
        this.showForm = !this.showForm;
    }


}
