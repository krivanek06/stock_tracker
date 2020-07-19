import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BasicInfo, Fundamentals, OverView} from '../../../../features/stock-tracker/model/stockDetails';
import {ChartDataIdentification, PriceRangeData, TimelineChartData} from '../../../../shared/models/chartModel';
import {takeUntil} from 'rxjs/operators';
import {StockApiService} from '../../../../features/stock-tracker/endpoints/stock-api.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {FinancialChartCardModalContainerComponent} from '../../../../features/stock-tracker/container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {PopoverController} from '@ionic/angular';
import {DetailsSummaryModalComponent} from '../../../../features/stock-tracker/components/modal/details-summary-modal/details-summary-modal.component';

@Component({
    selector: 'app-overview-with-chart-container',
    templateUrl: './overview-with-chart-container.component.html',
    styleUrls: ['./overview-with-chart-container.component.scss'],
})
export class OverviewWithChartContainerComponent implements OnInit, OnDestroy {
    private destroy$: Subject<boolean> = new Subject<boolean>();

    @Input() basicInfo: BasicInfo;
    @Input() overview: OverView;

    chartData: TimelineChartData;
    symbol: string;

    constructor(private stockApiService: StockApiService,
                private popoverController: PopoverController,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.symbol = this.route.snapshot.paramMap.get('symbol');
        this.loadChartData();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    loadChartData(period: string = '1y') {
        this.stockApiService.getChartDataForSymbol(this.symbol, period).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.chartData = res;
        });
    }

    async showSummary() {
        const popover = await this.popoverController.create({
            component: DetailsSummaryModalComponent,
            componentProps: {overview: this.overview},
            translucent: true,
        });
        popover.style.cssText = '--min-width: 70%; --max-width: 70%;';
        return await popover.present();
    }
}


