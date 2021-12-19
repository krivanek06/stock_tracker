import { STPortfolioSnapshot, STPortfolioSnapshotStarted, STPortfolioWrapper } from './st-portfolio.model';
import { STRank } from './st-rank.model';
import { STLog } from './st-share.model';
import { STHolding, STTransaction, STTransactionSnapshot } from './st-transaction.model';
import { STUserIndentificationWithPortfolio } from './st-user.model';

export interface STGroupAllData {
    id?: string;
    name: string;
    description: string;
    imagePath?: string
    imageUrl?: string
    owner: STGroupUser;
    lastUpdateDate: string;
    lastEditedDate: string;
    watchedByUsers: number;
    createdDate: string;
    currentAchievedRank: STRank;
    startDate: string;
    endDate: string;
    isInfinite: boolean;
    isPrivate: boolean; // if true then group is invite only
    isClosed: boolean; // true only if isInfinite === false && endDate < today
    numberOfMembers: number;
    numberOfInvitationReceived: number;
    numberOfInvitationSent: number; 
    portfolio: STPortfolioWrapper; // total group portfolio
    startedPortfolio: STPortfolioSnapshotStarted; // accumulation of user's portfolio when they joined group
    topTransactions: STTransaction[]; // only sold stock, top profit desc
    lastTransactions: STTransaction[]; // last 20 transactions
    managers: STGroupUser[];
}


export interface STGroupMembersDocument {
    id: string;
    holdings: STGroupHoldings[];
    members: STGroupUser[];
    invitationSent: STGroupUser[];
    invitationReceived: STGroupUser[];
}

export interface STGroupHoldings {
    holding: STHolding;
    numberOfUsers: number;
}

export interface STGroupHistoricalData {
    portfolioSnapshots: STPortfolioSnapshot[];
    transactionSnapshots: STTransactionSnapshot[];
    bestAchievedRanks: STRank[];
    groupLogs: STLog[];
}


export interface STGroupUser extends STUserIndentificationWithPortfolio {
    startedPortfolio: STPortfolioSnapshotStarted;
    currentPosition: number;  // position in highest balance
    previousPosition: number; // position in highest balance
    sinceDate: string;
}


export interface STGroupAllDataInput {
    groupId?: string
    name: string
    description: string
    imagePath?: string
    imageUrl?: string
    startDate: string;
    endDate: string;
    isInfinite: boolean;
    isPrivate: boolean;
    isOwnerAlsoMember: boolean;
    invitationSent: string[]
    invitationReceived?: string[]
}


export const ST_GROUP_COLLECTION_GROUPS = 'groups';
export const ST_GROUP_COLLECTION_MORE_INFORMATION = "more_information";
export const  ST_GROUP_COLLECTION_HISTORICAL_DATA = "historical_data";
export const  ST_GROUP_COLLECTION_MEMBERS = "members";