import { ApolloError } from 'apollo-server';
import * as api from "stock-tracker-common-interfaces";
import * as admin from "firebase-admin";
import { queryStockSummary } from "../st-stocks/st-stocks-query";


const resolveStockSummariesForSymbols = async (symbols: string[]): Promise<api.STSummary[]> => {
    try {
        //return await Promise.all(symbols.map(symbol => queryStockSummary(symbol)));
        const result = [];
        for await(const symbol of symbols){
            result.push(await queryStockSummary(symbol))
        }
        return result;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const stStockWatchlistResolvers = {
    STStockWatchlist: {
        summaries: async (stockWatchlist: api.STStockWatchlist) => await resolveStockSummariesForSymbols(stockWatchlist.symbols)
    }
};
