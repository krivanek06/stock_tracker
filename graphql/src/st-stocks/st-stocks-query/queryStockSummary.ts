import { getCompanyQuoteBatch } from './../../api';
import { queryStockDetails } from './queryStockDetails';
import {IS_PRODUCTION} from '../../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';

export const queryStockSummary = async (symbol: string): Promise<api.STSummary> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        
        if(!IS_PRODUCTION){
            console.log(`Summary for ${symbol}`);
        }

        const stockDetailsDocs = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(upperSymbol).get();
        const wrapper = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;

        // update with current data
        if(!!wrapper){
            // multiple upsers may access the same symbol summary in same time so do not load data from API all the time
            if(Math.abs(moment(wrapper.summaryLastUpdate).diff(new Date(), 'minute')) > 15) {
                console.log('updating summary for: ',  upperSymbol, ', time diff: ' ,Math.abs(moment(wrapper.summaryLastUpdate).diff(new Date(), 'minute')) )
                wrapper.details.summary = await updateStockSummary(upperSymbol, wrapper.details.summary);
                await persistStockSummary(upperSymbol, wrapper.details.summary)
            }
        }else {
            wrapper.details = await queryStockDetails(upperSymbol);
        }
        
        return wrapper.details?.summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}


const updateStockSummary = async(symbol: string, summary: api.STSummary): Promise<api.STSummary> => {
    const companyQuote = await getCompanyQuoteBatch([symbol])
    const symbolQUote = companyQuote[0];

    summary.marketPrice = symbolQUote.price;
    summary.previousClose = symbolQUote.previousClose;
    summary.ePSTTM = symbolQUote.eps;
    summary.pERatioTTM = symbolQUote.pe;
    summary.volume = symbolQUote.volume;
    summary.weekRangeFiveTwoMax = symbolQUote.yearHigh;
    summary.weekRangeFiveTwoMin = symbolQUote.yearLow;

    return summary;
}

const persistStockSummary = async(symbol: string, summary: api.STSummary): Promise<void> => {
    await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).update({
        'details.summary': summary,
        'summaryLastUpdate': admin.firestore.Timestamp.now().toDate().toISOString()
    })
}