import * as api from 'stock-tracker-common-interfaces';
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/stocktrackertest-e51fc.appspot.com/o/default%2Fdefault_user.png?alt=media&token=d1c21428-de0c-4dde-ad29-8d646616aa11';

export const createSTUserPrivateData = (user: api.STUserAuthenticationInput): api.STUserPrivateData => {
    const stUserPrivateData: api.STUserPrivateData = {
        displayName: user.displayName,
        email: user.email,
        providerId: user.providerId,
        finnhubKey: null,
        tradingEnabledDate: null,
        geographic: null,
        id: user.uid,
        nicknameLastChange: null,
        roles: [],
        status: api.USER_STATUS.PENDING
    };
    return stUserPrivateData;
};

export const createSTUserPublicData = (user: api.STUserAuthenticationInput): api.STUserPublicData => {
    const stUserPublicData: api.STUserPublicData = {
        nickName: user.email.split('@')[0],
        id: user.uid,
        activity: api.USER_ACTIVITY.SIGNED_IN,
        locale: user.locale || null,
        photoURL: user.photoURL || defaultImage,
        accountCreatedDate: getCurrentIOSDate(),
        lastSignInDate: getCurrentIOSDate(),
        transactionsSnippets: [],
        lastPortfolioSnapshot: null,
        lastTransactionSnapshot: null,
        lastPortfolioIncreaseNumber: null,
        lastPortfolioIncreasePrct: null,
        numberOfExecutedTransactions: 0,
        numberOfExecutedBuyTransactions: 0,
        numberOfExecutedSellTransactions: 0,
        groups: {
            groupInvitationReceived: [],
            groupInvitationSent: [],
            groupMember: [],
            groupOwner: []
        },
        topTransactions: [],
        holdings: [],
        portfolioCash: 0,
        rank: null
    };
    return stUserPublicData;
};


export const createSTUserHistoricalData = (): api.STUserHistoricalData => {
    const historicalData: api.STUserHistoricalData = {
        portfolioSnapshots: [],
        transactionSnapshots: [],
        resetedAccount: [],
        bestAchievedRanks: [],
        userLogs: [],
    }
    return historicalData;
};


