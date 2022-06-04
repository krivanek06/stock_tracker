import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';

export const sumUpPortfolio = (portfolioSnapshot?: api.STPortfolioSnapshot | null): number | null => {
	if (!portfolioSnapshot) {
		return null;
	}
	return portfolioSnapshot.portfolioCash + portfolioSnapshot.portfolioInvested;
};

export const getPortfolioChangeData = (
	currentSnapshot: api.STPortfolioSnapshot,
	historicalSnapshot?: api.STPortfolioSnapshot | null
): api.STPortfolioChangeData | null => {
	if (!historicalSnapshot) {
		return null;
	}
	const currentSnapshotSum = currentSnapshot.portfolioInvested + currentSnapshot.portfolioCash;
	const historicalSnapshotSum = historicalSnapshot.portfolioCash + historicalSnapshot.portfolioInvested;

	const portfolioIncreaseNumber = Number(currentSnapshotSum - historicalSnapshotSum);
	const lastPortfolioIncreasePrct = Number((currentSnapshotSum - historicalSnapshotSum) / historicalSnapshotSum);

	return {
		portfolioBalance: historicalSnapshotSum,
		portfolioCash: historicalSnapshot.portfolioCash,
		portfolioInvested: historicalSnapshot.portfolioInvested,
		portfolioIncreaseNumber: !isNaN(portfolioIncreaseNumber) && historicalSnapshotSum !== 0 ? Number(portfolioIncreaseNumber.toFixed(2)) : 0,
		portfolioIncreasePrct: !isNaN(lastPortfolioIncreasePrct) && historicalSnapshotSum !== 0 ? Number(lastPortfolioIncreasePrct.toFixed(4)) : 0,
	};
};

export const calculatePortfolioIncreasePrct = (latestPortfolio: api.STPortfolioSnapshot, weekSoonerPortfolio: api.STPortfolioSnapshot): number => {
	const previousBalance = weekSoonerPortfolio.portfolioCash + weekSoonerPortfolio.portfolioInvested;
	const currentBalance = latestPortfolio.portfolioCash + latestPortfolio.portfolioInvested;
	const lastPortfolioIncreasePrct = Number((currentBalance - previousBalance) / previousBalance);
	return lastPortfolioIncreasePrct;
};

export const calculatePortfolioChange = (portfolioSnapshots: api.STPortfolioSnapshot[]): api.STPortfolioChange => {
	const dummyData = () => {
		return {
			day_1_change: null,
			week_1_change: null,
			week_2_change: null,
			week_3_change: null,
			month_1_change: null,
			month_2_change: null,
			month_3_change: null,
			month_6_change: null,
			year_1_change: null,
			from_beginning_change: null,
		};
	};

	try {
		if (portfolioSnapshots.length < 2) {
			return dummyData();
		}
		const today: moment.Moment = moment();
		const reverseSnapshots = [...portfolioSnapshots].reverse();

		const current = reverseSnapshots[0];
		const day_1_portfolio = reverseSnapshots[1];
		const week_1_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'days') === 7);
		const week_2_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'days') === 14);
		const week_3_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'days') === 21);
		const month_1_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') === 1);
		const month_2_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') === 2);
		const month_3_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') === 3);
		const month_6_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'months') === 6);
		const year_1_portfolio = reverseSnapshots.find((change) => today.diff(moment(change.date), 'years') === 1);
		const from_beginning_portfolio = api.STARTING_PORTFOLIO;

		const day_1_change = getPortfolioChangeData(current, day_1_portfolio);
		const week_1_change = getPortfolioChangeData(current, week_1_portfolio);
		const week_2_change = getPortfolioChangeData(current, week_2_portfolio);
		const week_3_change = getPortfolioChangeData(current, week_3_portfolio);
		const month_1_change = getPortfolioChangeData(current, month_1_portfolio);
		const month_2_change = getPortfolioChangeData(current, month_2_portfolio);
		const month_3_change = getPortfolioChangeData(current, month_3_portfolio);
		const month_6_change = getPortfolioChangeData(current, month_6_portfolio);
		const year_1_change = getPortfolioChangeData(current, year_1_portfolio);
		const from_beginning_change = getPortfolioChangeData(current, {
			portfolioInvested: 0,
			portfolioCash: from_beginning_portfolio,
			date: new Date().toDateString(),
		});

		return {
			day_1_change,
			week_1_change,
			week_2_change,
			week_3_change,
			month_1_change,
			month_2_change,
			month_3_change,
			month_6_change,
			year_1_change,
			from_beginning_change,
		};
	} catch (e) {
		return dummyData();
	}
};
