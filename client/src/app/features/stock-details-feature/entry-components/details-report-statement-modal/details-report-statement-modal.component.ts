import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FinancialReport, SymbolStorageService } from '@core';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { find, map, mergeMap } from 'rxjs/operators';

@Component({
	selector: 'app-details-report-statement-modal',
	templateUrl: './details-report-statement-modal.component.html',
	styleUrls: ['./details-report-statement-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsReportStatementModalComponent implements OnInit {
	passedReport!: FinancialReport;
	selectedReport$!: Observable<FinancialReport | undefined>;

	constructor(private navParams: NavParams, private modalController: ModalController, private symbolStorageService: SymbolStorageService) {}

	ngOnInit() {
		this.passedReport = this.navParams.get('report') as FinancialReport;
		this.selectedReport$ = this.symbolStorageService.getStockFinancialReports().pipe(
			map((financialReports) => [...(financialReports?.allFinancialReportsQuarterly || []), ...(financialReports?.allFinancialReportsYearly || [])]),
			mergeMap((x) => x),
			find((reports) => reports.endDate === this.passedReport.endDate)
		);

		this.selectedReport$.subscribe(console.log);
	}

	dismissModal() {
		this.modalController.dismiss();
	}
}
