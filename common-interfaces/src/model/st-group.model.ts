import { STUserIndentificationWithPortfolio } from './user.model';
import { STLog } from './st-share.model';
import { STRank } from './st-rank.model';
import { STTransaction, STTransactionSnapshot } from './st-transaction.model';
import { STPortfolioSnapshot } from './st-portfolio.model';


export interface STSearchGroups {
    groups: STGroupPartialData[];
}

export interface STGroupPartialData {
    groupId?: string;
    name: string;
    description: string;
    imagePath?: string
    imageUrl?: string
    lastPortfolioSnapshot: STPortfolioSnapshot;
    lastTransactionSnapshot: STTransactionSnapshot;
    owner: STGroupUser;
    lastUpdateDate: string;
    lastEditedDate: string;
    createdDate: string;
    currentAchievedRank: STRank;
    startDate: string;
    endDate: string;
    isInfinite: boolean;
    isPrivate: boolean; // if true then group is invite only
    numberOfExecutedTransactions: number;
    numberOfMembers: number;
    startedBalance: number;
}

export interface STGroupAllData extends STGroupPartialData {
    bestAchievedRanks: STRank[];
    topTransactions: STTransaction[]; // only sold stock, top profit desc
    lastTransactions: STTransaction[]; // last 20 transactions
    groupLogs: STLog[];
    portfolioSnapshots: STPortfolioSnapshot[];
    transactionSnapshots: STTransactionSnapshot[];
    managers: STGroupUser[];
    members: STGroupUser[];
    invitationSent: STGroupUser[];
    invitationReceived: STGroupUser[];
    holdings: STTransaction[];
}


export interface STGroupUser extends STUserIndentificationWithPortfolio {
    currentPosition: number;  // position in highest balance
    previousPosition: number; // position in highest balance
    startingPortfolioSnapshot: STPortfolioSnapshot;
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
    managers?: string[]
    members?: string[]
    invitationSent: string[]
    invitationReceived?: string[]
}


export const ST_GROUP_COLLECTION_GROUPS = 'groups';
