import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SymbolIdentification} from '@shared';
import {StTransaction} from '@core';
import {SymbolLookupModalComponent} from '@stock-watchlist-feature';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-dashboard-holdings-table',
    templateUrl: './dashboard-holdings-table.component.html',
    styleUrls: ['./dashboard-holdings-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHoldingsTableComponent implements OnInit {

    @Input() stTransactions: StTransaction[];
    @Input() totalPortfolio: number;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
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
