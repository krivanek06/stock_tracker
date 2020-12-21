import { STGeographic, STLog } from "../st-shared/st-share.model";
import { STGroupPartialData } from "../st-group/st-group.model";
import { STPortfolio } from "../st-portfolio/st-portfolio.model";
import { STRank } from "../st-rank/st-rank.model";
import { STTransaction } from "../st-transaction/st-transaction.model";

export enum USER_ACTIVITY {
  SIGNED_IN = "SIGNED_IN",
  SIGNED_OUT = "SIGNED_OUT",
}

export enum USER_STATUS {
  PENDING = "PENDING",
  DENIED = "DENIED",
  ALLOWED = "ALLOWED",
}

export interface STUserIndentificationInformation {
  uid: string;
  nickName: string;
  locale: string;
  photoURL: string;
  accountCreatedDate: string;
}

export interface STUserPartialInformation extends STUserIndentificationInformation {
  portfolio?: STPortfolio;
  rank?: STRank; // weekly update
}

export interface STUserPublicData extends STUserPartialInformation {
  lastSignInDate: string;
  transactionsSnippets: STTransaction[]; // last 10
  portfolioWeeklyChange: STPortfolio[];
  holdings: STTransaction[]; // only open transactions
  resetedAccount: STUserResetedAccount[];
  groups: STUserGroups[];
  activity: USER_ACTIVITY;
  bestAchievedRanks: STRank[];
  userLogs: STLog[];
}

export interface STUserPrivateData  {
  uid: string;
  finnhubKey: string;
  roles?: string[];
  email: string;
  displayName: string;
  providerId: string;
  status: USER_STATUS;
  geographic: STGeographic;
  nicknameLastChange?: Date;
}

export interface STUserGroups {
  groupInvitationSent: STGroupPartialData[];
  groupInvitationReceivedt: STGroupPartialData[];
  groupOwner: STGroupPartialData[];
  groupMember: STGroupPartialData[];
}

export interface STUserResetedAccount {
  date: Date;
  portfolio: STPortfolio;
}


export interface STUserAuthenticationInput {
  uid: string;
  locale: string;
  photoURL: string;
  email: string;
  displayName: string;
  providerId: string;
}

export const ST_USER_COLLECTION_USER = "users";
export const ST_USER_DOCUMENT_PRIVATE_DATA = "private_data";
export const ST_USER_COLLECTION_MORE_INFORMATION = "more_information";
