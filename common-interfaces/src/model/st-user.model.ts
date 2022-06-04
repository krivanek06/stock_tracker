import { STGroupAllData } from './st-group.model';
import { STPortfolioEntity, STPortfolioRiskCalculations, STPortfolioSnapshot } from './st-portfolio.model';
import { STRank } from './st-rank.model';
import { STGeographic, STLog } from './st-share.model';
import { STHolding, STTransaction, STTransactionSnapshot } from './st-transaction.model';


export enum USER_ACTIVITY {
    SIGNED_IN = "SIGNED_IN",
    SIGNED_OUT = "SIGNED_OUT",
}

export enum USER_STATUS {
    PENDING = "PENDING",
    DENIED = "DENIED",
    ALLOWED = "ALLOWED",
}

export interface STUserIndentificationBase {
    nickName: string;
    locale: string;
    photoURL: string;
    accountCreatedDate: string;
}

export interface STUserIndentification extends STUserIndentificationBase {
    id: string;
}

export interface STUserIndentificationWithPortfolio extends STUserIndentification, STPortfolioEntity {
}

export interface STUserPublicData extends STUserIndentificationWithPortfolio {
    rank: STRank; // weekly update
    transactionsSnippets: STTransaction[]; // last N
    topTransactions: STTransaction[]; 
    lastSignInDate: string;
    holdings: STHolding[]; // only open transactions
    groups: STUserGroupsIdentification;
    activity: USER_ACTIVITY;
    portfolioRisk?: STPortfolioRiskCalculations;
}

export interface STUserHistoricalData {
    id: string;
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
    roles: string[];
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
    groupWatched: string[];
}


export interface STUserGroups {
    groupInvitationSent: STGroupAllData[];
    groupInvitationReceived: STGroupAllData[];
    groupOwner: STGroupAllData[];
    groupMember: STGroupAllData[];
    groupWatched: STGroupAllData[];
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

export interface STUserIdentificationInformationInput {
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