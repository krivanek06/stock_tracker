import { STUserIndentificationWithPortfolio } from './user.model';
import { STLog } from './st-share.model';
import { STRank } from './st-rank.model';
import { STTransaction, STTransactionSnapshot } from './st-transaction.model';
import { STPortfolioSnapshot } from './st-portfolio.model';


export interface STSearchGroups {
    groups: STGroupAllData[];
}

export interface STGroupAllData {
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
    numberOfExecutedBuyTransactions: number;
    numberOfExecutedSellTransactions: number;
    numberOfMembers: number;
    startedBalance: number;
    lastPortfolioIncreaseNumber: number;
    lastPortfolioIncreasePrct: number;
    lastPortfolioBalance: number;
    topTransactions: STTransaction[]; // only sold stock, top profit desc
    lastTransactions: STTransaction[]; // last 20 transactions
    managers: STGroupUser[];
    members: STGroupUser[];
    invitationSent: STGroupUser[];
    invitationReceived: STGroupUser[];
    holdings: STTransaction[];
}

export interface STGroupHistoricalData {
    portfolioSnapshots: STPortfolioSnapshot[];
    transactionSnapshots: STTransactionSnapshot[];
    bestAchievedRanks: STRank[];
    groupLogs: STLog[];
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
    isOwnerAlsoMember: boolean;
    managers?: string[]
    members?: string[]
    invitationSent: string[]
    invitationReceived?: string[]
}


export const ST_GROUP_COLLECTION_GROUPS = 'groups';
export const ST_GROUP_COLLECTION_MORE_INFORMATION = "more_information";
export const  ST_GROUP_COLLECTION_HISTORICAL_DATA = "historical_data";