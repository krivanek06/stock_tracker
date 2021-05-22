import * as admin from "firebase-admin";
import * as functions from 'firebase-functions';

import { stockDataAPI } from './../../environment';

const fetch = require("node-fetch");


export const updateStockPrices = functions.pubsub.topic('updateStockPrices').onPublish(async () => {
    console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);
    const symbols = await getLastUpdatedSymbols();

    const currentPrices = await getSymbolsCurrentPrice(symbols);
    console.log(`Loaded current price for symbols: ${currentPrices.map(s => s.symbol)}`);
    
    await saveCurrentPriceForSymbols(currentPrices);
    console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`);
});



const saveCurrentPriceForSymbols = async(priceUpdates: CurrentPrice[] = []) => {
    for(const priceUpdate of priceUpdates){
        await admin.firestore().collection('stock_data').doc(priceUpdate.symbol).update({
            'details.summary.marketPrice': priceUpdate.price,
            'details.summary.previousClose': priceUpdate.previousClose,
            'summaryLastUpdate': admin.firestore.Timestamp.now().toDate().toISOString()
        });
    }

}

const getSymbolsCurrentPrice = async(symbols: string[]): Promise<CurrentPrice[]> => {
    const body = {'symbols': symbols};
    const symbolsCurrentPriceResponse = await fetch(`${stockDataAPI}/chart_data/live_prices`,  { 
                                                        method: 'POST', 
                                                        body: JSON.stringify(body),
                                                        headers: { 'Content-Type': 'application/json' }
                                                    });
    const response =  await symbolsCurrentPriceResponse.json();
    return response['data'] as CurrentPrice[];                                   
}

const getLastUpdatedSymbols = async(): Promise<string[]> => {
    const symbolDetailsDocs = await admin.firestore().collection('stock_data')
                                    .where('summaryLastUpdate', '>=', '')
                                    .orderBy('summaryLastUpdate', 'asc')
                                    .limit(15).get(); 

    const symbols = symbolDetailsDocs.docs.map(d => d.id);
    return symbols;
}


interface CurrentPrice {
    price: number;
    previousClose: number;
    symbol: string;
}