import * as api from "stock-tracker-common-interfaces";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

export const createTransactionBuy = (user: api.STUserPublicData, transactionInput: api.STTransactionInput) => {
    const transactionBuy: api.STTransaction = {
        operation: api.STTransactionOperationEnum.BUY,
        price: transactionInput.price,
        symbol: transactionInput.symbol,
        symbol_logo_url: transactionInput.symbol_logo_url,
        units: transactionInput.units,
        date: getCurrentIOSDate(),
        user: {
            uid: user.uid,
            photoURL: user.photoURL,
            nickName: user.nickName,
            locale: user.locale,
            accountCreatedDate: user.accountCreatedDate
        }
    };
    return transactionBuy;
};


export const createTransactionSell = (user: api.STUserPublicData, transaction: api.STTransaction, transactionInput: api.STTransactionInput) => {
    const transactionSell: api.STTransaction = {
        operation: api.STTransactionOperationEnum.SELL,
        price: transactionInput.price,
        symbol: transactionInput.symbol,
        symbol_logo_url: transactionInput.symbol_logo_url,
        units: transactionInput.units,
        date: getCurrentIOSDate(),
        user: {
            uid: user.uid,
            photoURL: user.photoURL,
            nickName: user.nickName,
            locale: user.locale,
            accountCreatedDate: user.accountCreatedDate
        },
        return: (transactionInput.price - transaction.price) * transactionInput.units,
        returnChange: ((transactionInput.price - transaction.price) / transaction.price) * 100
    };
    return transactionSell;
};


export const addTransactionToUserHolding = (user: api.STUserPublicData, transaction: api.STTransaction): api.STTransaction[] => {
    let holdings = [...user.holdings];
    const index = holdings.map(x => x.symbol).indexOf(transaction.symbol);
    if (index > -1) {
        // symbol already in user's holdings
        const oldHolding = holdings[index];
        const updatedHolding: api.STTransaction = {
            ...oldHolding,
            price: (oldHolding.price * oldHolding.units + transaction.price * transaction.units) / (oldHolding.units + transaction.units),
            units: oldHolding.units + transaction.units,
            date: transaction.date
        };
        holdings[index] = updatedHolding;
    } else {
        holdings = [...holdings, transaction];    // user is not needed
    }
    return holdings;
}


export const substractTransactionFromUserHolding = (user: api.STUserPublicData, transaction: api.STTransaction): api.STTransaction[] => {
    let holdings: api.STTransaction[] = [...user.holdings];
    const userHolding = user.holdings.find(x => x.symbol === transaction.symbol);
    const index = user.holdings.map(x => x.symbol).indexOf(transaction.symbol);

    if (userHolding.units > transaction.units) {
        const updatedHolding: api.STTransaction = {
            ...userHolding,
            units: userHolding.units - transaction.units,
            date: transaction.date
        };
        holdings[index] = updatedHolding;   // not all units is sold
    } else {
        holdings = holdings.splice(index, 1); // all units are sold
    }
    return holdings;
}
