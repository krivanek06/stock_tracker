import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {
    addTransactionToUserHolding,
    createTransactionBuy,
    createTransactionSell, substractTransactionFromUserHolding
} from "./st-transaction-util";
import {queryUserPublicData} from "../user/user.query";


export const performTransaction = async (transactionInput: api.STTransactionInput): Promise<api.STTransaction> => {
    try {
        const user = await queryUserPublicData(transactionInput.userId) as api.STUserPublicData;

        if (transactionInput.operation === api.STTransactionOperationEnum.BUY) {
            return await performBuyTransaction(user, transactionInput);
        }
        return await performSellTransaction(user, transactionInput);
    } catch (error) {
        throw new ApolloError(error);
    }
};


const performBuyTransaction = async (user: api.STUserPublicData, transactionInput: api.STTransactionInput): Promise<api.STTransaction> => {
    try {
        // check if user has enough cash
        const totalPrice = transactionInput.price * transactionInput.units;
        if (user.portfolio.portfolioCash < totalPrice) {
            throw new ApolloError("Not enough cash on the account. Operation was not realized");
        }

        const transaction = createTransactionBuy(user, transactionInput);

        const ref = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transaction);
        // transaction.transactionId = ref.id;

        // TODO CREATE LOG FOR USER which transaction ID has been realized
        // TODO + save transaction into holdings by cloud functions
        const transactionWithoutUser = {...transaction, user: null};
        const userHoldings = addTransactionToUserHolding(user, transactionWithoutUser);

        // update user's holdings
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.uid).set({
            holdings: userHoldings,
            transactionsSnippets: [transactionWithoutUser, ...user.transactionsSnippets].slice(0, 10),
            portfolio: {
                ...user.portfolio,
                portfolioCash: user.portfolio.portfolioCash - totalPrice,
                portfolioInvested: user.portfolio.portfolioInvested + totalPrice
            }
        }, {merge: true});

        return transaction;
    } catch (error) {
        throw new ApolloError(error);
    }
};

const performSellTransaction = async (user: api.STUserPublicData, transactionInput: api.STTransactionInput): Promise<api.STTransaction> => {
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
        // transaction.transactionId = ref.id;

        // TODO CREATE LOG FOR USER which transaction ID has been realized
        // TODO + save transaction into holdings by cloud functions
        const transactionWithoutUser = {...transaction, user: null};
        const userHoldings = substractTransactionFromUserHolding(user, transactionWithoutUser);

        // update user's holdings
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.uid).set({
            holdings: userHoldings,
            transactionsSnippets: [transactionWithoutUser, ...user.transactionsSnippets].slice(0, 10),
            portfolio: {
                ...user.portfolio,
                portfolioCash: user.portfolio.portfolioCash + totalPrice,
                portfolioInvested: user.portfolio.portfolioInvested - totalPrice
            }
        }, {merge: true});

        return transaction;
    } catch (error) {
        throw new ApolloError(error);
    }
};
