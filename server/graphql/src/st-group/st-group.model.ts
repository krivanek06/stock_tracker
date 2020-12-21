import {STSimpleChart, STLog} from "../st-shared/st-share.model";
import {STPortfolio} from "../st-portfolio/st-portfolio.model";
import {STRank} from "../st-rank/st-rank.model";
import {STTransaction} from "../st-transaction/st-transaction.model";
import {STUserPartialInformation} from "../user/user.model";

export interface STGroupPartialData {
    groupId?: string;
    name: string;
    description: string;
    portfolio: STPortfolio;
    owner: STGroupUser;
    numberOfMembers: number;
    lastUpdateDate: string;
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
    groupId: string
    name: string
    description: string
    owner: string
    managers: string[]
    members: string[]
    invitationSent: string[]
    invitationReceived: string[]
}


export const ST_GROUP_COLLECTION_GROUPS = 'groups';
