import {gql} from 'apollo-server';


export const STPortfolioTypeDefs = gql`
    # type
    type STPortfolio {
        portfolioTotal: Float!
        portfolioInvested: Float!
        portfolioCash: Float!
        portfolioWeeklyChange: Float!
        portfolioWeeklyGrowth: Float!
        date: String
    }


`;
