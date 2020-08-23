import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {
    EmploymentPartialData,
    InvestorSentimentData, MiseryIndexData,
    TreasuryYieldCurveRatesData
} from '../../../../features/stock-data-feature/model/chartDataModel';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';
import {EmploymentStatisticsApiService} from '../../../../api/employment-statistics-api.service';
import {ChartType} from '../../../../shared/models/sharedModel';
import {EconomicChartModalContainerComponent} from '../../../../features/stock-data-feature/container/modal/economic-chart-modal-container/economic-chart-modal-container.component';
import {ModalController} from '@ionic/angular';
import * as chartData from '../../../../shared/models/endpoints';

@Component({
    selector: 'app-economic-charts-container',
    templateUrl: './economic-charts-container.component.html',
    styleUrls: ['./economic-charts-container.component.scss'],
})
export class EconomicChartsContainerComponent implements OnInit {
    investorSentimentData$: Observable<InvestorSentimentData>;
    employmentData$: Observable<EmploymentPartialData>;
    treasuryYieldCurveRates$: Observable<TreasuryYieldCurveRatesData>;
    miseryIndex$: Observable<MiseryIndexData>;

    chartHeight = 250;
    ChartType = ChartType;

    constructor(private chartDataService: ChartDataApiService,
                private modalController: ModalController,
                private employmentStatisticsApiService: EmploymentStatisticsApiService) {
    }

    ngOnInit() {
        this.investorSentimentData$ = this.chartDataService.getInvestorSentiment();
        this.employmentData$ = this.employmentStatisticsApiService.getPartialDataFromAllCategory();
        this.treasuryYieldCurveRates$ = this.chartDataService.getTreasuryYieldCurveRates();
        this.miseryIndex$ = this.chartDataService.getMiseryIndex();
    }

    async showTreasuryYieldCurveRates() {
        await this.createEconomicChartModal(chartData.treasuryYieldCurveRatesAPI.link, chartData.treasuryYieldCurveRatesAPI.name);
    }

    async showInvestorSentiment() {
        await this.createEconomicChartModal(chartData.investorSentimentAPI.link, chartData.investorSentimentAPI.name);
    }

    async showMiseryIndex() {
        await this.createEconomicChartModal(chartData.miseryIndexAPI.link, chartData.miseryIndexAPI.name);
    }

    async showGovernmentIndustry() {
        await this.createEconomicChartModal(chartData.governmentIndustryAPI.link, chartData.governmentIndustryAPI.name);
    }

    async showPrivateIndustry() {
        await this.createEconomicChartModal(chartData.privateIndustryAPI.link, chartData.privateIndustryAPI.name);
    }

    async showServiceProvidingIndustry() {
        await this.createEconomicChartModal(chartData.serviceProvidingIndustryAPI.link, chartData.serviceProvidingIndustryAPI.name);
    }

    async showGoodsProducingIndustry() {
        await this.createEconomicChartModal(chartData.goodsProducingIndustryAPI.link, chartData.goodsProducingIndustryAPI.name);
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
