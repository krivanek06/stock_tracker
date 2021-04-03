"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.sumOfHoldings = exports.substractTransactionFromUserHolding = exports.addTransactionToUserHolding = exports.createTransactionSell = exports.createTransactionBuy = void 0;
var api = require("stock-tracker-common-interfaces");
var st_shared_functions_1 = require("../st-shared/st-shared.functions");
exports.createTransactionBuy = function (user, transactionInput) {
    var transactionBuy = {
        operation: api.STTransactionOperationEnum.BUY,
        price: transactionInput.price,
        symbol: transactionInput.symbol,
        symbol_logo_url: transactionInput.symbol_logo_url,
        units: transactionInput.units,
        date: st_shared_functions_1.getCurrentIOSDate(),
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
exports.createTransactionSell = function (user, transaction, transactionInput) {
    var transactionSell = {
        operation: api.STTransactionOperationEnum.SELL,
        price: transactionInput.price,
        symbol: transactionInput.symbol,
        symbol_logo_url: transactionInput.symbol_logo_url,
        units: transactionInput.units,
        date: st_shared_functions_1.getCurrentIOSDate(),
        user: {
            uid: user.uid,
            photoURL: user.photoURL,
            nickName: user.nickName,
            locale: user.locale,
            accountCreatedDate: user.accountCreatedDate
        },
        "return": Math.round((transactionInput.price - transaction.price) * transactionInput.units),
        returnChange: Math.round(((transactionInput.price - transaction.price) / transaction.price) * 100)
    };
    return transactionSell;
};
exports.addTransactionToUserHolding = function (user, transaction) {
    var holdings = __spreadArrays(user.holdings);
    var index = holdings.map(function (x) { return x.symbol; }).indexOf(transaction.symbol);
    if (index > -1) {
        // symbol already in user's holdings
        var oldHolding = holdings[index];
        var updatedHolding = __assign(__assign({}, oldHolding), { price: (oldHolding.price * oldHolding.units + transaction.price * transaction.units) / (oldHolding.units + transaction.units), units: oldHolding.units + transaction.units, date: transaction.date });
        holdings[index] = updatedHolding;
    }
    else {
        holdings = __spreadArrays(holdings, [transaction]); // new symbol in holdings
    }
    return holdings;
};
exports.substractTransactionFromUserHolding = function (user, transaction) {
    var holdings = __spreadArrays(user.holdings);
    var userHolding = user.holdings.find(function (x) { return x.symbol === transaction.symbol; });
    var index = user.holdings.map(function (x) { return x.symbol; }).indexOf(transaction.symbol);
    if (userHolding.units > transaction.units) {
        var updatedHolding = __assign(__assign({}, userHolding), { units: userHolding.units - transaction.units, date: transaction.date });
        holdings[index] = updatedHolding; // not all units is sold
    }
    else {
        holdings = holdings.splice(index, 1); // all units are sold
    }
    return holdings;
};
exports.sumOfHoldings = function (userHoldings) {
    return userHoldings.map(function (h) { return h.price * h.units; }).reduce(function (a, b) { return a + b; }, 0);
};
