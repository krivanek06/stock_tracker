import { sumOfHoldings } from './../st-transaction/st-transaction-util';
import * as api from 'stock-tracker-common-interfaces';
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";
import { convertSTUserPublicDataToSTUserIndentification } from '../user/user.convertor';

export const initGroupFromInput = (groupInput: api.STGroupAllDataInput): api.STGroupAllData => {
    const newGroup: api.STGroupAllData = {
        ...createEmptySTGroupAllData(),
        name: groupInput.name,
        description: groupInput.description,
        imagePath: groupInput.imagePath,
        imageUrl: groupInput.imageUrl,
        startDate: groupInput.startDate,
        endDate: groupInput.endDate,
        isInfinite: groupInput.isInfinite,
        isPrivate: groupInput.isPrivate
    }
    return newGroup;
}

export const createEmptySTGroupAllData = (): api.STGroupAllData => {
    const now = getCurrentIOSDate();
    const group: api.STGroupAllData = {
        members: [],
        createdDate: now,
        lastUpdateDate: now,
        lastEditedDate: now,
        currentAchievedRank: null,
        description: null,
        invitationReceived: [],
        invitationSent: [],
        lastTransactions: [],
        managers: [],
        name: null,
        owner: null,
        lastPortfolioSnapshot: null,
        lastTransactionSnapshot: null,
        endDate: null,
        isInfinite: null,
        startDate: null,
        topTransactions: [],
        holdings: [],
        isPrivate: false,
        numberOfExecutedTransactions: 0,
        numberOfExecutedBuyTransactions: 0,
        numberOfExecutedSellTransactions: 0,
        imagePath: null,
        imageUrl: null,
        numberOfMembers: 0,
        lastPortfolioBalance: 0,
        lastPortfolioIncreaseNumber: 0,
        lastPortfolioIncreasePrct: 0,
        startedBalance: 0
    };
    return group;
}

export const createEmptySTGroupHistoricalData = (): api.STGroupHistoricalData => {
    return {
        bestAchievedRanks: [],
        groupLogs: [],
        portfolioSnapshots: [],
        transactionSnapshots: []
    }
}


export const createSTGroupUser = (userPublic: api.STUserPublicData): api.STGroupUser => {
    const groupUser: api.STGroupUser = {
        ...convertSTUserPublicDataToSTUserIndentification(userPublic),
        lastPortfolioSnapshot: {
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: sumOfHoldings(userPublic.holdings),
            date: getCurrentIOSDate()
        },
        startingPortfolioSnapshot: {
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: sumOfHoldings(userPublic.holdings),
            date: getCurrentIOSDate()
        },
        lastTransactionSnapshot: null,
        numberOfExecutedTransactions: 0,
        numberOfExecutedBuyTransactions: 0,
        numberOfExecutedSellTransactions: 0,
        lastPortfolioIncreaseNumber: null,
        lastPortfolioIncreasePrct: null, 
        previousPosition: null,
        currentPosition: null,
        sinceDate: getCurrentIOSDate()
    }
    return groupUser;
}