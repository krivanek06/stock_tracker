import {gql} from 'apollo-server';


export const userTypeDefs = gql`
    # type 
    type STUserGroups {
        groupInvitationSent: [STGroupPartialData]
        groupInvitationReceived: [STGroupPartialData]
        groupOwner: [STGroupPartialData]
        groupMember: [STGroupPartialData]
    }

    type STUserIndetification {
        id: String!
        nickName: String!
        locale: String
        photoURL: String!
        accountCreatedDate: String!
    }

    type STUserPublicData {
        id: String!
        nickName: String!
        locale: String
        photoURL: String
        accountCreatedDate: String!
        lastSignInDate: String!
        portfolioCash: Float!
        rank: STRank
        holdings: [STTransaction]!
        transactionsSnippets: [STTransaction]!
        activity: USER_ACTIVITY
        groups: STUserGroups!
        latestPortfolioChange: STPortfolioChange
        userPrivateData: STUserPrivateData!
        userHistoricalData: STUserHistoricalData!
        stockWatchlist: [STStockWatchlist]!
    }

    type STUserPrivateData {
        id: String
        finnhubKey: String
        tradingEnabledDate: String
        roles: [String]
        email: String!
        displayName: String!
        providerId: String
        status: USER_STATUS!
        geographic: STGeographic
        nicknameLastChange: String
    }

    type STUserHistoricalData {
        portfolioChange: [STPortfolioChange]!
        bestAchievedRanks: [STRank]!
        resetedAccount: [STUserResetedAccount]!
        userLogs: [STLog]!
    }

    type STPortfolioChange {
        portfolio: STPortfolio!
        transactionsBuy: Float
        transactionsSell: Float
        date: String
    }

    type STUserResetedAccount {
        date: String!
        portfolioTotal: Float!
    }

    ###################################################
    # Input
    input STUserAuthenticationInput {
        uid: String
        displayName: String
        email: String
        photoURL: String
        providerId: String
        locale: String
    }

    input STUserEditDataInput {
        userId: String
        finnhubKey: String
        nickName: String
        photoURL: String
    }

    input STUserIndetificationInformationInput {
        id: String!
        nickName: String!
        locale: String
        photoURL: String!
        accountCreatedDate: String!
    }

    ##########################################
    #ENUM
    enum USER_ACTIVITY {
        SIGNED_IN
        SIGNED_OUT
    }

    enum USER_STATUS {
        PENDING
        DENIED
        ALLOWED
    }

    enum USER_STATUS_IN_GROUP {
        OWNER
        MANAGER
        MEMBER
        INVITATION_SENT
        INVITATION_RECEIVED
    }

    enum USER_ROLES_ENUM {
        ROLE_ADMIN
        ROLE_GROUP_CREATE
    }
`;

