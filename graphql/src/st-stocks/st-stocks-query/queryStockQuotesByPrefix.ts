import {stockDataAPI} from '../../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';

export const queryStockQuotesByPrefix = async (symbolPrefix: string): Promise<api.STFMCompanyQuote[]> => {
    try {
        if (!symbolPrefix) {
            return [];
        }
        const upperSymbol = symbolPrefix.toUpperCase();
        
        const searchPromise = await global.fetch(`${stockDataAPI}/search/search_symbols?symbolsPrefix=${upperSymbol}`);
        const searchResult = await searchPromise.json() as api.STFMCompanyQuote[];
        
        return searchResult;
    } catch (error) {
        throw new ApolloError(error);
    }
};