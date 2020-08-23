import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ChartData, ChartDataArray, HistoricalChartData} from '../../../model/chartDataModel';
import {ChartDataIdentification} from '../../../../../shared/models/sharedModel';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataApiService} from '../../../../../api/chart-data-api.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {GenericChartComponent} from '../../../../../shared/components/charts/generic-chart/generic-chart.component';


@Component({
    selector: 'app-economic-chart-modal-container',
    templateUrl: './economic-chart-modal-container.component.html',
    styleUrls: ['./economic-chart-modal-container.component.scss'],
})
export class EconomicChartModalContainerComponent implements OnInit {
    series: ChartDataArray[] = [];

    initialEndpoint: string;
    initialName: string;

    @ViewChild('GenericChart') genericChart: GenericChartComponent;

    constructor(private navParams: NavParams,
                private modalController: ModalController,
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
        this.http.get<any>(`${environment.stockAPI}/${this.initialEndpoint}`).pipe(
            map(result => result.multipleData ? result.chartData : result)
        ).subscribe(data => {
            for (const key of Object.keys(data)) {
                if (key === 'status') {
                    continue;
                }

                const chartData = data[key] as ChartDataArray;
                this.series = [...this.series, {name: chartData.name, data: chartData.data}];
            }
        });
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    addData(chartData: ChartDataArray) {
        this.genericChart.addData(chartData);
    }


}
