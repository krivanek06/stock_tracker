import { ApolloError } from 'apollo-server';
import { chunk as _chunk, flatten as _flatten } from 'lodash';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { financialModelingAPI, financialModelingAPIKey } from '../../environment';

const fetch = require('node-fetch');

// example: https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?apikey=795742ba1ec2f519ffa9ea50967d2240
export const getHistoricalPricesAPI = async (symbol: string, timeInterval: string): Promise<api.STFMHistoricalPrices[]> => {
	try {
		if (!['1min', '5min', '15min', '30min', '1hour', '4hour'].includes(timeInterval)) {
			return new Promise([] as any);
		}
		const promise = await fetch(`${financialModelingAPI}/api/v3/historical-chart/${timeInterval}/${symbol}?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMHistoricalPrices[];
		return respose.reverse();
	} catch {
		return [];
	}
};

// example: https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12&apikey=795742ba1ec2f519ffa9ea50967d2240
export const getHistoricalDailyPricesAPI = async (symbol: string, timeInterval: string): Promise<api.STFMHistoricalDailyPrices[]> => {
	try {
		if (!['1y', '5y', 'all', '6m'].includes(timeInterval)) {
			return new Promise([] as any);
		}

		const startTimeInterval = (timeInterval === 'all' ? '100y' : timeInterval).slice(0, -1); // remove 'y'

		const today = moment().format('YYYY-MM-DD');
		const unit = ['6m'].includes(timeInterval) ? 'months' : 'years';
		const start = moment().subtract(Number(startTimeInterval), unit).format('YYYY-MM-DD');

		const promise = await fetch(
			`${financialModelingAPI}/api/v3/historical-price-full/${symbol}?from=${start}&to=${today}&apikey=${financialModelingAPIKey}`
		);
		const respose = await promise.json();
		const result = respose['historical'] as api.STFMHistoricalDailyPrices[];
		return result.reverse();
	} catch {
		return [];
	}
};

export const getLivePriceAPI = async (symbol: string): Promise<api.STFMLivePrice> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/quote-short/${symbol}?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMLivePrice[];
		return respose[0];
	} catch {
		return null as any;
	}
};

export const getCompanyQuoteBatch = async (symbols: string[] = []): Promise<api.STFMCompanyQuote[]> => {
	try {
		if (symbols.length === 0 || symbols.length > 25) {
			return [];
		}

		const promise = await fetch(`${financialModelingAPI}/api/v3/quote/${symbols.join(',')}?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCompanyQuote[];

		respose.forEach((company) => (company.image = `https://financialmodelingprep.com/image-stock/${company.symbol}.png`));

		// sort items as input symbols were
		respose.sort((a, b) => symbols.indexOf(a.symbol) - symbols.indexOf(b.symbol));

		return respose;
	} catch {
		return [];
	}
};

export const getMostActiveStocks = async (): Promise<api.STFMTopStocks[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/actives?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMTopStocks[];
		return respose;
	} catch {
		return [];
	}
};

export const getTopGainersStocks = async (): Promise<api.STFMTopStocks[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/gainers?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMTopStocks[];
		return respose;
	} catch {
		return [];
	}
};

export const getTopLosersStocks = async (): Promise<api.STFMTopStocks[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/losers?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMTopStocks[];
		return respose;
	} catch {
		return [];
	}
};

export const getNews = async (symbol?: string): Promise<api.STFMStockNew[]> => {
	try {
		const tickerParam = symbol ? `&tickers=${symbol}` : '';
		const promise = await fetch(`${financialModelingAPI}/api/v3/stock_news?limit=50${tickerParam}&apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMStockNew[];
		return respose;
	} catch {
		return [];
	}
};

export const getExchangeSectorPE = async (exchange: string = 'NYSE'): Promise<api.STFMExchangeSectorPE[]> => {
	try {
		const today = moment().format('YYYY-MM-DD');
		const promise = await fetch(
			`${financialModelingAPI}/api/v4/sector_price_earning_ratio?date=${today}&exchange=${exchange}&apikey=${financialModelingAPIKey}`
		);
		const respose = (await promise.json()) as api.STFMExchangeSectorPE[];
		return respose;
	} catch {
		return [];
	}
};

export const getExchangeIndustryPE = async (exchange: string = 'NYSE'): Promise<api.STFMExchangeIndustryPE[]> => {
	try {
		const today = moment().format('YYYY-MM-DD');
		const promise = await fetch(
			`${financialModelingAPI}/api/v4/industry_price_earning_ratio?date=${today}&exchange=${exchange}&apikey=${financialModelingAPIKey}`
		);
		const respose = (await promise.json()) as api.STFMExchangeIndustryPE[];
		return respose;
	} catch {
		return [];
	}
};

export const getCommodity = async (): Promise<api.STFMCompanyQuote[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/quotes/commodity?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCompanyQuote[];
		return respose;
	} catch {
		return [];
	}
};

export const getEtf = async (): Promise<api.STFMCompanyQuote[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/quotes/etf?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCompanyQuote[];
		return respose;
	} catch {
		return [];
	}
};

export const getMutualFund = async (): Promise<api.STFMCompanyQuote[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/quotes/mutual_fund?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCompanyQuote[];
		return respose;
	} catch {
		return [];
	}
};

export const getCalendarEarnings = async (): Promise<api.STFMCalendarEarnings[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/earning_calendar?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCalendarEarnings[];
		return respose;
	} catch {
		return [];
	}
};

export const getCalendarIpo = async (): Promise<api.STFMCalendarIpo[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/ipo_calendar?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCalendarIpo[];
		return respose;
	} catch {
		return [];
	}
};

export const getCalendarSplit = async (startDate: string = ''): Promise<api.STFMSplitHistory[]> => {
	try {
		const today = moment().format('YYYY-MM-DD');
		const start = startDate || moment().subtract(1, 'years').format('YYYY-MM-DD');

		const promise = await fetch(`${financialModelingAPI}/api/v3/stock_split_calendar?from=${start}&to=${today}apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMSplitHistory[];
		return respose;
	} catch {
		return [];
	}
};

export const getCalendarDividend = async (): Promise<api.STFMStockDividend[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/stock_dividend_calendar?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMStockDividend[];
		return respose;
	} catch {
		return [];
	}
};

