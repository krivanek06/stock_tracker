import {StTransaction, StUserPublicData} from '@core';

export const addTransactionToUserHolding = (user: StUserPublicData, transaction: StTransaction): StTransaction[] => {
    let holdings = [...user.holdings];
    const index = holdings.map(x => x.symbol).indexOf(transaction.symbol);
    if (index > -1) {
        // symbol already in user's holdings
        const oldHolding = holdings[index];
        const updatedHolding: StTransaction = {
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
};


export const substractTransactionFromUserHolding = (user: StUserPublicData, transaction: StTransaction): StTransaction[] => {
    let holdings: StTransaction[] = [...user.holdings];
    const userHolding = user.holdings.find(x => x.symbol === transaction.symbol);

    if (userHolding.units > transaction.units) {
        const updatedHolding: StTransaction = {
            ...userHolding,
            units: userHolding.units - transaction.units,
            date: transaction.date
        };
        const index = user.holdings.map(x => x.symbol).indexOf(transaction.symbol);
        holdings[index] = updatedHolding;
    } else {
        holdings = holdings.filter(x => x.symbol !== transaction.symbol);
    }
    return holdings;
};
