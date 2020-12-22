import {STGroupAllData, STGroupPartialData, STGroupUser} from "./st-group.model";
import {STUserPartialInformation} from "../user/user.model";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

export const createEmptySTGroupAllData = (): STGroupAllData => {
    const now = getCurrentIOSDate();
    const group: STGroupAllData = {
        members: [],
        bestAchievedRanks: [],
        createdDate: now,
        lastUpdateDate: now,
        currentAchievedRank: null,
        description: null,
        groupLogs: [],
        invitationReceived: [],
        invitationSent: [],
        lastTransactions: [],
        managers: [],
        name: null,
        numberOfMembers: 0,
        owner: null,
        portfolio: null,
        portfolioChart: [],
        topTransactions: []
    };
    return group;
}


export const createSTGroupUser = (userPartial: STUserPartialInformation): STGroupUser => {
    const groupUser: STGroupUser = {
        user: userPartial,
        sinceDate: getCurrentIOSDate()
    }
    return groupUser;
}


export const createSTGroupPartialDataFromSTGroupAllData = (groupAllData: STGroupAllData): STGroupPartialData => {
    const partial: STGroupPartialData = {
        name: groupAllData.name,
        description: groupAllData.description,
        createdDate: groupAllData.createdDate,
        imageUrl: groupAllData.imageUrl,
        imagePath: groupAllData.imagePath,
        owner: groupAllData.owner,
        lastUpdateDate: groupAllData.lastUpdateDate,
        groupId: groupAllData.groupId,
        portfolio: groupAllData.portfolio,
        numberOfMembers: groupAllData.numberOfMembers,
        currentAchievedRank: groupAllData.currentAchievedRank
    };
    return partial;
}
