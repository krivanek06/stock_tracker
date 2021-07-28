import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Router} from '@angular/router';
import {GraphqlQueryService} from '@core';
import {SymbolIdentification} from '@shared';

@Component({
    selector: 'app-market-earnings-modal',
    templateUrl: './market-earnings-modal.component.html',
    styleUrls: ['./market-earnings-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketEarningsModalComponent implements OnInit {
    //earnings$: Observable<StEventCalendarEarningsData[]>;
    selectedDate: string;

    constructor(private navParams: NavParams,
                private router: Router,
                private modalController: ModalController,
                private graphqlQueryService: GraphqlQueryService) {
    }

    ngOnInit() {
        this.selectedDate = this.navParams.get('selectedDate');
        //this.earnings$ = this.graphqlQueryService.queryStMarketCalendarEventsEarnings(this.selectedDate);
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    clickedSymbol(symbolIdentification: SymbolIdentification) {
        this.modalController.dismiss({symbolIdentification});
    }
}
