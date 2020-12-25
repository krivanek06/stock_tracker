import { stockDataAPI } from '../enviroment';
import { ApolloError } from 'apollo-server';

const fetch = require("node-fetch");

/*
export const resolveStockSummaryForStockWatchList = async (stockWatchList: STStockWatchlist) => {
    try {
        const promises = stockWatchList.stocks.map(symbol => fetch(`${stockDataAPI}/fundamentals/summary?symbol=${symbol}`));
        const resolved = await Promise.all(promises);
        const summary = resolved.map(async data => await data.json() as Summary);

        return summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}*/
