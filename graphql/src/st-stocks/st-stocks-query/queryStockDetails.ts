import {stockDataAPI, IS_PRODUCTION} from '../../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';
import {getCurrentIOSDate} from "../../st-shared/st-shared.functions";

// check if details already exists in firestore, else fetch from api and save
export const queryStockDetails = async (symbol: string, reload = false): Promise<api.StockDetails> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        const stockDetailsDocs = await admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(upperSymbol).get();
        const data = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;
        
        // remove stock details collection
        // await removeAllStockFromFirestore();
        // console.log('delete')
        // await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).delete();
        
        // first fetch or older than 7 days
        if(!data || reload || (Math.abs(moment(data.detailsLastUpdate).diff(new Date(), 'days')) > 7)){
            console.log(`Query all stock details for symbol: ${upperSymbol}`)
            const details = await getStockDetailsFromApi(upperSymbol, data?.details);
            await saveFinancialReports(symbol, details);

            // remove FinancialReportStatement 
            details.allFinancialReportsQuarterly = modifyFinancialReports(details.allFinancialReportsQuarterly);
            details.allFinancialReportsYearly = modifyFinancialReports(details.allFinancialReportsYearly);
            
            await saveDataIntoFirestore(symbol, details);

            return details;
        } 
        
        // fetch fresh news
        if(!!data.details && Math.abs(moment(data.newsLastUpdate).diff(new Date(), "days")) > 1){
            console.log(`Query stock news for symbol: ${upperSymbol}`)
            data.details.stockNews = await getAndSaveStockNewsFromApi(upperSymbol, data);
        }
        
        return data.details;
    } catch (error) {
        throw new ApolloError(error);
    }
}

const removeAllStockFromFirestore = async () => {
    console.log('Start deleting');
    const ref = admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION);
    ref.onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) =>  { 
            console.log(`Deleting ${doc.id}`);
            ref.doc(doc.id).delete()
        })
    })
    console.log('Deleting done');
}

const saveFinancialReports = async (symbol: string, details: api.StockDetails) => {
    admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION)
    .doc(symbol)
    .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
    .doc(api.ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS)
    .set({
        allFinancialReportsQuarterly: details.allFinancialReportsQuarterly,
        allFinancialReportsYearly: details.allFinancialReportsYearly
    });
}


const modifyFinancialReports = (financialReports: api.FinancialReport[]): api.FinancialReport[] => {
    return financialReports.map(financialReport => {
        return {...financialReport, report: null}
    });
}


const getStockDetailsFromApi = async (symbol: string, previousDetails: api.StockDetails): Promise<api.StockDetails> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
    const response = await resolverPromise.json() as api.StockDetails;

    // no data has been found
    if(!response || !response.summary){
        return null;
    }

    if(!previousDetails){
        console.log(`First update for symbol ${symbol} in firestore`)
        return response;
    }

    // RESIST OLD DATA IF SOME ARE MISSING FROM CURRENT FETCH

    // check balance sheet / income statement and cashflow
    for(let statment of ['balanceSheet', 'cashFlow', 'incomeStatement']){
        for(let period of ['quarterly', 'yearly']){
            for(let statementKey of Object.keys(previousDetails[statment][period])){
                // check if for current response exists data for statmentKey - if not, persist old data
                if(!response[statment][period].hasOwnProperty(statementKey)){
                    response[statment][period][statementKey] = previousDetails[statment][period][statementKey]
                }
            }
        }
    }

    // check other data
    response.analysis = response.analysis ?? previousDetails.analysis;
    response.institutionOwnerships = response.institutionOwnerships.length > 0 ? response.institutionOwnerships : previousDetails.institutionOwnerships;
    response.insiderTransactions = response.insiderTransactions.length > 0 ? response.insiderTransactions : previousDetails.insiderTransactions;


    return response;
};


const saveDataIntoFirestore = async (symbol: string, detials: api.StockDetails | null) => {
    admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).set({
        details: detials,
        detailsLastUpdate: !detials ? null : getCurrentIOSDate(),
        summaryLastUpdate: !detials ? null : getCurrentIOSDate(),
        newsLastUpdate: getCurrentIOSDate(),
    }, {merge: true});
}

const getAndSaveStockNewsFromApi = async (symbol: string, data: api.StockDetailsWrapper): Promise<api.NewsArticle[]> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/stock_news?symbol=${symbol}`);
    const response = (await resolverPromise.json())['data'] as api.NewsArticle[];

    // save details
    admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(symbol).set({
        details: {
            ...data.details,
            stockNews: response
        },
        newsLastUpdate: getCurrentIOSDate(),
    }, {merge: true});

    return response;
}