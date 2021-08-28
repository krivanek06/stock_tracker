import { STPortfolio } from 'stock-tracker-common-interfaces';

export const resetedPortfolio = (): STPortfolio => {
	const portfolio: STPortfolio = {
		portfolioCash: 25000,
		portfolioInvested: 0,
	};
	return portfolio;
};
