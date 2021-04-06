import {ApolloError} from 'apollo-server';
import * as api from "stock-tracker-common-interfaces";
import * as admin from "firebase-admin";
import {queryStockSummary} from "./st-stock.query";


export const resolveStockSummaryForSymbols = async (symbols: string[]) => {
    try {
        return await Promise.all(symbols.map(symbol => queryStockSummary(symbol)));
    } catch (error) {
        throw new ApolloError(error);
    }
};
