import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InvestorSentimentData, SP500StatisticsData} from '../../../../shared/models/chartModel';
import {ChartDataService} from '../../../../api/chart-data.service';

@Component({
    selector: 'app-dashboard-charts-container',
    templateUrl: './dashboard-charts-container.component.html',
    styleUrls: ['./dashboard-charts-container.component.scss'],
})
export class DashboardChartsContainerComponent implements OnInit {
    sp500StatisticsData$: Observable<SP500StatisticsData>;
    investorSentimentData$: Observable<InvestorSentimentData>;

    constructor(private chartDataService: ChartDataService) {
    }

    ngOnInit() {
        this.sp500StatisticsData$ = this.chartDataService.getSP500Statistics();
        this.investorSentimentData$ = this.chartDataService.getInvestorSentiment();

        this.sp500StatisticsData$.subscribe(x => console.log('sp 500', x));
        this.investorSentimentData$.subscribe(x => console.log('sentiment', x));
    }

}
