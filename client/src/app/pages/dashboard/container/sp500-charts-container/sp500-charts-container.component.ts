import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SP500PartialData} from '../../../../shared/models/chartDataModel';
import {Sp500StatisticsApiService} from '../../../../api/sp500-statistics-api.service';
import {ModalController} from '@ionic/angular';
import {EconomicChartModalContainerComponent} from '../../../../shared/containers/modal/economic-chart-modal-container/economic-chart-modal-container.component';
import {ChartType} from '../../../../shared/models/sharedModel';
import * as chartData from '../../../../shared/models/endpoints';

@Component({
    selector: 'app-sp500-charts-container',
    templateUrl: './sp500-charts-container.component.html',
    styleUrls: ['./sp500-charts-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sp500ChartsContainerComponent implements OnInit {
    sp500StatisticsData$: Observable<SP500PartialData>;

    ChartType = ChartType;

    constructor(private sp500StatisticsApiService: Sp500StatisticsApiService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.sp500StatisticsData$ = this.sp500StatisticsApiService.getPartialDataFromAllCategory();
        this.sp500StatisticsData$.subscribe(x => console.log('sp500StatisticsData$', x))
    }

    async showEarningsYield() {
        await this.createEconomicChartModal(chartData.dividendYieldAPI.link, chartData.dividendYieldAPI.name);
    }

    async showSalesGrowth() {
        await this.createEconomicChartModal(chartData.salesGrowthAPI.link, chartData.salesGrowthAPI.name);
    }

    async showPriceToSale() {
        await this.createEconomicChartModal(chartData.priceToSaleAPI.link, chartData.priceToSaleAPI.name);
    }

    async showPriceToBook() {
        await this.createEconomicChartModal(chartData.priceToBookAPI.link, chartData.priceToBookAPI.name);
    }

    async showPeRatio() {
        await this.createEconomicChartModal(chartData.peRatioAPI.link, chartData.peRatioAPI.name);
    }

    async showDividendsYield() {
        await this.createEconomicChartModal(chartData.dividendYieldAPI.link, chartData.dividendYieldAPI.name);
    }

    async showDividends() {
        await this.createEconomicChartModal(chartData.dividendAPI.link, chartData.dividendAPI.name);
    }


    private async createEconomicChartModal(initialEndpoint: string, initialName: string) {
        const modal = await this.modalController.create({
            component: EconomicChartModalContainerComponent,
            componentProps: {initialEndpoint, initialName},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }


}
