import {NameValueContainer} from '../../../shared/models/sharedModel';

export enum MARKET_PAGE_ENUM {
    overview = 'overview',
    production = 'production',
    people = 'people',
    dailyChange = 'daily-change',
    crypto = 'crypto'
}

export const MARKET_PAGE_PATH: NameValueContainer[] = [
    {name: 'daily-change', value: MARKET_PAGE_ENUM.dailyChange},
    {name: 'overview', value: MARKET_PAGE_ENUM.overview},
    {name: 'production', value: MARKET_PAGE_ENUM.production},
    {name: 'people', value: MARKET_PAGE_ENUM.people},
    {name: 'crypto', value: MARKET_PAGE_ENUM.crypto}
];


export const MARKET_DAILY_CHANGE_SELECT: NameValueContainer[] = [
    {name: 'Daily top gainers', value: 'stocks_day_gainers'},
    {name: 'Daily top losers', value: 'stocks_day_losers'},
    {name: 'Daily most active', value: 'stocks_day_active'},
    {name: 'Technology growth stocks', value: 'stocks_growth_technology_stocks'},
    {name: 'Undervalued growth stocks', value: 'stocks_undervalued_growth_stocks'},
    {name: 'Undervalued large cap stocks', value: 'stocks_undervalued_large_caps'},
    {name: 'Aggressive small cap stocks', value: 'stocks_aggressive_small_caps'},
    {name: 'Small cap gainers', value: 'stocks_small_cap_gainers'},
];
