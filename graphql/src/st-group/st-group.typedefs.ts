import {gql} from 'apollo-server';


export const STGroupTypeDefs = gql`
    
    #type
    type STSearchGroups{
        groups: [STGroupAllData]!
    }
    
    type STGroupUser {
        id: String!
        nickName: String!
        locale: String
        photoURL: String!
        accountCreatedDate: String!
        lastPortfolioSnapshot: STPortfolioSnapshot
        lastPortfolioIncreaseNumber: Float
        lastPortfolioIncreasePrct: Float
        numberOfExecutedTransactions: Float!
        numberOfExecutedBuyTransactions: Float!
        numberOfExecutedSellTransactions: Float!
        lastTransactionSnapshot: STTransactionSnapshot
        previousPosition: Float
        currentPosition: Float
        startingPortfolioSnapshot: STPortfolioSnapshot
        sinceDate: String!
    }
    
    type STGroupAllData {
        groupId: String!
        name: String!
        description: String
        imagePath: String
        imageUrl: String
        lastPortfolioSnapshot: STPortfolioSnapshot
        lastTransactionSnapshot: STTransactionSnapshot
        owner: STGroupUser!
        lastUpdateDate: String!
        lastEditedDate: String!
        createdDate: String!
        currentAchievedRanks: STRank
        lastPortfolioIncreaseNumber: Float
        lastPortfolioIncreasePrct: Float
        lastPortfolioBalance: Float
        startDate: String!
        endDate: String
        isInfinite: Boolean!
        isPrivate: Boolean!
        numberOfExecutedTransactions: Float!
        numberOfExecutedBuyTransactions: Float!
        numberOfExecutedSellTransactions: Float!
        numberOfMembers: Float!
        startedBalance: Float!
        topTransactions: [STTransaction]!
        lastTransactions: [STTransaction]!
        managers:[STGroupUser]!
        members: [STGroupUser]!
        invitationSent: [STGroupUser]!
        invitationReceived: [STGroupUser]
        holdings: [STTransaction]!
        groupHistoricalData: STGroupHistoricalData!
        topMembers: [STGroupUser]!
    }

    type STGroupHistoricalData {
        portfolioSnapshots: [STPortfolioSnapshot]!
        transactionSnapshots: [STTransactionSnapshot]!
        bestAchievedRanks: [STRank]!
        groupLogs: [STLog]!
    }
    
    input STGroupAllDataInput {
        groupId: String
        name: String!
        description: String
        imagePath: String
        imageUrl: String
        startDate: String!
        endDate: String
        isInfinite: Boolean!
        isPrivate: Boolean!
        isOwnerAlsoMember: Boolean!
        managers:[String]!
        members: [String]!
        invitationSent: [String]!
        invitationReceived: [String]!
    }
    
    

`;
