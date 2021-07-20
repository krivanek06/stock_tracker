import { getLivePriceAPI } from '../st-api/st-financial-modeling.api';
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


export const performTransaction = async (transactionInput: api.STTransactionInput, userId: string): Promise<PerformedTransaction> => {
    try {
        const user = await queryUserPublicData(userId) as api.STUserPublicData;

        // get current stock price
        const livePrice = await getLivePriceAPI(transactionInput.symbol);
        transactionInput.price = livePrice?.price;
        
        // perform buy or sell transaction
        const {transaction, newUserHoldings} = await performTransactionAction(user, transactionInput);
        
        // update user's data
        await updateTransactionSnapshots(user, transaction, newUserHoldings);
        
        // retrieve modified holding
        const holding = newUserHoldings.find(h => h.symbol === transactionInput.symbol);

        return {holding, transaction};
    } catch (error) {
        throw new ApolloError(error);
    }
};


const performTransactionAction = async (user: api.STUserPublicData, transactionInput: api.STTransactionInput): Promise<{transaction: api.STTransaction, newUserHoldings: api.STHolding[]}> => {
    let transaction: api.STTransaction;
    let newUserHoldings: api.STHolding[] = [];

    if(transactionInput.operation === api.STTransactionOperationEnum.BUY){
        if (user.portfolioCash < transactionInput.price * transactionInput.units) {
            throw new ApolloError("Not enough cash on the account. Operation was not realized");
        }

        transaction = createTransactionBuy(user, transactionInput);
        newUserHoldings = addTransactionToUserHolding(user, transaction);
    }else{
        // find existing holding in user's portfolio
        const holding = user.holdings.find(s => s.symbol === transactionInput.symbol);

        // check if holdings exists
        if (!holding) {
            throw new ApolloError("Symbols was not found is user's holdings. Operation was not realized");
        }

        // check if user has enough stock to sell
        if (holding.units < transactionInput.units) {
            throw new ApolloError("Do not have enough units of stock in portfolio. Operation was not realized");
        }

        transaction = createTransactionSell(user, holding, transactionInput);
        newUserHoldings = substractTransactionFromUserHolding(user, transaction);
    }
    return {transaction, newUserHoldings}
}

const updateTransactionSnapshots = async (user: api.STUserPublicData, transaction: api.STTransaction, userHoldings: api.STHolding[]) => {
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

    // save transaction
    const documentRef = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transaction);
    transaction.transactionId = documentRef.id;

    // save portfolio change array
    userHistoricaldataRef.set({
        transactionSnapshots: [...transactionSnapshots, newTransactionSnapshots]
    }, {merge: true});

    // save last transaction snapshot 
    admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.id).set({
        lastTransactionSnapshot: newTransactionSnapshots,
        holdings: userHoldings,
        transactionsSnippets: [transaction, ...user.transactionsSnippets].slice(0, 10),
        portfolioCash: isBuy ? user.portfolioCash - totalPrice : user.portfolioCash  + totalPrice,
        numberOfExecutedTransactions: admin.firestore.FieldValue.increment(1),
        numberOfExecutedSellTransactions: isBuy ? user.numberOfExecutedSellTransactions : admin.firestore.FieldValue.increment(1),
        numberOfExecutedBuyTransactions: isBuy ? admin.firestore.FieldValue.increment(1) : user.numberOfExecutedBuyTransactions
    }, {merge: true});
}