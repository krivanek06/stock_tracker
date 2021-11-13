import { STTransactionSnapshot } from "./st-transaction.model";

export interface STPortfolio {
    portfolioInvested: number;
    portfolioCash: number;
}

export interface STPortfolioSnapshot extends STPortfolio {
    date: string; 
}

export interface STPortfolioRiskCalculations {
    date: Date;
    portfolioAlpha: number;
    portfolioAnnualVariancePrct: number;
    portfolioAnnualVolatilityPrct: number;
    portfolioBeta: number;
    portfolioEstimatedReturnPrct: number;
    portfolioEstimatedReturnValue: number;
    portfolioSharpRatio: number;
    portfolioVolatilityMeanPrct: number;
  }
  
  

export interface STPortfolioSnapshotStarted extends STPortfolioSnapshot {
    numberOfExecutedBuyTransactions: number;
    numberOfExecutedSellTransactions: number;
    transactionFees: number;
}


export interface STPortfolioWrapper {
    portfolioCash: number;
    lastPortfolioSnapshot: STPortfolioSnapshot;
    lastPortfolioIncreaseNumber: number;
    lastPortfolioIncreasePrct: number;
    numberOfExecutedBuyTransactions: number;
    numberOfExecutedSellTransactions: number;
    transactionFees: number;
    lastTransactionSnapshot: STTransactionSnapshot;
}