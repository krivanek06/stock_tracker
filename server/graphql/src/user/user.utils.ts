import * as api from 'stock-tracker-common-interfaces';
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

export const createSTUserPrivateData = (user: api.STUserAuthenticationInput): api.STUserPrivateData => {
    const stUserPrivateData: api.STUserPrivateData = {
        displayName: user.displayName,
        email: user.email,
        providerId: user.providerId,
        finnhubKey: null,
        geographic: null,
        uid: user.uid,
        nicknameLastChange: null,
        roles: [],
        status: api.USER_STATUS.PENDING
    };
    return stUserPrivateData;
};

export const createSTUserPublicData = (user: api.STUserAuthenticationInput): api.STUserPublicData => {
    const stUserPublicData: api.STUserPublicData = {
        nickName: user.email.split('@')[0],
        uid: user.uid,
        activity: api.USER_ACTIVITY.SIGNED_IN,
        locale: user.locale,
        photoURL: user.photoURL,
        accountCreatedDate: getCurrentIOSDate(),
        lastSignInDate: getCurrentIOSDate(),
        bestAchievedRanks: [],
        groups: {
            groupInvitationReceived: [],
            groupInvitationSent: [],
            groupMember: [],
            groupOwner: []
        },
        holdings: [],
        portfolio: null,
        portfolioWeeklyChange: [],
        rank: null,
        resetedAccount: [],
        transactionsSnippets: [],
        userLogs: []
    };
    return stUserPublicData;
};


export const convertSTUserPublicDataToSTUserPartialInformation = (publicData: api.STUserPublicData) => {
    const partial: api.STUserPartialInformation = {
        rank: publicData.rank,
        portfolio: publicData.portfolio,
        accountCreatedDate: publicData.accountCreatedDate,
        locale: publicData.locale,
        uid: publicData.uid,
        nickName: publicData.nickName,
        photoURL: publicData.photoURL
    };
    return partial;
}
