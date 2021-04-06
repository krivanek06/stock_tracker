import { sumOfHoldings } from './../st-transaction/st-transaction-util';
import * as api from 'stock-tracker-common-interfaces';
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";
import { convertSTUserPublicDataToSTUserIndentification } from '../user/user.convertor';

export const createEmptySTGroupAllData = (): api.STGroupAllData => {
    const now = getCurrentIOSDate();
    const group: api.STGroupAllData = {
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
}


export const createSTGroupUser = (userPublic: api.STUserPublicData): api.STGroupUser => {
    const groupUser: api.STGroupUser = {
        userIdentification: convertSTUserPublicDataToSTUserIndentification(userPublic),
        portfolio: {
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: sumOfHoldings(userPublic.holdings)
        },
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
        portfolio: groupAllData.portfolio,
        currentAchievedRank: groupAllData.currentAchievedRank
    };
    return partial;
}
