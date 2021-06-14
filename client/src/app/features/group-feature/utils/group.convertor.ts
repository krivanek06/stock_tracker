import {StGroupAllData, StGroupIdentificationDataFragment} from '@core';

export const convertStGroupAllDataToStGroupPartialData = (data: StGroupAllData): StGroupIdentificationDataFragment => {
    const result: StGroupIdentificationDataFragment = {
        __typename: 'STGroupAllData',
        groupId: data.groupId,
        imageUrl: data.imageUrl,
        imagePath: data.imagePath,
        createdDate: data.createdDate,
        name: data.name,
        currentAchievedRanks: data.currentAchievedRanks,
        description: data.description,
        lastEditedDate: data.lastEditedDate,
        lastUpdateDate: data.lastUpdateDate,
        owner: data.owner,
        endDate: data.endDate,
        isInfinite: data.isInfinite,
        isPrivate: data.isPrivate,
        lastPortfolioSnapshot: data.lastPortfolioSnapshot,
        lastTransactionSnapshot: data.lastTransactionSnapshot,
        numberOfExecutedTransactions: data.numberOfExecutedTransactions,
        startDate: data.startDate,
        topMembers: []
    };

    return result;
};
