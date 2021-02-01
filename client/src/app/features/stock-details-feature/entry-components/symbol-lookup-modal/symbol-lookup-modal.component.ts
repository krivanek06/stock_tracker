import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';
import {Router} from '@angular/router';
import {
    QueryStockDetailsGQL,
    StockDetails,
    StockSummaryFragmentFragment,
    StUserPublicData,
    Summary
} from '../../../../api/customGraphql.service';
import {StockDetailsService} from '../../services/stock-details.service';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../../../auth-feature/services/auth-feature.service';
import {WatchlistService} from '../../../stock-watchlist-feature/services/watchlist.service';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../../../../pages/search/models/pages.model';

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
                private stockDetailsService: StockDetailsService,
                private watchlistService: WatchlistService,
                private authFeatureService: AuthFeatureService,
                private cd: ChangeDetectorRef,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.symbolIdentification = this.navParams.get('symbolIdentification');
        this.watchlistId = this.navParams.get('watchlistId');
        this.showAddToWatchlistOption = this.navParams.get('showAddToWatchlistOption');

        this.stockSummary$ = this.stockDetailsService.getStockSummary(this.symbolIdentification.symbol);
        this.checkIfSymbolIsInWatchlist();  // checked if opened symbol is in my watchlist
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    redirectToDetails() {
        this.dismissModal();
        this.router.navigate([`/menu/search/${SEARCH_PAGE_ENUM.STOCK}/${SEARCH_PAGE_STOCK_ENUM.DETAILS}/${this.symbolIdentification.symbol}`]);
    }

    async addSymbolToWatchlist() {
        await this.watchlistService.addSymbolToWatchlist(this.symbolIdentification.symbol);
        this.checkIfSymbolIsInWatchlist();
    }

    async removeSymbolFromWatchlist() {
        await this.watchlistService.removeStockFromWatchlist(this.symbolIdentification, this.watchlistId);
        this.checkIfSymbolIsInWatchlist();
    }

    private checkIfSymbolIsInWatchlist() {
        if (this.watchlistId) {
            const watchlist = this.authFeatureService.user.stockWatchlist.find(s => s.id === this.watchlistId);
            if (watchlist) {
                this.isSymbolInWatchlist = watchlist.summaries.map(s => s.symbol).includes(this.symbolIdentification.symbol);
                this.cd.detectChanges();
            }
        }
    }
}
