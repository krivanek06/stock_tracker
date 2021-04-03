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


export const performTransaction = async (transactionInput: api.STTransactionInput): Promise<PerformedTransaction> => {
    try {
        const user = await queryUserPublicData(transactionInput.userId) as api.STUserPublicData;

        const isBuy = transactionInput.operation === api.STTransactionOperationEnum.BUY;
        const {holdings, lastTransaction } = isBuy ? await performBuyTransaction(user, transactionInput) : await performSellTransaction(user, transactionInput);

        await updatePortfolioChange(user, transactionInput, holdings);

        return {holdings, lastTransaction };
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

        // TODO CREATE LOG FOR USER which transaction ID has been realized
        const lastTransaction = {...transaction, user: null};
        const holdings = addTransactionToUserHolding(user, lastTransaction);

        // update user's holdings
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.uid).set({
            holdings,
            transactionsSnippets: [lastTransaction, ...user.transactionsSnippets].slice(0, 10),
            portfolioCash: user.portfolioCash - totalPrice // decrease cash
        }, {merge: true});

        return {holdings, lastTransaction };
    } catch (error) {
        throw new ApolloError(error);
    }
};

const performSellTransaction = async (user: api.STUserPublicData, transactionInput: api.STTransactionInput): Promise<PerformedTransaction> => {
    try {
        // find existing holding in user's portfolio
        const holdingTransaction = user.holdings.find(s => s.symbol === transactionInput.symbol);
        const totalPrice = transactionInput.price * transactionInput.units;

        // check if holdings exists
        if (!holdingTransaction) {
            throw new ApolloError("Symbols was not found is user's holdings. Operation was not realized");
        }

        // check if user has enough stock to sell
        if (holdingTransaction.units < transactionInput.units) {
            throw new ApolloError("Do not have enough units of stock in portfolio. Operation was not realized");
        }

        const transaction = createTransactionSell(user, holdingTransaction, transactionInput);
        const ref = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transactionInput);
        transaction.transactionId = ref.id;

        // TODO CREATE LOG FOR USER which transaction ID has been realized
        const lastTransaction = {...transaction, user: null};
        const holdings = substractTransactionFromUserHolding(user, lastTransaction);

        // update user's holdings
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.uid).set({
            holdings,
            transactionsSnippets: [lastTransaction, ...user.transactionsSnippets].slice(0, 10),
            portfolioCash: user.portfolioCash  + totalPrice // increase cash
        }, {merge: true});

        return {holdings, lastTransaction };
    } catch (error) {
        throw new ApolloError(error);
    }
};

const updatePortfolioChange = async ({uid, portfolioCash}: api.STUserPublicData, transaction: api.STTransactionInput, userHoldings: api.STTransaction[]) => {
     const userHistoricaldataRef = await admin.firestore().collection('users')
            .doc(uid).collection('more_information').doc('historical_data');

    const {portfolioChange} = (await userHistoricaldataRef.get()).data() as api.STUserHistoricalData;

    
    // check if last saved exists and are on same day
    let lastPortfolioChange:  api.STPortfolioChange;
    if(portfolioChange.length > 0 && datesAreOnSameDay(portfolioChange[portfolioChange.length - 1].date, new Date().toUTCString())){ 
        lastPortfolioChange = portfolioChange.pop();
    }
    
    // create new portfolio change
    const isBuy = transaction.operation === api.STTransactionOperationEnum.BUY;
    const transactionsBuy = isBuy ? transaction.units * transaction.price : 0
    const transactionsSell = !isBuy ? transaction.units * transaction.price : 0;

    const newPortfolioChange: api.STPortfolioChange = {
        transactionsBuy: transactionsBuy + (lastPortfolioChange?.transactionsBuy ?? 0),
        transactionsSell: transactionsSell + (lastPortfolioChange?.transactionsSell ?? 0),
        portfolio: {
            portfolioCash: portfolioCash,
            portfolioInvested: sumOfHoldings(userHoldings)
        },
        date: getCurrentIOSDate()
    }

    // save portfolio change
    userHistoricaldataRef.set({
        portfolioChange: [...portfolioChange, newPortfolioChange]
    }, {merge: true});
}