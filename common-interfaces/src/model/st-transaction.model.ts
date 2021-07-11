import { STUserIndentification } from './st-user.model';

export interface STSymbolPrice {
    price: number;
    symbol: string;
}

export interface STHolding {
    symbol: string;
    breakEvenPrice: number;
    units: number;
}

export interface STTransaction {
    transactionId?: string;
    user?: STUserIndentification;
    symbol: string;
    symbol_logo_url: string;
    price?: number;
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
    units: number;
    operation: STTransactionOperationEnum;
}

export interface STTransactionSnapshot {
    transactionsBuy: number;
    transactionsSell: number;
	date: string;  // daily intervals
}

export enum STTransactionOperationEnum {
    BUY  = 'BUY',
    SELL = 'SELL'
}


export const ST_TRANSACTION_COLLECTION = 'transactions';