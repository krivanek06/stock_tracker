import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FinancialReport, StockDetails } from '@core';
import { ModalController } from '@ionic/angular';
import { DetailsReportStatementModalComponent } from '@stock-details-feature';

@Component({
	selector: 'app-financial-reports-container',
	templateUrl: './financial-reports-container.component.html',
	styleUrls: ['./financial-reports-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialReportsContainerComponent implements OnInit {
	@Input() stockDetails!: StockDetails;

	constructor(private modalController: ModalController) {}

	ngOnInit() {}

	async openReport(report: FinancialReport) {
		const modal = await this.modalController.create({
			component: DetailsReportStatementModalComponent,
			componentProps: {
				report,
			},
			cssClass: 'custom-modal',
		});
		await modal.present();
	}
}
