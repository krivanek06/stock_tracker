import {gql} from 'apollo-server';


export const STStockDetailsCalculationsTypeDefs = gql`
    type CAPM {
        Beta: Float!
        Rf: Float!
        Rm: Float!
        result: Float!
    }

    type  WACC {
        CAPM: CAPM
        Rd: Float!
        Re: Float!
        Wd: Float!
        We: Float!
        result: Float!
        taxRate: Float!
    }

`;