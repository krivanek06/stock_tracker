import {gql} from 'apollo-server';


export const STGroupTypeDefs = gql`
    
    #type
    type STGroupUser {
        user: STUserPartialInformation!
        sinceDate: String!
    }

    type STGroupPartialData {
        groupId: String!
        name: String!
        description: String
        portfolio: STPortfolio
        owner: STGroupUser!
        numberOfMembers: Float!
        lastUpdateDate: String!
        createdDate: String!
        currentAchievedRanks: STRank
    }
    
    type STGroupAllData {
        groupId: String!
        name: String!
        description: String
        portfolio: STPortfolio
        owner: STGroupUser!
        numberOfMembers: Float!
        lastUpdateDate: String!
        createdDate: String!
        currentAchievedRanks: STRank
        bestAchievedRanks: [STRank]!
        topTransactions: [STTransaction]!
        lastTransactions: [STTransaction]!
        groupLogs: [STLog]!
        portfolioChart: [STPortfolio]!
        managers:[STGroupUser]!
        members: [STGroupUser]!
        invitationSent: [STGroupUser]!
        invitationReceived: [STGroupUser]
    }
    
    input STGroupAllDataInput {
        groupId: String
        name: String!
        description: String
        owner: String!
        managers:[String]!
        members: [String]!
        invitationSent: [String]!
        invitationReceived: [String]!
    }
    
    

`;
