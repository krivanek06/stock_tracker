import { STTransactionSnapshot } from "./st-transaction.model";

export interface STPortfolio {
    portfolioInvested: number;
    portfolioCash: number;
}

export interface STPortfolioSnapshot extends STPortfolio {
    date: string; 
}

export interface STPortfolioSnapshotStarted extends STPortfolioSnapshot {
    numberOfExecutedBuyTransactions: number;
    numberOfExecutedSellTransactions: number;
}


export interface STPortfolioWrapper {
    portfolioCash: number;
    lastPortfolioSnapshot: STPortfolioSnapshot;
    lastPortfolioIncreaseNumber: number;
    lastPortfolioIncreasePrct: number;
    numberOfExecutedBuyTransactions: number;
    numberOfExecutedSellTransactions: number;
    lastTransactionSnapshot: STTransactionSnapshot;
}