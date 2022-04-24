import { StfmBalanceSheetFragmentFragment, StfmCashFlowFragmentFragment, StfmIncomeStatementFragmentFragment } from '@core';

export type StockDetailsSheetType = StfmBalanceSheetFragmentFragment | StfmCashFlowFragmentFragment | StfmIncomeStatementFragmentFragment;

export interface SheetDataContainer<T extends StockDetailsSheetType> {
	name: string;
	data: keyof T;
	isPercent?: boolean;
}

// TODO
export const IncomeStatementSheetDataContainer: SheetDataContainer<StfmIncomeStatementFragmentFragment>[] = [];

// TODO
export const CashFlowSheetDataContainer: SheetDataContainer<StfmCashFlowFragmentFragment>[] = [];

export const BalanceSheetDataContainer: SheetDataContainer<StfmBalanceSheetFragmentFragment>[] = [
	{ name: 'Account payables', data: 'accountPayables' },

	// assets
	{ name: 'Total assets', data: 'totalAssets' },
	{ name: 'Total current assets', data: 'totalCurrentAssets' },
	{ name: 'Total assets (non current)', data: 'totalNonCurrentAssets' },
	{ name: 'Other current assets', data: 'otherCurrentAssets' },
	{ name: 'Other assets', data: 'otherAssets' },
	{ name: 'Other Assets (non current)', data: 'otherNonCurrentAssets' },

	// income
	{ name: 'Cash and cash equivalents', data: 'cashAndCashEquivalents' },
	{ name: 'Capital lease obligations', data: 'capitalLeaseObligations' },
	{ name: 'Total investments', data: 'totalInvestments' },
	{ name: 'Long term investments', data: 'longTermInvestments' },
	{ name: 'Accumulated other comprehensive income loss', data: 'accumulatedOtherComprehensiveIncomeLoss' },

	// debt
	{ name: 'Total debt', data: 'totalDebt' },
	{ name: 'Net debt', data: 'netDebt' },
	{ name: 'Long term debt', data: 'longTermDebt' },
	{ name: 'Short term debt', data: 'shortTermDebt' },
	{ name: 'Short term investments', data: 'shortTermInvestments' },

	// liabilities
	{ name: 'Total liabilities', data: 'totalLiabilities' },
	{ name: 'Total current liabilities', data: 'totalCurrentLiabilities' },
	{ name: 'Total liabilities (non current)', data: 'totalNonCurrentLiabilities' },
	{ name: 'Other current liabilities', data: 'otherCurrentLiabilities' },
	{ name: 'Other liabilities', data: 'otherLiabilities' },
	{ name: 'Other liabilities (non current)', data: 'otherNonCurrentLiabilities' },

	// equity
	{ name: 'Total equity', data: 'totalEquity' },
	{ name: 'Total stockholders equity', data: 'totalStockholdersEquity' },
	{ name: 'Total liabilities and total equity', data: 'totalLiabilitiesAndTotalEquity' },
	{ name: 'Total liabilities and stockholders equity', data: 'totalLiabilitiesAndStockholdersEquity' },
	{ name: 'Other total stockholders equity', data: 'othertotalStockholdersEquity' },
	{ name: 'Property plant equipment net', data: 'propertyPlantEquipmentNet' },

	{ name: 'Tax assets', data: 'taxAssets' },
	{ name: 'Tax payables', data: 'taxPayables' },
	{ name: 'Retained earnings', data: 'retainedEarnings' },

	{ name: 'Common stock', data: 'commonStock' },
	{ name: 'Minority interest', data: 'minorityInterest' },
	{ name: 'Net receivables', data: 'netReceivables' },
	{ name: 'Deferred revenue', data: 'deferredRevenue' },
	{ name: 'Deferred revenue (non current)', data: 'deferredRevenueNonCurrent' },
	{ name: 'Deferred tax liabilities (non current)', data: 'deferredTaxLiabilitiesNonCurrent' },
	{ name: 'Goodwill', data: 'goodwill' },
	{ name: 'Goodwill and intangible Assets', data: 'goodwillAndIntangibleAssets' },
	{ name: 'IntangibleAssets', data: 'intangibleAssets' },
	{ name: 'Inventory', data: 'inventory' },
];
