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

export interface STPortfolioChangeData {

    portfolioIncreaseNumber: number;
    portfolioIncreasePrct: number;
}

export interface STPortfolioChange {
    day_1_change?: STPortfolioChangeData;
    week_1_change?: STPortfolioChangeData;
    week_2_change?: STPortfolioChangeData;
    week_3_change?: STPortfolioChangeData;
    month_1_change?: STPortfolioChangeData;
    month_2_change?: STPortfolioChangeData;
    month_3_change?: STPortfolioChangeData;
    month_6_change?: STPortfolioChangeData;
    year_1_change?: STPortfolioChangeData;
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
    portfolioChange: STPortfolioChange;
}