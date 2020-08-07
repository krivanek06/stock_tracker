import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.page.html',
    styleUrls: ['./watchlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage implements OnInit {
    constructor() {
    }

    ngOnInit() {



    }

}
