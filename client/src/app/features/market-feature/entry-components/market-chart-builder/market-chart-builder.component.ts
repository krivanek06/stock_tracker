import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { componentDestroyed, GraphqlQueryService, StMarketChartDataResultCombined, StMarketDatasetKeyCategory } from '@core';
import { LodashService } from '@shared';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-market-chart-builder',
	templateUrl: './market-chart-builder.component.html',
	styleUrls: ['./market-chart-builder.component.scss'],
})
export class MarketChartBuilderComponent implements OnInit, OnDestroy {
	categories$!: Observable<StMarketDatasetKeyCategory[]>;

	activeDocumentKeys: string[] = [];
	series: StMarketChartDataResultCombined[] = [];
	loading: boolean = false;

	constructor(
		private dialogRef: MatDialogRef<MarketChartBuilderComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { documentKey: string },
		private graphqlQueryService: GraphqlQueryService
	) {}

	ngOnInit() {
		this.queryData(this.data.documentKey);
		this.categories$ = this.graphqlQueryService.queryStMarketAllCategories();
	}

	ngOnDestroy() {}

	dismissModal() {
		this.dialogRef.close();
	}

	queryData(key: string) {
		if (this.activeDocumentKeys.includes(key)) {
			// remove
			this.activeDocumentKeys = this.activeDocumentKeys.filter((k) => k !== key);
			this.series = this.series.filter((k) => k.documentKey !== key);
		} else {
			// fetch data
			this.loading = true;
			this.activeDocumentKeys = [...this.activeDocumentKeys, key];
			this.graphqlQueryService
				.queryStMarketData(key)
				.pipe(takeUntil(componentDestroyed(this)))
				.subscribe((res) => {
					this.loading = false;
					this.series = [...this.series, LodashService.cloneDeep(res)];
				});
		}
	}
}
