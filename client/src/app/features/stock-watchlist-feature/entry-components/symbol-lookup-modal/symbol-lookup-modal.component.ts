import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DialogService, SymbolIdentification} from '@shared';
import {StockDetails, StUserPublicData, SymbolStorageService, UserStorageService} from '@core';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

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
    showSpinner = true;

    stockDetails$: Observable<StockDetails>;
    user$: Observable<StUserPublicData>;

    constructor(private navParams: NavParams,
                private symbolStorageService: SymbolStorageService,
                private userStorageService: UserStorageService,
                private cd: ChangeDetectorRef,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.symbolIdentification = this.navParams.get('symbolIdentification');
        this.watchlistId = this.navParams.get('watchlistId');
        this.showAddToWatchlistOption = this.navParams.get('showAddToWatchlistOption');

        this.stockDetails$ = this.symbolStorageService.getStockDetails(this.symbolIdentification.symbol);
        this.user$ = this.userStorageService.getUser();
        this.checkIfSymbolIsInWatchlist();  // checked if opened symbol is in my watchlist
        this.checkIfDetailsExists();
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    redirectToDetails() {
        this.modalController.dismiss({redirect: true});
    }

    addSymbolToWatchlist() {
        this.modalController.dismiss({addSymbol: true});
    }

    removeSymbolFromWatchlist() {
        this.modalController.dismiss({removeSymbol: true});
    }

    private checkIfDetailsExists() {
        this.stockDetails$.pipe(first()).subscribe((details) => {
            this.showSpinner = false;
            if (!details) {
                DialogService.presentErrorToast(`Could not find details for symbol ${this.symbolIdentification.symbol}`);
            }
        });
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
