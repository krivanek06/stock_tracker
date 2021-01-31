import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Router} from '@angular/router';
import {MarketService} from '../../services/market.service';
import {Observable} from 'rxjs';
import {StEventCalendarEarningsData, StMarketCalendarEventsEarnings} from '../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-market-earnings-modal',
    templateUrl: './market-earnings-modal.component.html',
    styleUrls: ['./market-earnings-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketEarningsModalComponent implements OnInit {
    earnings$: Observable<StEventCalendarEarningsData[]>;
    selectedDate: string;

    constructor(private navParams: NavParams,
                private router: Router,
                private modalController: ModalController,
                private marketService: MarketService) {
    }

    ngOnInit() {
        this.selectedDate = this.navParams.get('selectedDate');
        this.earnings$ = this.marketService.queryStMarketCalendarEventsEarnings(this.selectedDate);
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    clickedSymbol(symbolIdentification: SymbolIdentification) {
        this.modalController.dismiss({symbolIdentification});
    }
}
