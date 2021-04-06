import { STUserIndentification } from './user.model';


export interface STTransaction {
    transactionId?: string;
    user?: STUserIndentification;
    symbol: string;
    symbol_logo_url: string;
    price: number;
    return?: number;
    returnChange?: number;
    units: number;
    operation: STTransactionOperationEnum;
    date: string;

}

export interface STTransactionInput {
    symbol: string;
    symbol_logo_url: string;
    price: number;
    userId: string;
    units: number;
    operation: STTransactionOperationEnum;
}

export enum STTransactionOperationEnum {
    BUY  = 'BUY',
    SELL = 'SELL'
}


export const ST_TRANSACTION_COLLECTION = 'transactions';