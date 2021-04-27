import { gql } from "apollo-server";



export const STSharedTypeDefs = gql`
    type STGeographic {
        longitude: String
        latitude: String
    }

    type STLog {
        date: String!
        logText: String!
    }

    type STSimpleChart {
        date: String!
        data: Float!
        label: String
    }

    type STSeries {
        data: [float]!
        name: String!
    }
    
    #input
    input STInputLog {
        date: String!
        logText: String!
    }

    input STInputSimpleChart {
        date: String!
        data: Float!
        label: String
    }

    input STInputFielChange {
        inputFiel: String!
    }

    

`;
