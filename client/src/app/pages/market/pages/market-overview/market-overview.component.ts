import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MarketChartBuilderComponent, MarketFeatureService} from '@market-feature';
import {StMarketOverviewPartialData} from '@core';
import {Observable} from 'rxjs';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-market-overview',
    templateUrl: './market-overview.component.html',
    styleUrls: ['./market-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketOverviewComponent implements OnInit {
    marketOverview$: Observable<StMarketOverviewPartialData>;

    chartHeight = 185;

    constructor(private marketService: MarketFeatureService,
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
