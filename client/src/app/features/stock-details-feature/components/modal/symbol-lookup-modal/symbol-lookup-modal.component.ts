import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../../shared/models/sharedModel';
import {Router} from '@angular/router';
import {QueryStockDetailsGQL, StockDetails, StockSummaryFragmentFragment, StUserPublicData} from '../../../../../api/customGraphql.service';
import {StockDetailsService} from '../../../services/stock-details.service';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../../../../auth-feature/services/auth-feature.service';
import {WatchlistService} from '../../../../stock-watchlist-feature/services/watchlist.service';

@Component({
    selector: 'app-symbol-lookup-modal',
    templateUrl: './symbol-lookup-modal.component.html',
    styleUrls: ['./symbol-lookup-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolLookupModalComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;
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
        this.stockDetails$ = this.stockDetailsService.getStockDetails(this.chartDataIdentification.symbol);
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    redirectToDetails() {
        this.dismissModal();
        this.router.navigate([`/menu/stock-details/${this.chartDataIdentification.symbol}`]);
    }


    addSymbolToWatchlist() {
        this.watchlistService.addSymbolToWatchlist(this.chartDataIdentification.symbol);
    }
}
