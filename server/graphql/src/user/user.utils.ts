import {
    STUserAuthenticationInput, STUserPartialInformation,
    STUserPrivateData,
    STUserPublicData,
    USER_ACTIVITY,
    USER_STATUS
} from "./user.model";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

export const createSTUserPrivateData = (user: STUserAuthenticationInput): STUserPrivateData => {
    const stUserPrivateData: STUserPrivateData = {
        displayName: user.displayName,
        email: user.email,
        providerId: user.providerId,
        finnhubKey: null,
        geographic: null,
        uid: user.uid,
        nicknameLastChange: null,
        roles: [],
        status: USER_STATUS.PENDING
    };
    return stUserPrivateData;
};

export const createSTUserPublicData = (user: STUserAuthenticationInput): STUserPublicData => {
    const stUserPublicData: STUserPublicData = {
        nickName: user.email.split('@')[0],
        uid: user.uid,
        activity: USER_ACTIVITY.SIGNED_IN,
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


export const convertSTUserPublicDataToSTUserPartialInformation = (publicData: STUserPublicData) => {
    const partial: STUserPartialInformation = {
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
