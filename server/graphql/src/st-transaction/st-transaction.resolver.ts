import * as api from "stock-tracker-common-interfaces";
import {queryStockSummary} from "../stockDetails/stockDetails.query";



export const stTransactionResolvers = {
    STTransaction: {
        summary: async (stTransaction: api.STTransaction) => await queryStockSummary(stTransaction.symbol)
    }
};
