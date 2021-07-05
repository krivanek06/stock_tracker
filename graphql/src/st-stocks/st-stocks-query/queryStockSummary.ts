import { queryStockDetails } from './queryStockDetails';
import {IS_PRODUCTION} from '../../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";

export const queryStockSummary = async (symbol: string): Promise<api.Summary> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        
        if(!IS_PRODUCTION){
            console.log(`Summary for ${symbol}`);
        }

        const stockDetailsDocs = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(upperSymbol).get();
        const wrapper = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;
        const details = !!wrapper ? wrapper.details : await queryStockDetails(upperSymbol);
        
        return details?.summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}
