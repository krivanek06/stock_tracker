import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
	GraphqlQueryService,
	GraphqlTradingService,
	STARTING_PORTFOLIO,
	StPortfolioSnapshot,
	StTransactionInput,
	Summary,
	UserStorageService,
} from '@core';
import { ChartType, DialogService, GenericChartSeries, LodashService, zipArrays } from '@shared';
import * as moment from 'moment';
import { firstValueFrom, map, Observable } from 'rxjs';
import { TradeConfirmationPopOverComponent } from '../entry-components';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM } from '../models';

@Injectable({
	providedIn: 'root',
})
export class TradingFeatureFacadeService {
	constructor(
		private dialog: MatDialog,
		private graphqlTradingService: GraphqlTradingService,
		private userStorageService: UserStorageService,
		private graphqlQueryService: GraphqlQueryService
	) {}

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

		const data = (await dialogRef.afterClosed().toPromise()) as StTransactionInput;
		if (!!data) {
			DialogService.showNotificationBar(`Your order has been submitted to ${data.operation} symbol: ${data.symbol}`, 'notification');
			await firstValueFrom(this.graphqlTradingService.performTransaction(data));
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

	comparePortfolioWithIndexes(stPortfolioSnapshots: StPortfolioSnapshot[]): Observable<GenericChartSeries[]> {
		return this.graphqlQueryService.querySymbolHistoricalPrices('^GSPC', '6m').pipe(
			map((res) => {
				// acceptedTimestamps has older values, because exclude weekends, but this.stPortfolioSnapshots has weekends
				const acceptedTimestamps = LodashService.takeRight(
					res.price.map((p) => moment(p[0])),
					stPortfolioSnapshots.length
				);
				// get only data on balance where day is same as fot S&P 500, exclude weekends
				const portfolioBalance = stPortfolioSnapshots
					.filter((value) => {
						const momentTImestamp = moment(value.date);
						return acceptedTimestamps.some((t) => t.isSame(momentTImestamp, 'day'));
					})
					.map((x) => x.portfolioCash + x.portfolioInvested);

				// shrink acceptedTimestamps to same length as portfolioBalance
				const portfolioTimestamps = LodashService.takeRight(
					acceptedTimestamps.map((t) => t.valueOf()),
					portfolioBalance.length
				);

				// chart options
				return [
					{
						type: ChartType.line,
						name: 'My portfolio',
						data: LodashService.zipArrays(portfolioTimestamps, portfolioBalance) as number[][],
						color: '#22aad9',
						lineWidth: 3,
					},
					{
						type: ChartType.line,
						name: 'S&P 500',
						color: '#e34c1a',
						lineWidth: 3,
						data: LodashService.takeRight(
							res.price.map((x) => [x[0], x[4]]),
							portfolioBalance.length
						) as number[][],
					},
				];
			})
		);
	}
}