export const getCalendarEconomic = async (): Promise<api.STFMCalendarEconomic[]> => {
	try {
		const today = moment().format('YYYY-MM-DD');
		const start = moment().subtract(1, 'weeks').format('YYYY-MM-DD');

		const promise = await fetch(`${financialModelingAPI}/api/v3/economic_calendar?from=${start}&to=${today}&apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMCalendarEconomic[];
		return respose;
	} catch {
		return [];
	}
};

export const getEtfHolders = async (etfSymbol: string): Promise<api.STFMEtfHolder[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/etf-holder/${etfSymbol}?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMEtfHolder[];
		return respose;
	} catch {
		return [];
	}
};

export const getEtfSectorWeight = async (etfSymbol: string): Promise<api.STFMEtfSectorWeight[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/etf-sector-weightings/${etfSymbol}?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMEtfSectorWeight[];
		return respose;
	} catch {
		return [];
	}
};

export const getEtfCountryWeight = async (etfSymbol: string): Promise<api.STFMEtfCountryWeight[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/etf-country-weightings/${etfSymbol}?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMEtfCountryWeight[];
		return respose;
	} catch {
		return [];
	}
};
export const getSectorPerformance = async (): Promise<api.STFMSectorPerformance[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/sectors-performance?apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMSectorPerformance[];
		return respose;
	} catch {
		return [];
	}
};

export const stockScreener = async (stockScreener: api.STFMStockScreener, limit = 100000000): Promise<api.STFMStockScreenerResult[]> => {
	try {
		const urlParams = new URLSearchParams(Object.entries(stockScreener));
		const promise = await fetch(`${financialModelingAPI}/api/v3/stock-screener?${urlParams}&limit=${limit}&apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMStockScreenerResult[];
		return respose;
	} catch {
		return [];
	}
};

export const queryStockScreener = async (
	stockScreenerInput: api.STFMStockScreener,
	offset: number,
	limit: number
): Promise<{ result: api.STFMStockScreenerResult[]; found: number; offset: number; limit: number }> => {
	try {
		const stockScreeners = await stockScreener(stockScreenerInput);
		const slicedStockScreeners = stockScreeners.slice(offset, offset + limit);

		// load additional data
		const symbols = _chunk(
			slicedStockScreeners.map((data) => data.symbol),
			20
		) as string[][];
		const companyQuotesPromises = _flatten(await Promise.all([...symbols.map((d) => getCompanyQuoteBatch(d))])) as api.STFMCompanyQuote[];
		const result = slicedStockScreeners.map((screener) => {
			return { ...screener, companyQuote: companyQuotesPromises.find((d) => d.symbol === screener.symbol) } as api.STFMStockScreenerResult;
		});

		return { result, found: stockScreeners.length, offset, limit };
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const searchSymbolsByPrefix = async (prefix: string): Promise<api.STFMCompanyQuote[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/search-ticker?query=${prefix}&limit=10&apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMSymbolearch[];
		const symbols = respose.map((r) => r.symbol);

		return getCompanyQuoteBatch(symbols);
	} catch {
		return [];
	}
};

export const getFinancialRatios = async (symbol: string, period: 'quarter' | 'year' = 'quarter', limit: number = 30): Promise<api.STFMRatios[]> => {
	try {
		const promise = await fetch(`${financialModelingAPI}/api/v3/ratios/${symbol}?period=${period}&limit=${limit}&apikey=${financialModelingAPIKey}`);
		const respose = (await promise.json()) as api.STFMRatios[];

		return respose;
	} catch {
		return [];
	}
};

export const getEnterpriseValues = async (
	symbol: string,
	period: 'quarter' | 'year' = 'quarter',
	limit: number = 30
): Promise<api.STFMEnterpriseValue[]> => {
	try {
		const promise = await fetch(
			`${financialModelingAPI}/api/v3/enterprise-values/${symbol}?period=${period}&limit=${limit}&apikey=${financialModelingAPIKey}`
		);
		const respose = (await promise.json()) as api.STFMEnterpriseValue[];

		return respose;
	} catch {
		return [];
	}
};

export const getKeyMetrics = async (symbol: string, period: 'quarter' | 'year' = 'quarter', limit: number = 30): Promise<api.STFMKeyMetrics[]> => {
	try {
		const promise = await fetch(
			`${financialModelingAPI}/api/v3/key-metrics/${symbol}?period=${period}&limit=${limit}&apikey=${financialModelingAPIKey}`
		);
		const respose = (await promise.json()) as api.STFMKeyMetrics[];

		return respose;
	} catch {
		return [];
	}
};

export const getFinancialGrowth = async (
	symbol: string,
	period: 'quarter' | 'year' = 'quarter',
	limit: number = 30
): Promise<api.STFMFinancialGrowth[]> => {
	try {
		const promise = await fetch(
			`${financialModelingAPI}/api/v3/financial-growth/${symbol}?period=${period}&limit=${limit}&apikey=${financialModelingAPIKey}`
		);
		const respose = (await promise.json()) as api.STFMFinancialGrowth[];

		return respose;
	} catch {
		return [];
	}
};
