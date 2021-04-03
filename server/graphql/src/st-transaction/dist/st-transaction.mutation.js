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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.performTransaction = void 0;
var st_shared_functions_1 = require("./../st-shared/st-shared.functions");
var apollo_server_1 = require("apollo-server");
var api = require("stock-tracker-common-interfaces");
var admin = require("firebase-admin");
var st_transaction_util_1 = require("./st-transaction-util");
var user_query_1 = require("../user/user.query");
exports.performTransaction = function (transactionInput) { return __awaiter(void 0, void 0, Promise, function () {
    var user, isBuy, _a, holdings, lastTransaction, _b, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 7, , 8]);
                return [4 /*yield*/, user_query_1.queryUserPublicData(transactionInput.userId)];
            case 1:
                user = _c.sent();
                isBuy = transactionInput.operation === api.STTransactionOperationEnum.BUY;
                if (!isBuy) return [3 /*break*/, 3];
                return [4 /*yield*/, performBuyTransaction(user, transactionInput)];
            case 2:
                _b = _c.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, performSellTransaction(user, transactionInput)];
            case 4:
                _b = _c.sent();
                _c.label = 5;
            case 5:
                _a = _b, holdings = _a.holdings, lastTransaction = _a.lastTransaction;
                return [4 /*yield*/, updatePortfolioChange(user, transactionInput, holdings)];
            case 6:
                _c.sent();
                return [2 /*return*/, { holdings: holdings, lastTransaction: lastTransaction }];
            case 7:
                error_1 = _c.sent();
                throw new apollo_server_1.ApolloError(error_1);
            case 8: return [2 /*return*/];
        }
    });
}); };
// PRIVATE HELPING FUNCTIONS
var performBuyTransaction = function (user, transactionInput) { return __awaiter(void 0, void 0, Promise, function () {
    var totalPrice, transaction, ref, lastTransaction, holdings, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                totalPrice = transactionInput.price * transactionInput.units;
                if (user.portfolioCash < totalPrice) {
                    throw new apollo_server_1.ApolloError("Not enough cash on the account. Operation was not realized");
                }
                transaction = st_transaction_util_1.createTransactionBuy(user, transactionInput);
                return [4 /*yield*/, admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transaction)];
            case 1:
                ref = _a.sent();
                transaction.transactionId = ref.id;
                lastTransaction = __assign(__assign({}, transaction), { user: null });
                holdings = st_transaction_util_1.addTransactionToUserHolding(user, lastTransaction);
                // update user's holdings
                admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.uid).set({
                    holdings: holdings,
                    transactionsSnippets: __spreadArrays([lastTransaction], user.transactionsSnippets).slice(0, 10),
                    portfolioCash: user.portfolioCash - totalPrice // decrease cash
                }, { merge: true });
                return [2 /*return*/, { holdings: holdings, lastTransaction: lastTransaction }];
            case 2:
                error_2 = _a.sent();
                throw new apollo_server_1.ApolloError(error_2);
            case 3: return [2 /*return*/];
        }
    });
}); };
var performSellTransaction = function (user, transactionInput) { return __awaiter(void 0, void 0, Promise, function () {
    var holdingTransaction, totalPrice, transaction, ref, lastTransaction, holdings, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                holdingTransaction = user.holdings.find(function (s) { return s.symbol === transactionInput.symbol; });
                totalPrice = transactionInput.price * transactionInput.units;
                // check if holdings exists
                if (!holdingTransaction) {
                    throw new apollo_server_1.ApolloError("Symbols was not found is user's holdings. Operation was not realized");
                }
                // check if user has enough stock to sell
                if (holdingTransaction.units < transactionInput.units) {
                    throw new apollo_server_1.ApolloError("Do not have enough units of stock in portfolio. Operation was not realized");
                }
                transaction = st_transaction_util_1.createTransactionSell(user, holdingTransaction, transactionInput);
                return [4 /*yield*/, admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).add(transactionInput)];
            case 1:
                ref = _a.sent();
                transaction.transactionId = ref.id;
                lastTransaction = __assign(__assign({}, transaction), { user: null });
                holdings = st_transaction_util_1.substractTransactionFromUserHolding(user, lastTransaction);
                // update user's holdings
                admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.uid).set({
                    holdings: holdings,
                    transactionsSnippets: __spreadArrays([lastTransaction], user.transactionsSnippets).slice(0, 10),
                    portfolioCash: user.portfolioCash + totalPrice // increase cash
                }, { merge: true });
                return [2 /*return*/, { holdings: holdings, lastTransaction: lastTransaction }];
            case 2:
                error_3 = _a.sent();
                throw new apollo_server_1.ApolloError(error_3);
            case 3: return [2 /*return*/];
        }
    });
}); };
var updatePortfolioChange = function (_a, transaction, userHoldings) {
    var uid = _a.uid, portfolioCash = _a.portfolioCash;
    return __awaiter(void 0, void 0, void 0, function () {
        var userHistoricaldataRef, portfolioChange, lastPortfolioChange, isBuy, transactionsBuy, transactionsSell, newPortfolioChange;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, admin.firestore().collection('users')
                        .doc(uid).collection('more_information').doc('historical_data')];
                case 1:
                    userHistoricaldataRef = _d.sent();
                    return [4 /*yield*/, userHistoricaldataRef.get()];
                case 2:
                    portfolioChange = (_d.sent()).data().portfolioChange;
                    if (portfolioChange.length > 0 && st_shared_functions_1.datesAreOnSameDay(portfolioChange[portfolioChange.length - 1].date, new Date().toUTCString())) {
                        lastPortfolioChange = portfolioChange.pop();
                    }
                    isBuy = transaction.operation === api.STTransactionOperationEnum.BUY;
                    transactionsBuy = isBuy ? transaction.units * transaction.price : 0;
                    transactionsSell = !isBuy ? transaction.units * transaction.price : 0;
                    newPortfolioChange = {
                        transactionsBuy: transactionsBuy + ((_b = lastPortfolioChange === null || lastPortfolioChange === void 0 ? void 0 : lastPortfolioChange.transactionsBuy) !== null && _b !== void 0 ? _b : 0),
                        transactionsSell: transactionsSell + ((_c = lastPortfolioChange === null || lastPortfolioChange === void 0 ? void 0 : lastPortfolioChange.transactionsSell) !== null && _c !== void 0 ? _c : 0),
                        portfolio: {
                            portfolioCash: portfolioCash,
                            portfolioInvested: st_transaction_util_1.sumOfHoldings(userHoldings)
                        },
                        date: st_shared_functions_1.getCurrentIOSDate()
                    };
                    // save portfolio change
                    userHistoricaldataRef.set({
                        portfolioChange: __spreadArrays(portfolioChange, [newPortfolioChange])
                    }, { merge: true });
                    return [2 /*return*/];
            }
        });
    });
};
