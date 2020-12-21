import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewRef,
} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';
import {StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';
import {WatchlistService} from '../../../../features/stock-watchlist-feature/services/watchlist.service';
import {Observable} from 'rxjs';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {SymbolLookupModalComponent} from '../../../../features/stock-details-feature/components/modal/symbol-lookup-modal/symbol-lookup-modal.component';

@Component({
    selector: 'app-watchlist-tables-container',
    templateUrl: './watchlist-tables-container.component.html',
    styleUrls: ['./watchlist-tables-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTablesContainerComponent extends ComponentBase implements OnInit, OnDestroy {
    private interval: any;

    constructor(private watchlistService: WatchlistService,
                private router: Router,
                private cdr: ChangeDetectorRef,
                private modalController: ModalController) {
        super();
    }

    stockWatchlists$: Observable<StStockWatchlistFragmentFragment[]>;


    ngOnInit() {
        this.stockWatchlists$ = this.watchlistService.getUserStockWatchlists();
        this.watchlistService.initSubscriptionForWatchlist();
        this.updateScreen();
    }


    ngOnDestroy(): void {
        this.watchlistService.closeSubscriptionForWatchlist();
        clearInterval(this.interval);
    }

    async createWatchlist() {
        this.watchlistService.createWatchlist();
    }


    async showChartForSymbol(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    async deleteSymbolFromDocument(data: ChartDataIdentification, documentId: string, watchlistName: string) {
        this.watchlistService.removeStockFromWatchlist(data, documentId, watchlistName);
    }

    /*redirectToDetails(data: ChartDataIdentification) {
        this.router.navigate([`/menu/stock-details/${data.symbol}`]);
    }

    renameWatchlist(data: DocumentIdentification) {
        this.watchlistService.renameStockWatchlist(data.documentId, data.additionalInfo)
            .subscribe(e => this.ionicDialogService.presentToast('Watchlist has been renamed'));
    }

    async deleteWatchlist(watchlistId: string) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(
            `Do your really want to delete your entire watchlist ?`);

        if (confirmation) {
            this.watchlistService.deleteUserWatchlist(watchlistId)
                .subscribe(() => this.ionicDialogService.presentToast('Watchlist has been deleted'));
        }
    }*/

    private updateScreen(): void {
        // websockets update view
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }, 1200);
    }
}
