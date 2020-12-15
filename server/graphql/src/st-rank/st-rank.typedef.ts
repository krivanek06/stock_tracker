import { gql } from "apollo-server";

export const STRankTypeDefs = gql`
    # type 
    type STRank {
        rankGainers: Float!
        rankLosers: Float!
        rankPortfolio: Float!
        rankProfit: Float!
        rankNumberOfTrandes: Float!
        date: String!
    }

`;