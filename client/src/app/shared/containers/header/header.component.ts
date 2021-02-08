import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../../../features/auth-feature/services/auth-feature.service';
import {StUserPublicData, Summary} from '../../../api/customGraphql.service';
import {FirebaseSearchService} from '../../services/firebase-search.service';
import {IonSearchbar, ModalController} from '@ionic/angular';
import {SymbolLookupModalComponent} from '../../../features/stock-details-feature/entry-components/symbol-lookup-modal/symbol-lookup-modal.component';

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

    constructor(private authFeatureService: AuthFeatureService,
                private firebaseSearchService: FirebaseSearchService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();
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
