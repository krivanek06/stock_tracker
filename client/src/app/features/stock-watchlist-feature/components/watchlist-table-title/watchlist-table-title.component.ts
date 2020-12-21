import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-watchlist-table-title',
    templateUrl: './watchlist-table-title.component.html',
    styleUrls: ['./watchlist-table-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTableTitleComponent implements OnInit {
    @Input() name: string;
    @Input() number: number;
    @Input() createdAt: string;

    constructor() {
    }

    ngOnInit() {
    }
}
