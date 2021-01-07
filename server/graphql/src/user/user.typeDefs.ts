import {gql} from 'apollo-server';


export const userTypeDefs = gql`
    # type 
    type STUserGroups {
        groupInvitationSent: [STGroupPartialData]
        groupInvitationReceived: [STGroupPartialData]
        groupOwner: [STGroupPartialData]
        groupMember: [STGroupPartialData]
    }

    type STUserIndetificationInformation {
        uid: String!
        nickName: String!
        locale: String
        photoURL: String!
        accountCreatedDate: String!
    }

    type STUserPartialInformation {
        uid: String!
        nickName: String!
        locale: String
        photoURL: String
        accountCreatedDate: String!
        portfolio: STPortfolio
        rank: STRank
    }

    type STUserPublicData {
        uid: String!
        nickName: String!
        locale: String
        photoURL: String
        accountCreatedDate: String!
        lastSignInDate: String!
        portfolio: STPortfolio
        rank: STRank
        holdings: [STTransaction]!
        transactionsSnippets: [STTransaction]!
        activity: USER_ACTIVITY
        groups: STUserGroups!
        userPrivateData: STUserPrivateData!
        userHistoricalData: STUserHistoricalData!
        stockWatchlist: [STStockWatchlist]!
    }

    type STUserPrivateData {
        uid: String
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
        portfolioWeeklyChange: [STPortfolioWeeklyChange]!
        bestAchievedRanks: [STRank]!
        resetedAccount: [STUserResetedAccount]!
        userLogs: [STLog]!
    }

    type STPortfolioWeeklyChange {
        portfolio: STPortfolio!
        transactionsBuy: STPortfolioWeeklyChangeTransactions!
        transactionsSell: STPortfolioWeeklyChangeTransactions!
        date: String
    }

    type STPortfolioWeeklyChangeTransactions {
        total: Float!
        transactions: [STTransaction]
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
        uid: String!
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

