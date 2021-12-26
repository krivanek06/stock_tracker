import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlTradingService, STARTING_PORTFOLIO, StPortfolioSnapshot, StTransactionInput, Summary, UserStorageService } from '@core';
import { DialogService, zipArrays } from '@shared';
import * as moment from 'moment';
import { TradeConfirmationPopOverComponent } from '../entry-components';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM } from '../models';

@Injectable({
	providedIn: 'root',
})
export class TradingFeatureFacadeService {
	constructor(
		private dialog: MatDialog,
		private graphqlTradingService: GraphqlTradingService,
		private userStorageService: UserStorageService
	) { }

	async performTransaction(summary: Summary | null): Promise<void> {
		if (!summary) {
			return;
		}
		const holding = this.userStorageService.user.holdings.find((h) => h.symbol === summary.symbol);
		const portoflioCash = this.userStorageService.user.portfolio.portfolioCash;

		const dialogRef = this.dialog.open(TradeConfirmationPopOverComponent, {
			panelClass: 'g-mat-dialog',
			data: {
				symbol: summary.symbol,
				price: summary.marketPrice,
				symbolLogoUrl: summary.logo_url,
				holding,
				portoflioCash,
			},
		});

		const data = await dialogRef.afterClosed().toPromise() as StTransactionInput;
		if (!!data) {
			DialogService.showNotificationBar(`Your order has been submitted to ${data.operation} symbol: ${data.symbol}`, 'notification');
			await this.graphqlTradingService.performTransaction(data).toPromise();
			DialogService.showNotificationBar(`${data.operation} operation on ${data.symbol} has been completed `);
		}
	}

	createPortfolioHistoricalWrappers(
		stPortfolioSnapshots: StPortfolioSnapshot[] = [],
		requiredTimeIntervals: TIME_INTERVAL_ENUM[] = []
	): PortfolioHistoricalWrapper[] {
		const today: moment.Moment = moment();

		const reverseSnapshots = [...stPortfolioSnapshots].reverse();

		// find needed portfolio
		const currentlyPortfolio = reverseSnapshots.length >= 1 ? reverseSnapshots[0] : null;
		const dailyPortfolio = reverseSnapshots.length >= 2 ? reverseSnapshots[1] : null;
		const weeklyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'days') >= 7);
		const monthlyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') >= 1);
		const quarterlyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') >= 4);
		const yearlyPortfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'years') >= 1);
		const fromBeginning = {
			portfolioInvested: 0,
			portfolioCash: reverseSnapshots.length > 0 ? STARTING_PORTFOLIO : null,
		};

		const portfolios = [currentlyPortfolio, dailyPortfolio, weeklyPortfolio, monthlyPortfolio, quarterlyPortfolio, yearlyPortfolio, fromBeginning];
		const timeIntervals = [
			TIME_INTERVAL_ENUM.CURRENTLY,
			TIME_INTERVAL_ENUM.DAILY,
			TIME_INTERVAL_ENUM.WEEKLY,
			TIME_INTERVAL_ENUM.MONTHLY,
			TIME_INTERVAL_ENUM.QUARTERLY,
			TIME_INTERVAL_ENUM.YEARLY,
			TIME_INTERVAL_ENUM.FROM_BEGINNING,
		];
		const alwaysDisplayTimeIntervals = [
			TIME_INTERVAL_ENUM.CURRENTLY,
			TIME_INTERVAL_ENUM.DAILY,
			TIME_INTERVAL_ENUM.WEEKLY,
			TIME_INTERVAL_ENUM.FROM_BEGINNING,
		];

		// zip them and filter out not null and required data
		return zipArrays(timeIntervals as any[], portfolios)
			.map((intervalPortfolio) => {
				return {
					timeIntervalName: intervalPortfolio[0],
					historicalBalance: intervalPortfolio[1]?.portfolioInvested + intervalPortfolio[1]?.portfolioCash,
				};
			})
			.filter(
				(wrapper) =>
					(!!wrapper.historicalBalance && requiredTimeIntervals.includes(wrapper.timeIntervalName)) ||
					(requiredTimeIntervals.includes(wrapper.timeIntervalName) && alwaysDisplayTimeIntervals.includes(wrapper.timeIntervalName))
			);
	}
}
