import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {SymbolIdentification} from '@shared';
import {Router} from '@angular/router';
import {StUserPublicData, Summary, SymbolStorageService, UserStorageService} from '@core';
import {Observable} from 'rxjs';
import {WatchlistFeatureFacadeService} from '../../services';  // TODO circular dependency

@Component({
    selector: 'app-symbol-lookup-modal',
    templateUrl: './symbol-lookup-modal.component.html',
    styleUrls: ['./symbol-lookup-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolLookupModalComponent implements OnInit {

    symbolIdentification: SymbolIdentification;
    watchlistId: string;
    showAddToWatchlistOption = true;
    isSymbolInWatchlist = false;

    user: StUserPublicData;
    stockSummary$: Observable<Summary>;

    constructor(private navParams: NavParams,
                private router: Router,
                private symbolStorageService: SymbolStorageService,
                private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
                private userStorageService: UserStorageService,
                private cd: ChangeDetectorRef,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.symbolIdentification = this.navParams.get('symbolIdentification');
        this.watchlistId = this.navParams.get('watchlistId');
        this.showAddToWatchlistOption = this.navParams.get('showAddToWatchlistOption');

        this.stockSummary$ = this.symbolStorageService.getStockSummary(this.symbolIdentification.symbol);
        this.checkIfSymbolIsInWatchlist();  // checked if opened symbol is in my watchlist
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    redirectToDetails() {
        this.modalController.dismiss({redirect: true});
        this.router.navigate([`/menu/search/stock/details/${this.symbolIdentification.symbol}`]);
    }

    async addSymbolToWatchlist() {
        await this.watchlistFeatureFacadeService.addSymbolToWatchlist(this.symbolIdentification.symbol);
        this.checkIfSymbolIsInWatchlist();
    }

    async removeSymbolFromWatchlist() {
        await this.watchlistFeatureFacadeService.removeStockFromWatchlist(this.symbolIdentification, this.watchlistId);
        this.checkIfSymbolIsInWatchlist();
    }

    private checkIfSymbolIsInWatchlist() {
        if (this.watchlistId) {
            const watchlist = this.userStorageService.user.stockWatchlist.find(s => s.id === this.watchlistId);
            if (watchlist) {
                this.isSymbolInWatchlist = watchlist.summaries.map(s => s.symbol).includes(this.symbolIdentification.symbol);
                this.cd.detectChanges();
            }
        }
    }
}
