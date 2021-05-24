import { STTradingStrategyFirebaseModel } from './st-trading-strategy.model';
import { stockDataAPI } from './../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';

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
         // check if exists in firestore
         const collectionRef =  admin.firestore().collection('stock_data').doc(symbol).collection('trading_strategies').doc(strategy);
         const dataDoc = await collectionRef.get()
         let data = dataDoc.data() as STTradingStrategyFirebaseModel;

         if(!data || !moment(data.lastModification).isSame(new Date(), "day")){
            const resJson = await fetch(`${stockDataAPI}/chart_data/trading_strategy?symbol=${symbol}&strategy=${strategy}`);
            const res = (await resJson.json()).data as api.STTradingStrategyData;
            
            data = { lastModification: new Date().toISOString(), data: res };
            
            await collectionRef.set(data); // save
         }

        return data.data;
    } catch (error) {
        throw new ApolloError(error);
    }
}