
import {stockDataAPI, IS_PRODUCTION} from '../../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';

export const queryStockLivePrice = async (symbol: string): Promise<api.STSymbolPrice> => {
    try{
        const upperSymbol = symbol.toUpperCase();
        const resolverPromise = await global.fetch(`${stockDataAPI}/chart_data/live_price?symbol=${upperSymbol}`);
        const response = await resolverPromise.json() as api.STSymbolPrice;
        return response;
    } catch (error) {
        throw new ApolloError(error);
    }
}
