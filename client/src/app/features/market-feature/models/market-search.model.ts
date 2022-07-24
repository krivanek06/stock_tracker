import { InputSource, InputSourceSliderConfig, stFormatLargeNumber } from '@shared';

export const MarketSearchSectors: string[] = [
	'Consumer Cyclical',
	'Energy',
	'Technology',
	'Industrials',
	'Financial Services',
	'Basic Materials',
	'Communication Services',
	'Consumer Defensive',
	'Healthcare',
	'Real Estate',
	'Utilities',
	'Industrial Goods',
	'Financial',
	'Services',
	'Conglomerates',
];

export const MarketSearchIndustries = [
	'Autos',
	'Banks',
	'Banks Diversified',
	'Software',
	'Banks Regional',
	'Beverages Alcoholic',
	'Beverages Brewers',
	'Beverages Non',
	'Alcoholic',
];

export const MarketSearchCountries = [
	'US',
	'CA',
	'BM',
	'FR',
	'IE',
	'MX',
	'RU',
	'CN',
	'IN',
	'HK',
	'AU',
	'NO',
	'SE',
	'GB',
	'NL',
	'ID',
	'IL',
	'KY',
	'SG',
	'DE',
	'CY',
	'BR',
	'BE',
	'NZ',
	'GG',
	'MO',
	'AT',
	'JP',
	'AE',
	'CH',
	'PT',
	'IT',
	'FI',
	'LU',
	'MY',
	'DK',
	'ES',
	'VG',
	'IM',
	'JE',
	'TW',
	'MC',
	'MA',
	'TH',
	'ZA',
	'PR',
	'MN',
	'CL',
	'UY',
	'GR',
	'MU',
	'GI',
	'KR',
	'VN',
	'AR',
	'AZ',
	'CK',
	'LI',
	'MT',
	'CR',
	'PG',
	'ZM',
	'TR',
	'DO',
	'KH',
	'PE',
	'CO',
	'PA',
	'VI',
	'UA',
	'TG',
	'TC',
	'JO',
	'BS',
	'IS',
	'CW',
	'PH',
	'FK',
	'SK',
	'GA',
	'GE',
	'BD',
	'AI',
	'NG',
	'BG',
	'LT',
	'BB',
	'SN',
];
export const MarketSearchExchanges = ['nyse', 'nasdaq', 'amex', 'euronext', 'tsx', 'etf', 'mutual_fund'];
export const MarketSearchEtf = ['Only ETF', 'No ETF'];
export const MarketSearchActivelyTraded = ['Only actively traded', 'No actively traded'];

export const marketSearchSectorsInputSource: InputSource[] = MarketSearchSectors.map((data) => {
	return { caption: data, value: data };
});
export const marketSearchIndustriesInputSource: InputSource[] = MarketSearchIndustries.map((data) => {
	return { caption: data, value: data };
});
export const marketSearchCountriesInputSource: InputSource[] = MarketSearchCountries.map((data) => {
	return { caption: data, value: data };
});
export const marketSearchExchangesInputSource: InputSource[] = MarketSearchExchanges.map((data) => {
	return { caption: data.replace('_', ' '), value: data };
});
export const marketSearchEtfInputSource: InputSource[] = MarketSearchEtf.map((data, index) => {
	return { caption: data, value: index === 0 };
});
export const marketSearchActivelyTradedInputSource: InputSource[] = MarketSearchActivelyTraded.map((data, index) => {
	return { caption: data, value: index === 0 };
});

export const marketSearchFormConfig: { [key: string]: InputSourceSliderConfig } = {
	price: {
		max: 1000,
		min: 1,
		step: 1,
		thumbNailFormatter: (value: number) => stFormatLargeNumber(value, false, true),
	},
	marketCap: {
		max: 500000000000,
		min: 1000000,
		step: 100000,
		thumbNailFormatter: (value: number) => stFormatLargeNumber(value, false, true),
	},

	volume: {
		max: 50000000,
		min: 100000,
		step: 100000,
		thumbNailFormatter: (value: number) => stFormatLargeNumber(value, false, true),
	},
	beta: {
		max: 2,
		min: 0.1,
		step: 0.1,
	},
	dividend: {
		max: 2,
		min: 0.1,
		step: 0.1,
		thumbNailFormatter: (value: number) => stFormatLargeNumber(value, false, true),
	},
};
