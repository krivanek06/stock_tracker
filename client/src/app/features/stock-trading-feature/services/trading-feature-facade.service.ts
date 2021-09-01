import { Injectable } from '@angular/core';
import { GraphqlTradingService, StPortfolio, StPortfolioSnapshot, StTransactionInput, Summary, UserStorageService } from '@core';
import { PopoverController } from '@ionic/angular';
import { DialogService, zipArrays } from '@shared';
import * as moment from 'moment';
import { TradeConfirmationPopOverComponent } from '../entry-components';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM } from '../models';

@Injectable({
	providedIn: 'root',
})
export class TradingFeatureFacadeService {
	constructor(
		private popoverController: PopoverController,
		private userStorageService: UserStorageService,
		private graphqlTradingService: GraphqlTradingService
	) {}

	async performTransaction(summary: Summary) {
		const popover = await this.popoverController.create({
			component: TradeConfirmationPopOverComponent,
			cssClass: 'custom-popover',
			translucent: true,
			componentProps: {
				symbol: summary.symbol,
				price: summary.marketPrice,
				symbolLogoUrl: summary.logo_url,
			},
		});

		await popover.present();
		const res = await popover.onDidDismiss();
		const data = res?.data?.data as StTransactionInput;

		if (!!data) {
			await this.graphqlTradingService.performTransaction(data).toPromise();
			await DialogService.presentToast(`${data.operation} operation on ${data.symbol} has been completed `);
		}
	}

	createPortfolioHistoricalWrappers(
		stPortfolioSnapshots: StPortfolioSnapshot[] = [],
		requiredTimeIntervals: TIME_INTERVAL_ENUM[] = []
	): PortfolioHistoricalWrapper[] {
		const today: moment.Moment = moment();

		const reverseSnapshots = [...stPortfolioSnapshots].reverse();

		// find needed portfolio
		const dailyPortfolio = reverseSnapshots.find((change) => !today.isSame(moment(change.date), 'day'));
		const weeklyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'days') >= 7);
		const monthlyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') >= 1);
		const quarterlyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') >= 4);
		const yearlyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'years') >= 1);
		const fromBeginning = stPortfolioSnapshots[0];

		const portfolios = [dailyPortfolio, weeklyPortfolio, monthlyPortfolio, quarterlyPortfolio, yearlyPortfolio, fromBeginning];
		const timeIntervals = [
			TIME_INTERVAL_ENUM.DAILY,
			TIME_INTERVAL_ENUM.WEEKLY,
			TIME_INTERVAL_ENUM.MONTHLY,
			TIME_INTERVAL_ENUM.QUARTERLY,
			TIME_INTERVAL_ENUM.YEARLY,
			TIME_INTERVAL_ENUM.FROM_BEGINNING,
		];

		// zip them and filter out not null and required data
		return zipArrays(timeIntervals as any[], portfolios)
			.map((intervalPortfolio: [TIME_INTERVAL_ENUM, StPortfolio]) => {
				return {
					timeIntervalName: intervalPortfolio[0],
					historicalBalance: intervalPortfolio[1]?.portfolioInvested + intervalPortfolio[1]?.portfolioCash,
				};
			})
			.filter((wrapper) => !!wrapper.historicalBalance && requiredTimeIntervals.includes(wrapper.timeIntervalName));
	}
}
