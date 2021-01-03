import {STPortfolio} from "stock-tracker-common-interfaces";

export const resetedPortfolio = (): STPortfolio => {
    const portfolio: STPortfolio = {
        portfolioWeeklyGrowth: 0,
        portfolioCash: 15000,
        portfolioInvested: 0,
        portfolioWeeklyChange: 0
    }
    return portfolio;
}
