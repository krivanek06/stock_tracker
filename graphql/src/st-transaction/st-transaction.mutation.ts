
import { queryStockLivePrice } from './../st-stocks/st-stock.query';
import { getCurrentIOSDate, datesAreOnSameDay } from './../st-shared/st-shared.functions';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {
    addTransactionToUserHolding,
    createTransactionBuy,
    createTransactionSell, substractTransactionFromUserHolding, sumOfHoldings
} from "./st-transaction-util";
import {queryUserPublicData} from "../user/user.query";
import { PerformedTransaction } from './st-transaction.model.local';


export const performTransaction = async (transactionInput: api.STTransactionInput): Promise<api.STTransaction> => {
    try {
        const user = await queryUserPublicData(transactionInput.userId) as api.STUserPublicData;

        const isBuy = transactionInput.operation === api.STTransactionOperationEnum.BUY;
        const livePrice = await queryStockLivePrice(transactionInput.symbol);

        transactionInput.price = livePrice.price; // get stock live price from api

        const {holdings, lastTransaction } = isBuy ? await performBuyTransaction(user, transactionInput) : 
                                                     await performSellTransaction(user, transactionInput);

        await updateTransactionSnapshots(user, lastTransaction, holdings);

        return lastTransaction;
    } catch (error) {
        throw new ApolloError(error);
    }
};


// PRIVATE HELPING FUNCTIONS

const performBuyTransaction = async (user: api.STUserPublicData, transactionInput: api.STTransactionInput): Promise<PerformedTransaction> => {
    try {
        // check if user has enough cash
        const totalPrice = transactionInput.price * transactionInput.units;
        if (user.portfolioCash < totalPrice) {
            throw new ApolloError("Not enough cash on the account. Operation was not realized");
        }

        const transaction = createTransactionBuy(user, transactionInput);

        const ref = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transaction);
        transaction.transactionId = ref.id;

        const holdings = addTransactionToUserHolding(user, transaction);

        return {holdings, lastTransaction: transaction };
    } catch (error) {
        throw new ApolloError(error);
    }
};

const performSellTransaction = async (user: api.STUserPublicData, transactionInput: api.STTransactionInput): Promise<PerformedTransaction> => {
    try {
        // find existing holding in user's portfolio
        const holdingTransaction = user.holdings.find(s => s.symbol === transactionInput.symbol);
        //const totalPrice = transactionInput.price * transactionInput.units;

        // check if holdings exists
        if (!holdingTransaction) {
            throw new ApolloError("Symbols was not found is user's holdings. Operation was not realized");
        }

        // check if user has enough stock to sell
        if (holdingTransaction.units < transactionInput.units) {
            throw new ApolloError("Do not have enough units of stock in portfolio. Operation was not realized");
        }

        const transaction = createTransactionSell(user, holdingTransaction, transactionInput);
        const ref = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transaction);
        transaction.transactionId = ref.id;

        const holdings = substractTransactionFromUserHolding(user, transaction);

        return {holdings, lastTransaction: transaction };
    } catch (error) {
        throw new ApolloError(error);
    }
};

const updateTransactionSnapshots = async (user: api.STUserPublicData, transaction: api.STTransaction, userHoldings: api.STTransaction[]) => {
     const userHistoricaldataRef = admin.firestore().collection(api.ST_USER_COLLECTION_USER)
                                                    .doc(user.id)
                                                    .collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
                                                    .doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA);

    const {transactionSnapshots} = (await userHistoricaldataRef.get()).data() as api.STUserHistoricalData;
    const totalPrice = transaction.price * transaction.units;

    // check if last saved exists and are on same day
    let lastTransactionSnapshots:  api.STTransactionSnapshot;
    if(transactionSnapshots.length > 0 && datesAreOnSameDay(transactionSnapshots[transactionSnapshots.length - 1].date, new Date().toUTCString())){ 
        lastTransactionSnapshots = transactionSnapshots.pop();
    }
    
    // create new portfolio change
    const isBuy = transaction.operation === api.STTransactionOperationEnum.BUY;
    const transactionsBuy = isBuy ? transaction.units * transaction.price : 0
    const transactionsSell = !isBuy ? transaction.units * transaction.price : 0;

    const newTransactionSnapshots: api.STTransactionSnapshot = {
        transactionsBuy: transactionsBuy + (lastTransactionSnapshots?.transactionsBuy ?? 0),
        transactionsSell: transactionsSell + (lastTransactionSnapshots?.transactionsSell ?? 0),
        date: getCurrentIOSDate()
    }

    // save portfolio change array
    userHistoricaldataRef.set({
        transactionSnapshots: [...transactionSnapshots, newTransactionSnapshots]
    }, {merge: true});

    // save last transaction snapshot 
    admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.id).set({
        lastTransactionSnapshot: newTransactionSnapshots,
        holdings: userHoldings,
        transactionsSnippets: [transaction, ...user.transactionsSnippets].slice(0, 10),
        portfolioCash: isBuy ? user.portfolioCash  + totalPrice : user.portfolioCash - totalPrice,
        numberOfExecutedTransactions: admin.firestore.FieldValue.increment(1),
        numberOfExecutedSellTransactions: isBuy ? user.numberOfExecutedSellTransactions : admin.firestore.FieldValue.increment(1),
        numberOfExecutedBuyTransactions: isBuy ? admin.firestore.FieldValue.increment(1) : user.numberOfExecutedBuyTransactions
    }, {merge: true});
}