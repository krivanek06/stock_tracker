import { STTransactionSnapshot } from "./st-transaction.model";

export interface STPortfolio {
    portfolioInvested: number;
    portfolioCash: number;
}

export interface STPortfolioSnapshot extends STPortfolio {
    date: string; 
}


export interface STPortfolioWrapper {
    startingPortfolioSnapshot: STPortfolioSnapshot;
    portfolioCash: number;
    lastPortfolioSnapshot: STPortfolioSnapshot;
    lastPortfolioIncreaseNumber: number;
    lastPortfolioIncreasePrct: number;
    numberOfExecutedTransactions: number;
    numberOfExecutedBuyTransactions: number;
    numberOfExecutedSellTransactions: number;
    lastTransactionSnapshot: STTransactionSnapshot;
}