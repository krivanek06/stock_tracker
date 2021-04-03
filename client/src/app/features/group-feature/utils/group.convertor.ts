import {StGroupAllData, StGroupPartialData} from '@core';

export const convertStGroupAllDataToStGroupPartialData = (data: StGroupAllData): StGroupPartialData => {
    const result: StGroupPartialData = {
        __typename: 'STGroupPartialData',
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
        portfolio: data.portfolio
    };

    return result;
};
