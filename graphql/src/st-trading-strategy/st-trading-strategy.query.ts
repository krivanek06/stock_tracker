import { stockDataAPI } from './../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";


export const queryTradingStrategies = async (): Promise<api.STTradingStrategySearch> => {
    try {
        const res = await fetch(`${stockDataAPI}/search/trading_strategies`);
        return res.json();
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const queryTradingStrategyData = async (symbol: string, strategy: string): Promise<api.STTradingStrategyData> => {
    try {
        const res = await fetch(`${stockDataAPI}/chart_data/trading_strategy?symbol=${symbol}&strategy=${strategy}`);
        return res.json();
    } catch (error) {
        throw new ApolloError(error);
    }
}