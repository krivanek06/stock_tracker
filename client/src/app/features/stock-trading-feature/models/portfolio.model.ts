import { StPortfolioChangeData, StPortfolioChangeFragment } from '@core';

type PortfolioChangeItemsKey = Omit<StPortfolioChangeFragment, '__typename'>;
export interface PortfolioChangeItems {
	displayName: string;
	key: keyof PortfolioChangeItemsKey;
}

export const PortfolioChangeItemsToDisplay: PortfolioChangeItems[] = [
	{ displayName: 'Daily', key: 'day_1_change' },
	{ displayName: '1 Week', key: 'week_1_change' },
	{ displayName: '2 Weeks', key: 'week_2_change' },
	{ displayName: '3 Week', key: 'week_3_change' },
	{ displayName: '1 Month', key: 'month_1_change' },
	{ displayName: '2 Months', key: 'month_2_change' },
	{ displayName: '3 Months', key: 'month_3_change' },
	{ displayName: '6 Months', key: 'month_6_change' },
];

export const STARTED_PORTFOLIO: StPortfolioChangeData = {
	portfolioBalance: 100000,
	portfolioCash: 100000,
	portfolioIncreaseNumber: 0,
	portfolioIncreasePrct: 0,
	portfolioInvested: 0,
};
