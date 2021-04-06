import {gql} from 'apollo-server';


export const STPortfolioTypeDefs = gql`
    # type
    type STPortfolio {
        portfolioInvested: Float!
        portfolioCash: Float!
    }


`;
