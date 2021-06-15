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
        bestAchievedRanks: [],
        startedBalance: 0,
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
        lastPortfolioSnapshot: null,
        lastTransactionSnapshot: null,
        endDate: null,
        isInfinite: null,
        startDate: null,
        portfolioSnapshots: [],
        transactionSnapshots: [],
        topTransactions: [],
        holdings: [],
        isPrivate: false,
        numberOfExecutedTransactions: 0,
        numberOfMembers: 0
    };
    return group;
}


export const createSTGroupUser = (userPublic: api.STUserPublicData): api.STGroupUser => {
    const groupUser: api.STGroupUser = {
        ...convertSTUserPublicDataToSTUserIndentification(userPublic),
        lastPortfolioSnapshot: {
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: sumOfHoldings(userPublic.holdings),
            date: getCurrentIOSDate()
        },
        lastTransactionSnapshot: null,
        startingPortfolioSnapshot: null,
        numberOfExecutedTransactions: 0,
        lastPortfolioIncreaseNumber: null,
        lastPortfolioIncreasePrct: null, 
        previousPosition: null,
        currentPosition: null,
        sinceDate: getCurrentIOSDate()
    }
    return groupUser;
}


export const createSTGroupPartialDataFromSTGroupAllData = (groupAllData: api.STGroupAllData): api.STGroupPartialData => {
    const partial: api.STGroupPartialData = {
        name: groupAllData.name,
        description: groupAllData.description,
        createdDate: groupAllData.createdDate,
        lastEditedDate: groupAllData.lastEditedDate,
        imageUrl: groupAllData.imageUrl,
        imagePath: groupAllData.imagePath,
        owner: groupAllData.owner,
        lastUpdateDate: groupAllData.lastUpdateDate,
        groupId: groupAllData.groupId,
        lastPortfolioSnapshot: groupAllData.lastPortfolioSnapshot,
        lastTransactionSnapshot: groupAllData.lastTransactionSnapshot,
        currentAchievedRank: groupAllData.currentAchievedRank,
        endDate: groupAllData.endDate,
        isInfinite: groupAllData.isInfinite,
        startDate: groupAllData.startDate,
        isPrivate: groupAllData.isPrivate,
        numberOfExecutedTransactions: groupAllData.numberOfExecutedTransactions,
        numberOfMembers: groupAllData.numberOfMembers,
        startedBalance: groupAllData.startedBalance
    };
    return partial;
}
