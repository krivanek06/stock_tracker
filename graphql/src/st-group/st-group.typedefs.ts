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
        numberOfExecutedTransactions: Float
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
        portfolioSnapshots: [STPortfolioSnapshot]
        transactionSnapshots: [STTransactionSnapshot]
        owner: STGroupUser!
        lastUpdateDate: String!
        lastEditedDate: String!
        createdDate: String!
        currentAchievedRanks: STRank
        startDate: String!
        endDate: String
        isInfinite: Boolean!
        isPrivate: Boolean!
        numberOfExecutedTransactions: Float
        numberOfMembers: Float
        startedBalance: Float
        bestAchievedRanks: [STRank]!
        topTransactions: [STTransaction]!
        lastTransactions: [STTransaction]!
        groupLogs: [STLog]!
        managers:[STGroupUser]!
        members: [STGroupUser]!
        invitationSent: [STGroupUser]!
        invitationReceived: [STGroupUser]
        holdings: [STTransaction]!
        topMembers: [STGroupUser]
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
        managers:[String]!
        members: [String]!
        invitationSent: [String]!
        invitationReceived: [String]!
    }
    
    

`;
