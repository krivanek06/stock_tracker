import { STPortfolioSnapshot } from "./st-portfolio.model";

export interface STRank {
    highestPortfolio: STRankHighestPortfolio | null;
}

interface STRankEntity {
    date: string;
    dateEvaluation: string;
    total: number;
}


export interface STRankHighestPortfolio extends STRankEntity {
    rankHighestPortfolioPlace: number;
    rankHighestPortfolio: STPortfolioSnapshot;
}