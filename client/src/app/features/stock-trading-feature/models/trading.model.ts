export enum TIME_INTERVAL_ENUM {
	CURRENTLY = 'Currently',
	DAILY = 'Daily',
	WEEKLY = 'Weekly',
	MONTHLY = 'Monthly',
	QUARTERLY = 'Quarterly',
	YEARLY = 'Yearly',
	FROM_BEGINNING = 'From beginning',
	STARTED_WITH = 'Started with',
}

export interface PortfolioHistoricalWrapper {
	historicalBalance: number;
	timeIntervalName: TIME_INTERVAL_ENUM;
}

export interface TradingChangeModel {
	growth: number; // ex. 65.45
	change: number; // in %, ex. 12.56%
}

export const STARTING_PORTFOLIO = 25000;
