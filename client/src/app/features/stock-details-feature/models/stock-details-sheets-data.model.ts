import { StfmBalanceSheetFragmentFragment, StfmCashFlowFragmentFragment, StfmIncomeStatementFragmentFragment } from '@core';

export type StockDetailsSheetType = StfmBalanceSheetFragmentFragment | StfmCashFlowFragmentFragment | StfmIncomeStatementFragmentFragment;

export interface SheetDataContainer<T extends StockDetailsSheetType> {
	name: string;
	data: keyof T;
	isPercent?: boolean;
}

export const IncomeStatementSheetDataContainer: SheetDataContainer<StfmIncomeStatementFragmentFragment>[] = [
	{ name: 'Revenue', data: 'revenue' },

	// income
	{ name: 'Gross profit', data: 'grossProfit' },
	{ name: 'Gross profit ratio', data: 'grossProfitRatio' },
	{ name: 'Income before tax', data: 'incomeBeforeTax' },
	{ name: 'Income before tax ratio', data: 'incomeBeforeTaxRatio' },
	{ name: 'Income tax expense', data: 'incomeTaxExpense' },
	{ name: 'Income interest', data: 'interestIncome' },
	{ name: 'Income (net)', data: 'netIncome' },
	{ name: 'Income (net) ratio', data: 'netIncomeRatio' },
	{ name: 'Income operating', data: 'operatingIncome' },
	{ name: 'Income operating ratio', data: 'operatingIncomeRatio' },

	// cost
	{ name: 'Cost of revenue', data: 'costOfRevenue' },
	{ name: 'Cost and expenses', data: 'costAndExpenses' },
	{ name: 'General and administrative expenses', data: 'generalAndAdministrativeExpenses' },
	{ name: 'Interest expense', data: 'interestExpense' },
	{ name: 'Operating expenses', data: 'operatingExpenses' },
	{ name: 'Research and development expenses', data: 'researchAndDevelopmentExpenses' },
	{ name: 'Other expenses', data: 'otherExpenses' },
	{ name: 'Other income expense', data: 'totalOtherIncomeExpensesNet' },
	{ name: 'Selling and marketing expenses', data: 'sellingAndMarketingExpenses' },
	{ name: 'Selling general and administrative expenses', data: 'sellingGeneralAndAdministrativeExpenses' },
	{ name: 'Depreciation and amortization', data: 'depreciationAndAmortization' },

	// other
	{ name: 'EBITDA', data: 'ebitda' },
	{ name: 'EBITDA ratio', data: 'ebitdaratio' },
	{ name: 'EPS', data: 'eps' },
	{ name: 'EPS diluted', data: 'epsdiluted' },
	{ name: 'Shares outstanding', data: 'weightedAverageShsOut' },
];

export const CashFlowSheetDataContainer: SheetDataContainer<StfmCashFlowFragmentFragment>[] = [
	{ name: 'Accounts payables', data: 'accountsPayables' },
	{ name: 'Accounts receivables', data: 'accountsReceivables' },
	{ name: 'Acquisitions', data: 'acquisitionsNet' },
	{ name: 'Operating activities', data: 'netCashProvidedByOperatingActivities' },
	{ name: 'Investing activities', data: 'netCashUsedForInvestingActivites' },
	{ name: 'Investing activities (other)', data: 'otherInvestingActivites' },
	{ name: 'Financing activities', data: 'netCashUsedProvidedByFinancingActivities' },
	{ name: 'Financial activities (other)', data: 'otherFinancingActivites' },
	{ name: 'Change in cash', data: 'netChangeInCash' },
	{ name: 'Net income', data: 'netIncome' },
	{ name: 'Free cash flow', data: 'freeCashFlow' },
	{ name: 'Cash at beginning', data: 'cashAtBeginningOfPeriod' },
	{ name: 'Cash at end', data: 'cashAtEndOfPeriod' },
	{ name: 'Stock based compensation', data: 'stockBasedCompensation' },
	{ name: 'Common stock issued', data: 'commonStockIssued' },
	{ name: 'Common stock repurchased', data: 'commonStockRepurchased' },
	{ name: 'Capital expenditure', data: 'capitalExpenditure' },
	{ name: 'Working capital (change)', data: 'changeInWorkingCapital' },
	{ name: 'Working capital (other)', data: 'otherWorkingCapital' },
	{ name: 'Debt repayment', data: 'debtRepayment' },
	{ name: 'Deferred income tax', data: 'deferredIncomeTax' },
	{ name: 'Depreciation and amortization', data: 'depreciationAndAmortization' },
	{ name: 'Dividends paid', data: 'dividendsPaid' },
	{ name: 'Inventory', data: 'inventory' },
	{ name: 'Sales maturities of investments', data: 'salesMaturitiesOfInvestments' },
	{ name: 'Purchases of investments', data: 'purchasesOfInvestments' },
	{ name: 'Investments in property plant and equipment', data: 'investmentsInPropertyPlantAndEquipment' },
	{ name: 'Non cash items (other)', data: 'otherNonCashItems' },
];

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

	// tax
	{ name: 'Tax assets', data: 'taxAssets' },
	{ name: 'Tax payables', data: 'taxPayables' },
	{ name: 'Retained earnings', data: 'retainedEarnings' },

	// other
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
