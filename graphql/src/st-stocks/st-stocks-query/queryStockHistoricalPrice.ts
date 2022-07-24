import * as api from 'stock-tracker-common-interfaces';
import { getHistoricalDailyPricesAPI, getHistoricalPricesAPI, getLivePriceAPI } from '../../api';

export const querySymbolHistoricalPrices = async (symbol: string, period: string): Promise<api.STSymbolHistoricalChartData> => {
	let historicalPrices: api.STFMHistoricalPrices[] = [];

	if (['1y', '5y', 'all', '6m'].includes(period)) {
		historicalPrices = await getHistoricalDailyPricesAPI(symbol, period);
	} else if (['1min', '5min', '15min', '30min', '1hour', '4hour'].includes(period)) {
		historicalPrices = await getHistoricalPricesAPI(symbol, period);
	} else {
		return null;
	}

	// [[timestamp, open, high, low, close], [timestamp, open, high, low, close], ... ]
	const price: number[][] = historicalPrices.map((prices) => [Date.parse(prices.date), prices.open, prices.high, prices.low, prices.close]);

	// [[timestamp, volume], [timestamp, volume], ... ]
	const volume: number[][] = historicalPrices.map((prices) => [Date.parse(prices.date), prices.volume]);

	const livePrice = (await getLivePriceAPI(symbol))?.price;

	return { symbol, period, livePrice, price, volume };
};
