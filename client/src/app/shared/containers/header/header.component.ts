import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {FirebaseSearchService, StUserPublicData, Summary, UserStorageService} from '@core';
import {IonSearchbar, ModalController} from '@ionic/angular';
import {SymbolLookupModalComponent} from '@stock-details-feature';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    @Input() pageName: string;
    @Input() pageIcon: string;

    @ViewChild('mySearchbar') searchBar: IonSearchbar;

    user$: Observable<StUserPublicData>;
    searchedSummaries$: Observable<Summary[]>;

    loading = false;

    constructor(private userStorageService: UserStorageService,
                private firebaseSearchService: FirebaseSearchService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUser();
        this.user$.subscribe(console.log);
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
            componentProps: {symbolIdentification: {symbol: summary.symbol, name: summary.shortName}},
            cssClass: 'custom-modal'
        });
        await modal.present();
    }
}
