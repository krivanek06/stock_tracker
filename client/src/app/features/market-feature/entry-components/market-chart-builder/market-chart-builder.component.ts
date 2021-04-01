import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ComponentBaseDirective, GraphqlQueryService, StMarketChartDataResultCombined, StMarketDatasetKeyCategory} from '@core';
import {takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {cloneDeep} from 'lodash';

@Component({
    selector: 'app-market-chart-builder',
    templateUrl: './market-chart-builder.component.html',
    styleUrls: ['./market-chart-builder.component.scss']
})
export class MarketChartBuilderComponent extends ComponentBaseDirective implements OnInit, OnDestroy {
    categories$: Observable<StMarketDatasetKeyCategory[]>;

    activeDocumentKeys: string[] = [];
    series: StMarketChartDataResultCombined[] = [];

    constructor(private navParams: NavParams,
                private modalController: ModalController,
                private graphqlQueryService: GraphqlQueryService) {
        super();
    }

    ngOnInit() {
        this.queryData(this.navParams.get('documentKey'));
        this.categories$ = this.graphqlQueryService.queryStMarketAllCategories();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }


    dismissModal() {
        this.modalController.dismiss();
    }

    queryData(key: string) {
        if (this.activeDocumentKeys.includes(key)) {
            this.activeDocumentKeys = this.activeDocumentKeys.filter(k => k !== key);
            this.series = this.series.filter(k => k.documentKey !== key);
        } else {
            this.activeDocumentKeys = [...this.activeDocumentKeys, key];
            this.graphqlQueryService.queryStMarketData(key).pipe(takeUntil(this.destroy$)).subscribe(res => {
                this.series = [...this.series, cloneDeep(res)];
            });
        }
    }
}

