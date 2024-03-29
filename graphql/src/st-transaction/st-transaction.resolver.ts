import * as api from "stock-tracker-common-interfaces";
import {queryStockSummary} from "../st-stocks/st-stocks-query";



export const stTransactionResolvers = {
    STHolding: {
        summary: async (stTransaction: api.STTransaction) => await queryStockSummary(stTransaction.symbol)
    }
};
