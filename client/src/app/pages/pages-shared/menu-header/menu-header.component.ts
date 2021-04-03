import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {GraphqlQueryService, Summary} from '@core';
import {IonSearchbar, ModalController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {SymbolLookupModalComponent} from '@stock-watchlist-feature';

@Component({
    selector: 'app-menu-header',
    templateUrl: './menu-header.component.html',
    styleUrls: ['./menu-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuHeaderComponent implements OnInit {
    @ViewChild('mySearchbar') searchBar: IonSearchbar;

    searchedSummaries$: Observable<Summary[]>;

    loading = false;

    constructor(private firebaseSearchService: GraphqlQueryService,
                private modalController: ModalController) {
    }

    ngOnInit() {
    }

    searchSymbol(event: CustomEvent) {
        if (!event.detail.value) {
            this.searchedSummaries$ = undefined;
            this.loading = false;
        } else {
            this.searchedSummaries$ = this.firebaseSearchService.queryStockSummaries(event.detail.value);
            this.loading = true;
        }
    }

    async clickedSummary(summary: Summary) {
        this.searchedSummaries$ = undefined;
        this.searchBar.value = null;

        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {
                symbolIdentification: {symbol: summary.symbol, name: summary.shortName},
                showAddToWatchlistOption: true
            },
            cssClass: 'custom-modal'
        });
        await modal.present();
    }

}
