import { stockDataAPI } from './../enviroment';
import { ApolloError } from 'apollo-server';
import { StockDetails } from "./stockDetails.model";


export const queryStockDetails = async (symbol: string) => {
    try {
        console.log('aaa')
        const detilasPromis = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
        console.log('bbb')
        const details = await detilasPromis.json() as StockDetails;
        console.log('cc')

        return details;
    } catch (error) {
        throw new ApolloError(error);
    }
}
