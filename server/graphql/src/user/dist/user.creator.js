"use strict";
exports.__esModule = true;
exports.createSTUserHistoricalData = exports.createSTUserPublicData = exports.createSTUserPrivateData = void 0;
var api = require("stock-tracker-common-interfaces");
var st_shared_functions_1 = require("../st-shared/st-shared.functions");
var defaultImage = 'https://firebasestorage.googleapis.com/v0/b/stocktrackertest-e51fc.appspot.com/o/default%2Fdefault_user.png?alt=media&token=d1c21428-de0c-4dde-ad29-8d646616aa11';
exports.createSTUserPrivateData = function (user) {
    var stUserPrivateData = {
        displayName: user.displayName,
        email: user.email,
        providerId: user.providerId,
        finnhubKey: null,
        tradingEnabledDate: null,
        geographic: null,
        uid: user.uid,
        nicknameLastChange: null,
        roles: [],
        status: api.USER_STATUS.PENDING
    };
    return stUserPrivateData;
};
exports.createSTUserPublicData = function (user) {
    var stUserPublicData = {
        nickName: user.email.split('@')[0],
        uid: user.uid,
        activity: api.USER_ACTIVITY.SIGNED_IN,
        locale: user.locale || null,
        photoURL: user.photoURL || defaultImage,
        accountCreatedDate: st_shared_functions_1.getCurrentIOSDate(),
        lastSignInDate: st_shared_functions_1.getCurrentIOSDate(),
        transactionsSnippets: [],
        groups: {
            groupInvitationReceived: [],
            groupInvitationSent: [],
            groupMember: [],
            groupOwner: []
        },
        latestPortfolioChange: {
            portfolio: null,
            transactionsBuy: 0,
            transactionsSell: 0,
            date: st_shared_functions_1.getCurrentIOSDate()
        },
        holdings: [],
        portfolioCash: 0,
        rank: null
    };
    return stUserPublicData;
};
exports.createSTUserHistoricalData = function () {
    var historicalData = {
        portfolioChange: [],
        resetedAccount: [],
        bestAchievedRanks: [],
        userLogs: []
    };
    return historicalData;
};
