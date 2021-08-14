import { ApolloError } from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import { searchSymbolsByPrefix } from '../../api';

export const queryStockQuotesByPrefix = async (symbolPrefix: string): Promise<api.STFMCompanyQuote[]> => {
	try {
		if (!symbolPrefix) {
			return [];
		}
		const searchPromise = await searchSymbolsByPrefix(symbolPrefix.toUpperCase());

		return searchPromise;
	} catch (error) {
		throw new ApolloError(error);
	}
};
