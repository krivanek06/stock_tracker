export interface StockDetailsDisplayValue {
    name: string;
    id: string;
    isPercent?: boolean;
}

export const StockDetailsFinancialGrowthDisplay: StockDetailsDisplayValue[] = [
    { id: 'revenueGrowth', name: 'Revenue growth', isPercent: true },
    { id: 'assetGrowth', name: 'Assets growth', isPercent: true },
    { id: 'debtGrowth', name: 'Debt growth', isPercent: true },

    { id: 'grossProfitGrowth', name: 'Gross profit growth', isPercent: true },
    { id: 'netIncomeGrowth', name: 'Net income growth', isPercent: true },
    { id: 'operatingIncomeGrowth', name: 'Operating income growth', isPercent: true },

    { id: 'freeCashFlowGrowth', name: 'Free cash flow growth', isPercent: true },
    { id: 'operatingCashFlowGrowth', name: 'Operating cash flow growth', isPercent: true },
    { id: 'bookValueperShareGrowth', name: 'Book value per share growth', isPercent: true },

    { id: 'ebitgrowth', name: 'EBIT growth', isPercent: true },
    { id: 'epsgrowth', name: 'EPS growth', isPercent: true },
    { id: 'dividendsperShareGrowth', name: 'Dividends per share growth', isPercent: true },
    //{ id: 'epsdilutedGrowth', name: 'EPS diluted growth', isPercent: true },

    { id: 'receivablesGrowth', name: 'Receivables growth', isPercent: true },
    { id: 'inventoryGrowth', name: 'Inventory growth', isPercent: true },

    { id: 'rdexpenseGrowth', name: 'Research & development expenses', isPercent: true },

    { id: 'sgaexpensesGrowth', name: 'Selling, general & administrative expenses', isPercent: true },

    { id: 'weightedAverageSharesGrowth', name: 'Weighted avg. shares growth', isPercent: true },
    { id: 'weightedAverageSharesDilutedGrowth', name: 'Weighted avg. shares diluted growth', isPercent: true },



    { id: 'tenYRevenueGrowthPerShare', name: '10y revenue per share growth', isPercent: true },
    { id: 'fiveYRevenueGrowthPerShare', name: '5y revenue per share growth', isPercent: true },
    { id: 'threeYRevenueGrowthPerShare', name: '3y revenue per share growth', isPercent: true },

    { id: 'tenYOperatingCFGrowthPerShare', name: '10y operating CF per share growth', isPercent: true },
    { id: 'fiveYOperatingCFGrowthPerShare', name: '5y operating CF per share growth', isPercent: true },
    { id: 'threeYOperatingCFGrowthPerShare', name: '3y operating CF per share growth', isPercent: true },

    { id: 'tenYNetIncomeGrowthPerShare', name: '10y net income per share growth', isPercent: true },
    { id: 'fiveYNetIncomeGrowthPerShare', name: '5y net income per share growth', isPercent: true },
    { id: 'threeYNetIncomeGrowthPerShare', name: '3y net income per share growth', isPercent: true },

    { id: 'tenYShareholdersEquityGrowthPerShare', name: '10y shareholder equity per share growth', isPercent: true },
    { id: 'fiveYShareholdersEquityGrowthPerShare', name: '5y shareholder equity per share growth', isPercent: true },
    { id: 'threeYShareholdersEquityGrowthPerShare', name: '3y shareholder equity per share growth', isPercent: true },

    { id: 'tenYDividendperShareGrowthPerShare', name: '10y dividend per share growth', isPercent: true },
    { id: 'fiveYDividendperShareGrowthPerShare', name: '5y dividend per share growth', isPercent: true },
    { id: 'threeYDividendperShareGrowthPerShare', name: '3y dividend per share growth', isPercent: true },

]

export const StockDetailsFinancialRatiosDisplay: StockDetailsDisplayValue[] = [
    { id: 'currentRatio', name: 'Current ratio' },
    { id: 'quickRatio', name: 'Quick ratio' },
    { id: 'cashRatio', name: 'Cash ratio' },
    { id: 'grossProfitMargin', name: 'Gross profit margin', isPercent: true },
    { id: 'operatingProfitMargin', name: 'Pretax profit margin', isPercent: true },
    { id: 'pretaxProfitMargin', name: 'Pretax profit margin', isPercent: true },
    { id: 'netProfitMargin', name: 'Net profit margin', isPercent: true },
    { id: 'enterpriseValueMultiple', name: 'Enterprise value multiple' },
    { id: 'effectiveTaxRate', name: 'Effective tax rate', isPercent: true },
    { id: 'returnOnAssets', name: 'Return on assets', isPercent: true },
    { id: 'returnOnEquity', name: 'Return on equity', isPercent: true },
    { id: 'returnOnCapitalEmployed', name: 'Return on capital employed', isPercent: true },
    { id: 'netIncomePerEBT', name: 'Net income per EBT' },
    { id: 'ebtPerEbit', name: 'Earning before tax per EBIT' },
    { id: 'ebitPerRevenue', name: 'EBIT per revenue' },
    { id: 'debtRatio', name: 'Debt ratio' },
    { id: 'debtEquityRatio', name: 'Debt equity ratio' },
    { id: 'longTermDebtToCapitalization', name: 'Long term debt to capitalization' },
    { id: 'totalDebtToCapitalization', name: 'Total debt to capitalization' },
    { id: 'interestCoverage', name: 'Interest coverage' },
    { id: 'cashFlowToDebtRatio', name: 'Cash flow to debt' },
    { id: 'companyEquityMultiplier', name: 'Company equity multiplier' },
    { id: 'receivablesTurnover', name: 'Receivables turnover' },
    { id: 'payablesTurnover', name: 'Payables turnover' },
    { id: 'inventoryTurnover', name: 'Inventory turnover' },
    { id: 'fixedAssetTurnover', name: 'Fixed asset turnover' },
    { id: 'operatingCashFlowPerShare', name: 'Operating cash flow per share' },
    { id: 'freeCashFlowPerShare', name: 'Cash flow per share' },
    { id: 'cashPerShare', name: 'Cash per share' },
    { id: 'operatingCashFlowSalesRatio', name: 'Operating cash flow sales ratio' },
    { id: 'freeCashFlowOperatingCashFlowRatio', name: 'FCF operating cash flow ratio' },
    { id: 'cashFlowCoverageRatios', name: 'Cash flow coverage ratio' },
    { id: 'shortTermCoverageRatios', name: 'Short term coverage ratio' },
    { id: 'capitalExpenditureCoverageRatio', name: 'Capital expenditure coverage ratio' },
    { id: 'dividendPaidAndCapexCoverageRatio', name: 'Dividend paid and Capex coverage ratio' },
    { id: 'dividendPayoutRatio', name: 'Dividend payout ratio' },
    { id: 'priceBookValueRatio', name: 'Price to book value ratio' },
    { id: 'priceToSalesRatio', name: 'Price to sales ratio' },
    { id: 'priceEarningsRatio', name: 'Price to earnings ratio' },
    { id: 'priceToFreeCashFlowsRatio', name: 'Price to free cash flow ratio' },
    { id: 'priceToOperatingCashFlowsRatio', name: 'Price to operating cash flow ratio' },
    { id: 'priceEarningsToGrowthRatio', name: 'Earnings to growth ratio' }
    // { id: 'dividendYield', name: 'Dividend yield' },
];

