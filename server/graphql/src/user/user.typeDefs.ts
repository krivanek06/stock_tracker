import {gql} from 'apollo-server';


export const userTypeDefs = gql`
    # type 
    type STUserIndetificationInformation {
        uid: String!
        nickName: String!
        locale: String!
        photoURL: String!
        accountCreatedDate: String!
    }

    type STUserPartialInformation {
        uid: String!
        nickName: String!
        locale: String!
        photoURL: String!
        accountCreatedDate: String!
        portfolio: STPortfolio
        rank: STRank
    }

    type STUserPublicData {
        uid: String!
        nickName: String!
        locale: String!
        photoURL: String!
        accountCreatedDate: String!
        lastSignInDate: String!
        portfolio: STPortfolio
        rank: STRank
        transactionsSnippets: [STTransaction]
        portfolioWeeklyChange: [STPortfolio]
        holdings: [STTransaction]
        resetedAccount: [STUserResetedAccount]
        groups: [STGroupPartialData]
        activity: USER_ACTIVITY
        bestAchievedRanks: [STRank]
        userLogs: [STLog]
        userPrivateData: STUserPrivateData
        stockWatchlist: [STStockWatchlist]!
    } 

    type STUserPrivateData {
        uid: String
        finnhubKey: String
        roles: [String]
        email: String!
        displayName: String!
        providerId: String
        status: USER_STATUS!
        geographic: STGeographic
        nicknameLastChange: String
    }
    
    type STUserResetedAccount {
        date: String
        portfolio: STPortfolio
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
`;

