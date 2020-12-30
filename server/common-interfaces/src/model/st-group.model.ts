import { STUserPartialInformation } from './user.model';
import { STLog } from './st-share.model';
import { STRank } from './st-rank.model';
import { STTransaction } from './st-transaction.model';
import { STPortfolio } from './st-portfolio.model';


export interface STSearchGroups {
    groups: STGroupPartialData[];
}

export interface STGroupPartialData {
    groupId?: string;
    name: string;
    description: string;
    imagePath?: string
    imageUrl?: string
    portfolio: STPortfolio;
    owner: STGroupUser;
    lastUpdateDate: string;
    lastEditedDate: string;
    createdDate: string;
    currentAchievedRank: STRank;
}

export interface STGroupAllData extends STGroupPartialData {
    bestAchievedRanks: STRank[];
    topTransactions: STTransaction[]; // only sold stock, top profit desc
    lastTransactions: STTransaction[];
    groupLogs: STLog[];
    portfolioChart: STPortfolio[];
    managers: STGroupUser[];
    members: STGroupUser[];
    invitationSent: STGroupUser[];
    invitationReceived: STGroupUser[];
}


export interface STGroupUser {
    user: STUserPartialInformation;
    sinceDate: string;
}


export interface STGroupAllDataInput {
    groupId?: string
    name: string
    description: string
    imagePath?: string
    imageUrl?: string
    owner: string
    managers?: string[]
    members?: string[]
    invitationSent: string[]
    invitationReceived?: string[]
}


export const ST_GROUP_COLLECTION_GROUPS = 'groups';
