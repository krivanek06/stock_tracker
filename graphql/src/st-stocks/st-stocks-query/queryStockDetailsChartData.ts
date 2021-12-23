
import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getFinancialGrowth, getFinancialRatios, getKeyMetrics } from '../../api';


export const queryStockDetailsFinancialRatios = async (symbol: string, period: 'quarter' | 'year' = 'quarter', allData: boolean = false): Promise<api.STDetailsFinancialRatios> => {
    try {
        const document = period === 'quarter' ? api.STOCK_DETAILS_MORE_INFORMATION.FINANCIAL_RATIOS_QUARTERLY : api.STOCK_DETAILS_MORE_INFORMATION.FINANCIAL_RATIOS_YEARLY;
        const docRef = await getDocumentRefFromFirestore(symbol, document);
        const data = docRef.data() as api.STDetailsFinancialRatios;

        // exists in DB
        if (!!data) {
            return data;
        }

        // does not exists, load from API
        const dataFromApi = await getFinancialRatios(symbol, period)

        // format data
        const formatterData = formatResponseFromJsonToArray(dataFromApi);

        // save
        docRef.ref.set(formatterData);

        return formatterData;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const queryStockDetailsFinancialGrowth = async (symbol: string, period: 'quarter' | 'year' = 'quarter', allData: boolean = false): Promise<api.STDetailsFinancialGrowth> => {
    try {
        const document = period === 'quarter' ? api.STOCK_DETAILS_MORE_INFORMATION.FINANCIAL_GROWTH_QUARTERLY : api.STOCK_DETAILS_MORE_INFORMATION.FINANCIAL_GROWTH_YEARLY;
        const docRef = await getDocumentRefFromFirestore(symbol, document);
        const data = docRef.data() as api.STDetailsFinancialGrowth;

        // exists in DB
        if (!!data) {
            return data;
        }

        // does not exists, load from API
        const dataFromApi = await getFinancialGrowth(symbol, period)

        // format data
        const formatterData = formatResponseFromJsonToArray(dataFromApi);

        // save
        docRef.ref.set(formatterData);

        return formatterData;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockDetailsKeyMetrics = async (symbol: string, period: 'quarter' | 'year' = 'quarter', allData: boolean = false): Promise<api.STDetailsKeyMetrics> => {
    try {
        const document = period === 'quarter' ? api.STOCK_DETAILS_MORE_INFORMATION.KEY_METRICS_QUARTERLY : api.STOCK_DETAILS_MORE_INFORMATION.KEY_METRICS_YEARLY;
        const docRef = await getDocumentRefFromFirestore(symbol, document);
        const data = docRef.data() as api.STDetailsKeyMetrics;

        // exists in DB
        if (!!data) {
            return data;
        }

        // does not exists, load from API
        const dataFromApi = await getKeyMetrics(symbol, period)

        // format data
        const formatterData = formatResponseFromJsonToArray(dataFromApi);

        // save
        docRef.ref.set(formatterData);

        return formatterData;
    } catch (error) {
        throw new ApolloError(error);
    }
}

const getDocumentRefFromFirestore = async (symbol: string, document: api.STOCK_DETAILS_MORE_INFORMATION): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>> => {
    const docRef = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION)
        .doc(symbol)
        .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
        .doc(document)
        .get();
    return docRef;
}

/* 
    format [ {"revenuePerShare": 5.056067702784494}, {"revenuePerShare": 5.056067702784494}, {"revenuePerShare": 5.056067702784494} ]
    into {"revenuePerShare": [5.056067702784494, 5.056067702784494, 5.056067702784494]}

    except symbol, periods fields
*/
const formatResponseFromJsonToArray = (data: any[]): any | null => {
    if (!data || data.length === 0) {
        return null;
    }

    // get all keys except 'period', 'symbol'
    const keys = Object.keys(data[0]).filter(k => !['symbol', 'period'].includes(k));

    const result = data.reduce((acc, value) => {
        keys.forEach(k => {
            acc[k] = [value[k], ...(acc[k] || [])]
        });
        return acc;
    }, {});

    result['symbol'] = data[0]['symbol'];

    return result;
}