import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {StMarketOverviewPartialData} from '../../../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {ModalController} from '@ionic/angular';
import {MarketChartBuilderComponent} from '../../../../features/market-feature/entry-components/market-chart-builder/market-chart-builder.component';

@Component({
    selector: 'app-market-overview',
    templateUrl: './market-overview.component.html',
    styleUrls: ['./market-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketOverviewComponent implements OnInit {
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
