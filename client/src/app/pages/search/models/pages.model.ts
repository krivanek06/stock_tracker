import { NameValueContainer } from '@shared';

export enum SEARCH_PAGE_ENUM {
	GROUP = 'group',
	USER = 'user',
	STOCK = 'stock',
	STOCK_DETAILS = 'stock-details',
}

export enum SEARCH_PAGE_STOCK_DETAILS_ENUM {
	STATISTICS = 'statistics',
	FINANCIALS = 'financials',
	STRATEGIES = 'strategies',
	VALUATION = 'valuation',
	KEY_METRICS = 'key-metrics',
	FiNANCIAL_RATIOS = 'financial-ratios',
	FINANCIAL_GROWTH = 'financial-growth'
}

export enum STATEMENT_TYPE {
	BALANCE_SHEET = 'Balance sheet',
	INCOME_STATEMENT = 'Income statement',
	CASH_FLOW = 'Cash flow',
}

export const STOCK_SEARCH_DETAILS_PAGES: NameValueContainer[] = [
	{ name: 'Statistics', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS },
	{ name: 'Financials', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIALS },
	{ name: 'Key metrics', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.KEY_METRICS },
	{ name: 'Financial ratios', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.FiNANCIAL_RATIOS },
	{ name: 'Financial growth', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIAL_GROWTH },
	{ name: 'Valuation', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.VALUATION },
];

export const STOCK_SEARCH_DETAILS_FINANCIAL_PAGES: NameValueContainer[] = [
	{ name: 'Balance sheet', value: STATEMENT_TYPE.BALANCE_SHEET },
	{ name: 'Cash flow', value: STATEMENT_TYPE.CASH_FLOW },
	{ name: 'Income statement', value: STATEMENT_TYPE.INCOME_STATEMENT },
];
