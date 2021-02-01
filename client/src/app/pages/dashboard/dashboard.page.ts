import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StPortfolio} from '../../api/customGraphql.service';
import {getFakeTransactionTable} from '../../features/stock-trading-feature/models/trading.fakeData';
import {ChartType, SymbolIdentification} from '../../shared/models/sharedModel';
import {TradingService} from '../../features/stock-trading-feature/services/trading.service';
import {TradingScreenUpdateBase} from '../../features/stock-trading-feature/utils/trading-screen-update.base';
import {SymbolLookupModalComponent} from '../../features/stock-details-feature/entry-components/symbol-lookup-modal/symbol-lookup-modal.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage extends TradingScreenUpdateBase implements OnInit, OnDestroy {
    stPortfolioHistory: StPortfolio[] = [];
    fakeDataTransactionTable = getFakeTransactionTable();

    ChartType = ChartType;

    constructor(public authService: AuthFeatureService,
                public tradingService: TradingService,
                public cdr: ChangeDetectorRef,
                private modalController: ModalController) {
        super(authService, tradingService, cdr);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.stPortfolioHistory = this.fakeDataTransactionTable.map(x => x.portfolio);
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }


    async showSummary(symbolIdentification: SymbolIdentification) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {symbolIdentification, showAddToWatchlistOption: false},
            cssClass: 'custom-modal'
        });
        await modal.present();
    }
}
