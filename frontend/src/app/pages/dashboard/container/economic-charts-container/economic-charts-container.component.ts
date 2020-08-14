import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {
    EmploymentPartialData,
    InvestorSentimentData, MiseryIndexData,
    TreasuryYieldCurveRatesData
} from '../../../../features/stock-data-feature/model/chartDataModel';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';
import {EmploymentStatisticsApiService} from '../../../../api/employment-statistics-api.service';

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

    constructor(private chartDataService: ChartDataApiService,
                private employmentStatisticsApiService: EmploymentStatisticsApiService) {
    }

    ngOnInit() {
        this.investorSentimentData$ = this.chartDataService.getInvestorSentiment();
        this.employmentData$ = this.employmentStatisticsApiService.getPartialDataFromAllCategory();
        this.treasuryYieldCurveRates$ = this.chartDataService.getTreasuryYieldCurveRates();
        this.miseryIndex$ = this.chartDataService.getMiseryIndex();

        this.investorSentimentData$.subscribe(x => console.log('sentiment', x));
        this.employmentData$.subscribe(x => console.log({x}));
        this.treasuryYieldCurveRates$.subscribe(x => console.log({x}));
        this.miseryIndex$.subscribe(x => console.log({x}));
    }

}
