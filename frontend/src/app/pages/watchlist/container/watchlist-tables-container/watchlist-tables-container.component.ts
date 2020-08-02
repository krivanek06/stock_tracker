import {Component, OnInit} from '@angular/core';
import {WatchlistService} from '../../../../core/services/public/watchlist.service';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';

@Component({
    selector: 'app-watchlist-tables-container',
    templateUrl: './watchlist-tables-container.component.html',
    styleUrls: ['./watchlist-tables-container.component.scss'],
})
export class WatchlistTablesContainerComponent implements OnInit {

    private DELETE_THIS_LATER = '7eYTErOxXugeHg4JHLS1L5ZKosK2';

    constructor(private watchlistService: WatchlistService,
                private ionicDialogService: IonicDialogService) {
    }

    stockWatchLists$ = this.watchlistService.getUserStockWatchlists(this.DELETE_THIS_LATER);

    ngOnInit() {
        this.stockWatchLists$.subscribe(console.log);
    }

    createWatchList(watchlistName: string) {
        this.watchlistService.createWatchList({userId: this.DELETE_THIS_LATER, additionalData: watchlistName})
            .subscribe(res => this.ionicDialogService.presentToast('Symbol deleted from watchlist'));
    }

}