export const StockDetailsKeyMetricsDisplay: StockDetailsDisplayValue[] = [
    { id: 'revenuePerShare', name: 'Revenue per share' },
    { id: 'marketCap', name: 'Market cap.' },
    { id: 'enterpriseValue', name: 'Enterprise value' },

    { id: 'peRatio', name: 'PE ratio' },
    { id: 'cashPerShare', name: 'Cash per share' },
    { id: 'bookValuePerShare', name: 'Book value per share' },

    { id: 'netIncomePerShare', name: 'Net income per share' },
    { id: 'operatingCashFlowPerShare', name: 'Operating cash flow per share' },
    { id: 'freeCashFlowPerShare', name: 'Free cash flow per share' },

    { id: 'priceToSalesRatio', name: 'Price to sales ratio' },
    { id: 'pfcfRatio', name: 'Price to cash flow ratio' },
    { id: 'pbRatio', name: 'Price to book ratio' },


    { id: 'currentRatio', name: 'Current ratio' },
    { id: 'roic', name: 'Return on invested capital', isPercent: true },
    { id: 'roe', name: 'Return on equity', isPercent: true },


    { id: 'debtToEquity', name: 'Debt to equity', isPercent: true },
    { id: 'debtToAssets', name: 'Debt to assets', isPercent: true },
    { id: 'interestDebtPerShare', name: 'Interest debt per share' },


    { id: 'netDebtToEBITDA', name: 'Net debt to EBITDA', isPercent: true },
    { id: 'interestCoverage', name: 'Interest coverage' },
    { id: 'workingCapital', name: 'Working capital' },


    { id: 'evToSales', name: 'EV to sales' },
    { id: 'enterpriseValueOverEBITDA', name: 'EV over EBITDA' },
    { id: 'evToOperatingCashFlow', name: 'EV to operating cash flow' },


    { id: 'evToFreeCashFlow', name: 'EV to free cash flow' },
    //{ id: 'earningsYield', name: 'Earning yield', isPercent: true },
    { id: 'investedCapital', name: 'Invested capital', isPercent: true },
    { id: 'freeCashFlowYield', name: 'Free cash flow yield', isPercent: true },


    { id: 'incomeQuality', name: 'Income quality' },
    { id: 'salesGeneralAndAdministrativeToRevenue', name: 'Sales, general & Administration to Revenue', isPercent: true },
    { id: 'researchAndDdevelopementToRevenue', name: 'Research & development to revenue', isPercent: true },


    { id: 'capexToOperatingCashFlow', name: 'CAPEX to operating cash flow', isPercent: true },
    { id: 'capexToRevenue', name: 'CAPEX to revenue', isPercent: true },
    { id: 'capexToDepreciation', name: 'CAPEX to revenue', isPercent: true },


    { id: 'capexPerShare', name: 'CAPEX per share', isPercent: true },
    { id: 'dividendYield', name: 'Dividend yield', isPercent: true },
    { id: 'payoutRatio', name: 'Payout ratio', isPercent: true },


    { id: 'tangibleAssetValue', name: 'Tangible assets' },
    { id: 'returnOnTangibleAssets', name: 'Return on tangible assets', isPercent: true },
    { id: 'intangiblesToTotalAssets', name: 'Intangibles to total assets', isPercent: true },


    { id: 'averageReceivables', name: 'Average receivables' },
    { id: 'averagePayables', name: 'Average payables' },
    { id: 'averageInventory', name: 'Average inventory' },


    { id: 'netCurrentAssetValue', name: 'Net current assets to value' },
    { id: 'grahamNumber', name: 'Graham number' },
    { id: 'stockBasedCompensationToRevenue', name: 'Stock based compensation to revenue', isPercent: true },


    { id: 'receivablesTurnover', name: 'Receivables turnover', isPercent: true },
    { id: 'payablesTurnover', name: 'Payables turnover', isPercent: true },
    { id: 'inventoryTurnover', name: 'Inventory turnover', isPercent: true },
];
