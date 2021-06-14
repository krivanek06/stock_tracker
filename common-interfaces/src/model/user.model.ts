import { STPortfolioSnapshot } from './st-portfolio.model';
import { STGroupPartialData } from './st-group.model';
import { STTransaction, STTransactionSnapshot } from './st-transaction.model';
import { STRank } from './st-rank.model';
import { STLog, STGeographic } from './st-share.model';


export enum USER_ACTIVITY {
    SIGNED_IN = "SIGNED_IN",
    SIGNED_OUT = "SIGNED_OUT",
}

export enum USER_STATUS {
    PENDING = "PENDING",
    DENIED = "DENIED",
    ALLOWED = "ALLOWED",
}

export interface STUserIndentification {
    id: string;
    nickName: string;
    locale: string;
    photoURL: string;
    accountCreatedDate: string;
}

export interface STUserIndentificationWithPortfolio extends STUserIndentification {
    lastPortfolioSnapshot: STPortfolioSnapshot;
    lastPortfolioIncreaseNumber: number;
    lastPortfolioIncreasePrct: number;
    numberOfExecutedTransactions: number;
    lastTransactionSnapshot: STTransactionSnapshot;
}

export interface STUserPublicData extends STUserIndentificationWithPortfolio {
    portfolioCash: number;
    rank?: STRank; // weekly update
    transactionsSnippets: STTransaction[]; // last N
    lastSignInDate: string;
    holdings: STTransaction[]; // only open transactions
    groups: STUserGroupsIdentification;
    activity: USER_ACTIVITY;
}

export interface STUserHistoricalData {
    portfolioSnapshots: STPortfolioSnapshot[];
    transactionSnapshots: STTransactionSnapshot[];
    resetedAccount: STUserResetedAccount[];
    bestAchievedRanks: STRank[];
    userLogs: STLog[];
}






export interface STUserPrivateData {
    id: string;
    finnhubKey: string;
    tradingEnabledDate: string;
    roles?: string[];
    email: string;
    displayName: string;
    providerId: string;
    status: USER_STATUS;
    geographic: STGeographic;
    nicknameLastChange?: string;
}



export interface STUserGroupsIdentification {
    groupInvitationSent: string[];
    groupInvitationReceived: string[];
    groupOwner: string[];
    groupMember: string[];
}


export interface STUserGroups {
    groupInvitationSent: STGroupPartialData[];
    groupInvitationReceived: STGroupPartialData[];
    groupOwner: STGroupPartialData[];
    groupMember: STGroupPartialData[];
}

export interface STUserResetedAccount {
    date: string;
    portfolioTotal: number;
}


export interface STUserAuthenticationInput {
    uid: string;
    locale: string;
    photoURL: string;
    email: string;
    displayName: string;
    providerId: string;
}

export interface STUserEditDataInput {
    userId: string;         // TODO REMOVE LATER WHEN USER_ID WILL BE IN TOKEN
    finnhubKey: string;
    nickName: string;
    photoURL: string;
}

export interface STUserIndetificationInformationInput {
    uid: string;
    nickName: string;
    locale?: string;
    photoURL: string;
    accountCreatedDate: string;
}

export const ST_USER_COLLECTION_USER = "users";
export const ST_USER_DOCUMENT_PRIVATE_DATA = "private_data";
export const ST_USER_DOCUMENT_HISTORICAL_DATA = "historical_data";
export const ST_USER_COLLECTION_MORE_INFORMATION = "more_information";


export enum USER_ROLES_ENUM {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_GROUP_CREATE = 'ROLE_GROUP_CREATE'
}