import {StGroupAllData, StGroupAllDataInput, StGroupUser, StUserPublicData} from '@core';
import {GroupForm} from '../model';


export const createSTGroupAllDataInput = (ownerId: string,
                                          form: GroupForm,
                                          invitationSent: StUserPublicData[]) => {
    const result: StGroupAllDataInput = {
        name: form.name,
        description: form.description,
        imagePath: form.imagePath,
        imageUrl: form.imageUrl,
        owner: ownerId,
        invitationReceived: [],
        managers: [],
        members: [],
        invitationSent: [...invitationSent.map(x => x.uid)]
    };
    return result;
};

export const createSTGroupAllDataInputFromGroup = (form: GroupForm, group: StGroupAllData) => {
    const result: StGroupAllDataInput = {
        name: form.name,
        description: form.description,
        imagePath: form.imagePath,
        imageUrl: form.imageUrl,
        owner: group.owner.useridentification.uid,
        invitationReceived: [...group.invitationReceived.map(x => x.useridentification.uid)],
        managers: [...group.managers.map(x => x.useridentification.uid)],
        members: [...group.members.map(x => x.useridentification.uid)],
        invitationSent: [...group.invitationSent.map(x => x.useridentification.uid)]
    };
    return result;
};


export const createNewStGroupUser = (userPublic: StUserPublicData): StGroupUser => {
    return {
        __typename: 'STGroupUser',
        useridentification: {
            __typename: 'STUserIndetification',
            accountCreatedDate: userPublic.accountCreatedDate,
            locale: userPublic.locale,
            nickName: userPublic.nickName,
            photoURL: userPublic.photoURL,
            uid: userPublic.uid
        },
        sinceDate: new Date().toISOString(),
        portfolio: {
            __typename: 'STPortfolio',
            portfolioCash: userPublic.portfolioCash,
            portfolioInvested: userPublic.holdings.map(h => h.units * h.price).reduce((a, b) => a + b, 0)
        }
    };
};
