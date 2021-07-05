import { queryStockSummary } from './queryStockSummary';
import {stockDataAPI} from '../../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";

export const queryStockSummaries = async (symbolPrefix: string): Promise<api.SearchStockSummaries> => {
    try {
        if (!symbolPrefix) {
            return {summaries: []};
        }
        const upperSymbol = symbolPrefix.toUpperCase();
        console.time();
        const symbolsDocRef = admin.firestore()
            .collection(api.ST_STOCK_DATA_COLLECTION)
            .doc(api.ST_STOCK_DATA_SHARED_DOCUMENT)
            .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_STOCK_DATA_DOCUMENT_SEARCH_SYMBOL);

        console.log('symbolPrefix', symbolPrefix);
        const symbolsDoc = await symbolsDocRef.get();
        let searchSymbols = symbolsDoc.data() as api.SearchStockSymbol;

        // first fetch -> no data, get from API
        if (!symbolsDoc.data()) {
            const symbolsPromise = await global.fetch(`${stockDataAPI}/search/search_all_symbols`);
            searchSymbols = await symbolsPromise.json() as api.SearchStockSymbol;
            symbolsDocRef.set(searchSymbols);
        }
        
        // filter out only which start with same prefix
        const searchingSymbols = [
            searchSymbols.data.find(s => s === upperSymbol),  // stock with same name
            ...searchSymbols.data.filter(s => s !== upperSymbol && s.startsWith(upperSymbol)).slice(0, 4)
        ].filter(x => !!x); // filter out [undefined, X , X ]

        console.log('searchingSymbols', searchingSymbols)

        // get summaries for symbols
        const summaries = await Promise.all(searchingSymbols.map(x => queryStockSummary(x))) as api.Summary[];
        const notNullSummaries = summaries.filter(x => !!x && !!x.symbol);

        console.log('return symbols', notNullSummaries.map(x => x.symbol));

        console.timeEnd();
        console.log('----')
        return {summaries: notNullSummaries} as api.SearchStockSummaries;
    } catch (error) {
        throw new ApolloError(error);
    }
};