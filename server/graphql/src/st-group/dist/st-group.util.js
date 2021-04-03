"use strict";
exports.__esModule = true;
exports.createSTGroupPartialDataFromSTGroupAllData = exports.createSTGroupUser = exports.createEmptySTGroupAllData = void 0;
var st_transaction_util_1 = require("./../st-transaction/st-transaction-util");
var st_shared_functions_1 = require("../st-shared/st-shared.functions");
var user_convertor_1 = require("../user/user.convertor");
exports.createEmptySTGroupAllData = function () {
    var now = st_shared_functions_1.getCurrentIOSDate();
    var group = {
        members: [],
        bestAchievedRanks: [],
        createdDate: now,
        lastUpdateDate: now,
        lastEditedDate: now,
        currentAchievedRank: null,
        description: null,
        groupLogs: [],
        invitationReceived: [],
        invitationSent: [],
        lastTransactions: [],
        managers: [],
        name: null,
        owner: null,
        portfolio: {
            portfolioCash: 0,
            portfolioInvested: 0
        },
        portfolioChart: [],
        topTransactions: []
    };
    return group;
};
exports.createSTGroupUser = function (userPublic) {
    var groupUser = {
        userIdentification: user_convertor_1.convertSTUserPublicDataToSTUserIndentification(userPublic),
        portfolio: {
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: st_transaction_util_1.sumOfHoldings(userPublic.holdings)
        },
        sinceDate: st_shared_functions_1.getCurrentIOSDate()
    };
    return groupUser;
};
exports.createSTGroupPartialDataFromSTGroupAllData = function (groupAllData) {
    var partial = {
        name: groupAllData.name,
        description: groupAllData.description,
        createdDate: groupAllData.createdDate,
        lastEditedDate: groupAllData.lastEditedDate,
        imageUrl: groupAllData.imageUrl,
        imagePath: groupAllData.imagePath,
        owner: groupAllData.owner,
        lastUpdateDate: groupAllData.lastUpdateDate,
        groupId: groupAllData.groupId,
        portfolio: groupAllData.portfolio,
        currentAchievedRank: groupAllData.currentAchievedRank
    };
    return partial;
};
