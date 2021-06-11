export interface STPortfolio {
    portfolioInvested: number;
    portfolioCash: number;
}

export interface STPortfolioSnapshot extends STPortfolio {
    date: string; 
}

export interface STCurrentPrice {
    price: number;
    previousClose: number; 
    symbol: string;
}