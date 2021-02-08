import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StMarketOverviewPartialData} from '../../../../api/customGraphql.service';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {MarketChartBuilderComponent} from '../../../../features/market-feature/entry-components/market-chart-builder/market-chart-builder.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-market-production',
    templateUrl: './market-production.component.html',
    styleUrls: ['./market-production.component.scss'],
})
export class MarketProductionComponent implements OnInit {
    marketOverview$: Observable<StMarketOverviewPartialData>;

    chartHeight = 185;

    constructor(private marketService: MarketService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.marketOverview$ = this.marketService.queryStMarketHistoryOverview();
    }

    async expand(documentKey: string) {
        const modal = await this.modalController.create({
            component: MarketChartBuilderComponent,
            componentProps: {documentKey},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

}
