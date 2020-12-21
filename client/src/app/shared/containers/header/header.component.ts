import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../../../features/auth-feature/services/auth-feature.service';
import {SearchDataApiService} from '../../../api/search-data-api.service';
import {SearchStocks} from '../../models/chartDataModel';
import {SymbolLookupModalComponent} from '../../../features/stock-details-feature/components/modal/symbol-lookup-modal/symbol-lookup-modal.component';
import {ModalController} from '@ionic/angular';
import {ChartDataIdentification} from '../../models/sharedModel';
import {Router} from '@angular/router';
import {StUserPublicData} from '../../../api/customGraphql.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    user$: Observable<StUserPublicData>;
    searchStocks$: Observable<SearchStocks[]>;

    constructor(private authFeatureService: AuthFeatureService,
                private searchDataApiService: SearchDataApiService,
                private router: Router,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();
        this.user$.subscribe(console.log)
    }

    showSearch() {
        console.log('show search');
        // this.searchStocks$ = stockPrefix.detail.value ? this.searchDataApiService.searchStockSymbol(stockPrefix.detail.value) : undefined;
    }

    async showSearchSymbolGraph(chartDataIdentification: ChartDataIdentification) {
        console.log(chartDataIdentification);
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }


    redirectToSearch() {
        this.router.navigate([`/menu/search`]);
    }
}
