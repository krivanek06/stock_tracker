import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../../shared/models/sharedModel';
import {Router} from '@angular/router';
import {
    QueryStockDetailsGQL,
    StockDetails,
    StockSummaryFragmentFragment,
    StUserPublicData,
    Summary
} from '../../../../../api/customGraphql.service';
import {StockDetailsService} from '../../../services/stock-details.service';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../../../../auth-feature/services/auth-feature.service';
import {WatchlistService} from '../../../../stock-watchlist-feature/services/watchlist.service';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../../../../../pages/search/models/pages.model';

@Component({
    selector: 'app-symbol-lookup-modal',
    templateUrl: './symbol-lookup-modal.component.html',
    styleUrls: ['./symbol-lookup-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolLookupModalComponent implements OnInit {
    stockSummary$: Observable<Summary>;
    chartDataIdentification: ChartDataIdentification;
    user: StUserPublicData;

    constructor(private navParams: NavParams,
                private router: Router,
                private stockDetailsService: StockDetailsService,
                private watchlistService: WatchlistService,
                private authFeatureService: AuthFeatureService,
                private modalController: ModalController) {
        this.chartDataIdentification = this.navParams.get('chartDataIdentification');
    }

    ngOnInit() {
        this.stockSummary$ = this.stockDetailsService.getStockSummary(this.chartDataIdentification.symbol);
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    redirectToDetails() {
        this.dismissModal();
        this.router.navigate([`/menu/search/${SEARCH_PAGE_ENUM.STOCK}/${SEARCH_PAGE_STOCK_ENUM.DETAILS}/${this.chartDataIdentification.symbol}`]);
    }


    addSymbolToWatchlist() {
        this.watchlistService.addSymbolToWatchlist(this.chartDataIdentification.symbol);
    }
}
