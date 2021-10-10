import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getLivePriceAPI } from '../api';
import { queryUserPublicDataById } from '../st-user/user.query';
import { datesAreOnSameDay, getCurrentIOSDate } from './../st-shared/st-shared.functions';
import { addTransactionToUserHolding, createTransactionBuy, createTransactionSell, substractTransactionFromUserHolding } from './st-transaction-util';
import { PerformedTransaction } from './st-transaction.model.local';

export const performTransaction = async (transactionInput: api.STTransactionInput, userId: string): Promise<PerformedTransaction> => {
	try {
		const user = (await queryUserPublicDataById(userId)) as api.STUserPublicData;

		// get current stock price
		const livePrice = await getLivePriceAPI(transactionInput.symbol);
		transactionInput.price = livePrice?.price;

		// perform buy or sell transaction
		const { transaction, newUserHoldings } = await performTransactionAction(user, transactionInput);

		// update user's data
		await updateUserTransactionSnapshots(user, transaction, newUserHoldings);

		// retrieve modified holding
		const holding = newUserHoldings.find((h) => h.symbol === transactionInput.symbol);

		return { holding, transaction };
	} catch (error) {
		throw new ApolloError(error);
	}
};

const performTransactionAction = async (
	user: api.STUserPublicData,
	transactionInput: api.STTransactionInput
): Promise<{ transaction: api.STTransaction; newUserHoldings: api.STHolding[] }> => {
	let transaction: api.STTransaction;
	let newUserHoldings: api.STHolding[] = [];

	if (transactionInput.operation === api.STTransactionOperationEnum.BUY) {
		transaction = createTransactionBuy(user, transactionInput);

		if (user.portfolio.portfolioCash < transaction.price * transaction.units + transaction.transactionFees) {
			throw new ApolloError('Not enough cash on the account. Operation was not realized');
		}

		const userAlreadyOwnsSymbol = !!user.holdings.find((h) => h.symbol === transaction.symbol);
		if (!userAlreadyOwnsSymbol && user.holdings.length >= 45) {
			throw new ApolloError('You can only hold 45 distinct symbols. Operation was not realized');
		}

		newUserHoldings = addTransactionToUserHolding(user, transaction);
	} else {
		// find existing holding in user's portfolio
		const holding = user.holdings.find((s) => s.symbol === transactionInput.symbol);

		// check if holdings exists
		if (!holding) {
			throw new ApolloError("Symbols was not found is user's holdings. Operation was not realized");
		}

		// check if user has enough stock to sell
		if (holding.units < transactionInput.units) {
			throw new ApolloError('Do not have enough units of stock in portfolio. Operation was not realized');
		}

		transaction = createTransactionSell(user, holding, transactionInput);
		newUserHoldings = substractTransactionFromUserHolding(user, transaction);
	}
	return { transaction, newUserHoldings };
};

const updateUserTransactionSnapshots = async (user: api.STUserPublicData, transaction: api.STTransaction, userHoldings: api.STHolding[]) => {
	const userHistoricaldataRef = admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(user.id)
		.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA);

	const { transactionSnapshots } = (await userHistoricaldataRef.get()).data() as api.STUserHistoricalData;
	const totalPrice = transaction.price * transaction.units;

	// check if last saved exists and are on same day
	let lastTransactionSnapshots: api.STTransactionSnapshot;
	if (transactionSnapshots.length > 0 && datesAreOnSameDay(transactionSnapshots[transactionSnapshots.length - 1].date, new Date().toUTCString())) {
		lastTransactionSnapshots = transactionSnapshots.pop();
	}

	// create new portfolio change
	const isBuy = transaction.operation === api.STTransactionOperationEnum.BUY;
	const transactionsBuy = isBuy ? transaction.units * transaction.price : 0;
	const transactionsSell = !isBuy ? transaction.units * transaction.price : 0;

	const newTransactionSnapshots: api.STTransactionSnapshot = {
		transactionsBuy: transactionsBuy + (lastTransactionSnapshots?.transactionsBuy ?? 0),
		transactionsSell: transactionsSell + (lastTransactionSnapshots?.transactionsSell ?? 0),
		transactionFees: transaction.transactionFees + (lastTransactionSnapshots?.transactionFees ?? 0),
		date: getCurrentIOSDate(),
	};

	// save transaction
	const documentRef = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transaction);
	transaction.transactionId = documentRef.id;

	// save portfolio change array
	userHistoricaldataRef.set(
		{
			transactionSnapshots: [...transactionSnapshots, newTransactionSnapshots],
		},
		{ merge: true }
	);

	// calculate topTransactions
	const topTransactions = [...user.topTransactions, transaction]
		.filter((t) => t.returnChange) // only which have return === SELL
		.sort((a, b) => Math.abs(b.returnChange ?? 0) - Math.abs(a.returnChange ?? 0)) // order abs(returnChange) desc
		.slice(0, 20)
		.sort((a, b) => (b.returnChange ?? 0) - (a.returnChange ?? 0)); // order returnChange desc

	// save last transaction snapshot
	admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(user.id)
		.set(
			{
				holdings: userHoldings,
				topTransactions: [...topTransactions],
				transactionsSnippets: [transaction, ...user.transactionsSnippets].slice(0, 20),
				portfolio: {
					...user.portfolio,
					portfolioCash: isBuy
						? user.portfolio.portfolioCash - totalPrice - transaction.transactionFees
						: user.portfolio.portfolioCash + totalPrice - transaction.transactionFees,
					numberOfExecutedSellTransactions: isBuy ? user.portfolio.numberOfExecutedSellTransactions : admin.firestore.FieldValue.increment(1),
					numberOfExecutedBuyTransactions: isBuy ? admin.firestore.FieldValue.increment(1) : user.portfolio.numberOfExecutedBuyTransactions,
					lastTransactionSnapshot: newTransactionSnapshots,
					transactionFees: user.portfolio.transactionFees + transaction.transactionFees,
				},
			},
			{ merge: true }
		);
};
