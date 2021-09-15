import { ApolloError } from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import { searchSymbolsByPrefix } from '../../api';

export const queryStockQuotesByPrefix = async (symbolPrefix: string): Promise<api.STFMCompanyQuote[]> => {
	try {
		if (!symbolPrefix) {
			return [];
		}
		const searchPromise = await searchSymbolsByPrefix(symbolPrefix.toUpperCase());

		// get only from exchanges : nyse, nasdaq - ignore mutual funds, etfs, etc.
		const exchanges = ['NYSE', 'NASDAQ'];
		const filteredSymbols = searchPromise.filter((symbol) => exchanges.includes(symbol.exchange));

		return filteredSymbols;
	} catch (error) {
		throw new ApolloError(error);
	}
};
