import { stockDataAPI } from './../enviroment';
import { ApolloError } from 'apollo-server';
import { StockDetails } from "./stockDetails.model";


export const queryStockDetails = async (symbol: string) => {
    try {
        const detilasPromis = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
        const details = await detilasPromis.json() as StockDetails;

        return details;
    } catch (error) {
        throw new ApolloError(error);
    }
}
