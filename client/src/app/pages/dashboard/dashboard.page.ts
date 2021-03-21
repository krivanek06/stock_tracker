import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {StPortfolio, UserStorageService} from '@core';
import {getFakeTransactionTable, TradingScreenUpdateBaseDirective, TradingFeatureService} from '@stock-trading-feature';
import {SymbolIdentification} from '@shared';
import {SymbolLookupModalComponent} from '@stock-details-feature';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
    stPortfolioHistory: StPortfolio[] = [];
    fakeDataTransactionTable = getFakeTransactionTable();

    constructor(public userStorageService: UserStorageService,
                public tradingService: TradingFeatureService,
                public cdr: ChangeDetectorRef,
                private modalController: ModalController) {
        super(userStorageService, tradingService, cdr);
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
