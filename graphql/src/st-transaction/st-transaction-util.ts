import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../st-shared/st-shared.functions';

export const createTransactionBuy = (user: api.STUserPublicData, transactionInput: api.STTransactionInput): api.STTransaction => {
	const transactionBuy: api.STTransaction = {
		operation: api.STTransactionOperationEnum.BUY,
		price: transactionInput.price,
		symbol: transactionInput.symbol,
		symbol_logo_url: transactionInput.symbol_logo_url,
		units: transactionInput.units,
		date: getCurrentIOSDate(),
		user: {
			id: user.id,
			photoURL: user.photoURL,
			nickName: user.nickName,
			locale: user.locale,
			accountCreatedDate: user.accountCreatedDate,
		},
		return: null,
		returnChange: null,
	};
	return transactionBuy;
};

export const createTransactionSell = (
	user: api.STUserPublicData,
	holding: api.STHolding,
	transactionInput: api.STTransactionInput
): api.STTransaction => {
	const transactionSell: api.STTransaction = {
		operation: api.STTransactionOperationEnum.SELL,
		price: transactionInput.price,
		symbol: transactionInput.symbol,
		symbol_logo_url: transactionInput.symbol_logo_url,
		units: transactionInput.units,
		date: getCurrentIOSDate(),
		user: {
			id: user.id,
			photoURL: user.photoURL,
			nickName: user.nickName,
			locale: user.locale,
			accountCreatedDate: user.accountCreatedDate,
		},
		return: Math.round((transactionInput.price - holding.breakEvenPrice) * transactionInput.units),
		returnChange: Math.round(((transactionInput.price - holding.breakEvenPrice) / holding.breakEvenPrice) * 100),
	};
	return transactionSell;
};

export const addTransactionToUserHolding = (user: api.STUserPublicData, transaction: api.STTransaction): api.STHolding[] => {
	let holdings = [...user.holdings];
	const index = holdings.map((x) => x.symbol).indexOf(transaction.symbol);
	if (index > -1) {
		// symbol already in user's holdings
		const oldHolding = holdings[index];
		const updatedHolding: api.STHolding = {
			...oldHolding,
			breakEvenPrice: (oldHolding.breakEvenPrice * oldHolding.units + transaction.price * transaction.units) / (oldHolding.units + transaction.units),
			units: oldHolding.units + transaction.units,
		};
		holdings[index] = updatedHolding;
	} else {
		holdings = [
			...holdings,
			{
				symbol: transaction.symbol,
				breakEvenPrice: transaction.price,
				units: transaction.units,
			},
		]; // new symbol in holdings
	}
	return holdings;
};

export const substractTransactionFromUserHolding = (user: api.STUserPublicData, transaction: api.STTransaction): api.STHolding[] => {
	let holdings: api.STHolding[] = [...user.holdings];
	const userHolding = user.holdings.find((x) => x.symbol === transaction.symbol);
	const index = user.holdings.map((x) => x.symbol).indexOf(transaction.symbol);

	if (userHolding.units > transaction.units) {
		const updatedHolding: api.STHolding = {
			...userHolding,
			units: userHolding.units - transaction.units,
		};
		holdings[index] = updatedHolding; // not all units is sold
	} else {
		holdings.splice(index, 1); // all units are sold - remove symbol from holdings
	}
	return holdings;
};

export const sumOfHoldings = (userHoldings: api.STHolding[]): number => {
	if (userHoldings.length === 0) {
		return 0;
	}
	return userHoldings.map((h) => h.breakEvenPrice * h.units).reduce((a, b) => a + b, 0);
};
