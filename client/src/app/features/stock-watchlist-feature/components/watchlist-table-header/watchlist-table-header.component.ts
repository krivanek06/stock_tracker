import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-watchlist-table-header',
    templateUrl: './watchlist-table-header.component.html',
    styleUrls: ['./watchlist-table-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistTableHeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {

    }

}
