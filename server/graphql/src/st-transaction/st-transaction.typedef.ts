import {gql} from 'apollo-server';


export const STTransactionTypeDefs = gql`
    type STTransaction {
        isOpen: Boolean!
        shortName: String!
        longName: String!
        user: STUserIndetificationInformation
        priceBought: Float!
        priceSold: Float!
        priceProfit: Float!
        units: Float!
        date: String!
    }


`;