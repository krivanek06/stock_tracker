import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from '../environment';

const fetch = require('node-fetch');

export const getPortfolioRiskCustomRest = async (
	symbols: string[],
	weights: number[],
	symbolsBeta: number[],
	clearCache = false
): Promise<api.STPortfolioRiskCalculations> => {
	const result = await fetch(`${stockDataAPI}/calculator/calculate_portfolio_risk`, {
		method: 'POST',
		body: JSON.stringify({
			symbols,
			weights,
			symbolsBeta,
			clearCache,
		}),
		headers: { 'Content-Type': 'application/json' },
	});

	const data = await result.json();
	return data['data'] as api.STPortfolioRiskCalculations;
};
