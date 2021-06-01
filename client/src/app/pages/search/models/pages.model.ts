import {NameValueContainer} from '@shared';

export enum SEARCH_PAGE_ENUM {
    GROUP = 'group',
    USER = 'user',
    STOCK = 'stock',
}

export enum SEARCH_PAGE_STOCK_ENUM {
    SUMMARY = 'summary',
    DETAILS = 'details'
}

export enum SEARCH_PAGE_STOCK_DETAILS_ENUM {
    STATISTICS = 'statistics',
    FINANCIALS = 'financials',
    STRATEGIES = 'strategies',
    VALUATION = 'valuation'
}

export enum STATEMENT_TYPE {
    BALANCE_SHEET = 'Balance sheet',
    INCOME_STATEMENT = 'Income statement',
    CASH_FLOW = 'Cash flow'
}


export const STOCK_SEARCH_DETAILS_PAGES: NameValueContainer[] = [
    {name: 'Statistics', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS},
    {name: 'Financials', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIALS},
    {name: 'Strategies', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.STRATEGIES},
    {name: 'Valuation', value: SEARCH_PAGE_STOCK_DETAILS_ENUM.VALUATION}
]

export const STOCK_SEARCH_DETAILS_FINANCIAL_PAGES: NameValueContainer[] = [
    {name: 'Balance sheet', value: STATEMENT_TYPE.BALANCE_SHEET},
    {name: 'Cash flow', value: STATEMENT_TYPE.CASH_FLOW},
    {name: 'Income statement', value: STATEMENT_TYPE.INCOME_STATEMENT}
]
