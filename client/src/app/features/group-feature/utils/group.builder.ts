import {StGroupAllDataInput, StUserIndentificationDataFragment} from '@core';
import {GroupForm} from '../model';


export const createSTGroupAllDataInput = (form: GroupForm,
                                          invitationSent: StUserIndentificationDataFragment[]): StGroupAllDataInput => {
    return {
        name: form.name,
        description: form.description,
        imagePath: form.imagePath,
        imageUrl: form.imageUrl,
        endDate: form.endDate,
        startDate: form.startDate,
        isInfinite: form.isInfinite,
        isPrivate: form.isPrivate,
        isOwnerAlsoMember: form.isOwnerAlsoMember,
        invitationReceived: [],
        managers: [],
        members: [],
        invitationSent: [...invitationSent.map(x => x.id)]
    };
};
/*
export const createSTGroupAllDataInputFromGroup = (form: GroupForm, group: StGroupAllData) => {
    const result: StGroupAllDataInput = {
        name: form.name,
        description: form.description,
        imagePath: form.imagePath,
        imageUrl: form.imageUrl,
        owner: group.owner.useridentification.id,
        invitationReceived: [...group.invitationReceived.map(x => x.useridentification.id)],
        managers: [...group.managers.map(x => x.useridentification.id)],
        members: [...group.members.map(x => x.useridentification.id)],
        invitationSent: [...group.invitationSent.map(x => x.useridentification.id)]
    };
    return result;
};*/

/*
export const createNewStGroupUser = (userPublic: StUserPublicData): StGroupUser => {
    return {
        __typename: 'STGroupUser',
        accountCreatedDate: userPublic.accountCreatedDate,
        locale: userPublic.locale,
        nickName: userPublic.nickName,
        photoURL: userPublic.photoURL,
        id: userPublic.id,
        currentPosition: null,
        lastPortfolioIncreaseNumber: null,
        lastPortfolioIncreasePrct: null,
        lastPortfolioSnapshot
        sinceDate: new Date().toISOString(),
        portfolio: {
            __typename: 'STPortfolio',
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: userPublic.holdings.map(h => h.units * h.price).reduce((a, b) => a + b, 0)
        }
    };
};
*/
