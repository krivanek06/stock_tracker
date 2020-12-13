import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../../features/auth-feature/model/userModel';
import {AuthFeatureService} from '../../../features/auth-feature/services/auth-feature.service';
import {SearchDataApiService} from '../../../api/search-data-api.service';
import {SearchStocks} from '../../models/chartDataModel';
import {FinancialChartModalContainerComponent} from '../modal/financial-chart-modal-container/financial-chart-modal-container.component';
import {ModalController} from '@ionic/angular';
import {ChartDataIdentification} from '../../models/sharedModel';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    user$: Observable<IUser>;
    searchStocks$: Observable<SearchStocks[]>;

    constructor(private authFeatureService: AuthFeatureService,
                private searchDataApiService: SearchDataApiService,
                private router: Router,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();

    }

    showSearch() {
        console.log('show search');
        // this.searchStocks$ = stockPrefix.detail.value ? this.searchDataApiService.searchStockSymbol(stockPrefix.detail.value) : undefined;
    }

    async showSearchSymbolGraph(chartDataIdentification: ChartDataIdentification) {
        console.log(chartDataIdentification);
        const modal = await this.modalController.create({
            component: FinancialChartModalContainerComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }


    redirectToSearch() {
        this.router.navigate([`/menu/search`]);
    }
}
