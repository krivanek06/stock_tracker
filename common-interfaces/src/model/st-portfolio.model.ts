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
    from_beginning_change: STPortfolioChangeData | null;
    day_1_change: STPortfolioChangeData | null;
    week_1_change: STPortfolioChangeData | null;
    week_2_change: STPortfolioChangeData | null;
    week_3_change: STPortfolioChangeData | null;
    month_1_change: STPortfolioChangeData | null;
    month_2_change: STPortfolioChangeData | null;
    month_3_change: STPortfolioChangeData | null;
    month_6_change: STPortfolioChangeData | null;
    year_1_change: STPortfolioChangeData | null;
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

export const STARTING_PORTFOLIO = 100000;