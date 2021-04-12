import {gql} from 'apollo-server';


export const STTransactionTypeDefs = gql`
    # TYPES
    type STTransaction {
        transactionId: String
        user: STUserIndetification
        symbol: String!
        symbol_logo_url: String!
        price: Float!
        return: Float
        returnChange: Float
        units: Float!
        date: String!
        operation: STTransactionOperationEnum!
        summary: Summary
    }

    type PerformedTransaction {
        holdings: [STTransaction]!
        lastTransaction: STTransaction!
    }
    
    #INPUTS
    input STTransactionInput {
        symbol: String!
        symbol_logo_url: String!
        price: Float!
        userId: String!
        units: Float!
        operation: STTransactionOperationEnum!
    }
    
    # ENUMS
    enum STTransactionOperationEnum {
        BUY
        SELL
    }


`;