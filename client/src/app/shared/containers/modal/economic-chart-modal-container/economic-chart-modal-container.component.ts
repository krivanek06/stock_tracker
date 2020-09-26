import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ChartData, ChartDataArray, HistoricalChartData} from '../../../models/chartDataModel';
import {ModalController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {GenericChartComponent} from '../../../components/charts/generic-chart/generic-chart.component';
import {ChartType} from '../../../models/sharedModel';


@Component({
    selector: 'app-economic-chart-modal-container',
    templateUrl: './economic-chart-modal-container.component.html',
    styleUrls: ['./economic-chart-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EconomicChartModalContainerComponent implements OnInit {
    ChartType = ChartType;
    series: ChartDataArray[] = [];

    initialEndpoint: string;
    initialName: string;

    @ViewChild('GenericChart') genericChart: GenericChartComponent;

    constructor(private navParams: NavParams,
                private modalController: ModalController,
                private cd: ChangeDetectorRef,
                private http: HttpClient) {
        this.initialEndpoint = this.navParams.get('initialEndpoint');
        this.initialName = this.navParams.get('initialName');
    }

    /**
     * Expected endpoint structure:
     *  Inflation_Rate: {
     *      data: [1,2,3,....],
     *      name: 'Inflation rate'
     *  }
     */
    ngOnInit() {
        this.http.get<ChartData>(`${environment.marketDataAPI}/${this.initialEndpoint}`).pipe(
            map(result => result.result)
        ).subscribe(data => {
            /*for (const key of Object.keys(data)) {
                if (key === 'status') {
                    continue;
                }

                const chartData = data[key] as ChartDataArray;
                this.series = [...this.series, {name: chartData.name, data: chartData.data}];
            }*/
            this.series = data;
            this.cd.detectChanges();
        });
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    addData(chartData: ChartDataArray) {
        this.genericChart.addData(chartData);
    }


}
