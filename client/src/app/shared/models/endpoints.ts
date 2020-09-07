export interface APIContainer {
    name: string;
    link: string;
}

// sp500_statistics
export const earningsYieldAPI: APIContainer = {
    name: 'Earnings yield',
    link: 'chart_data/sp500_statistics/earningsYield'
};

export const priceToSaleAPI: APIContainer = {
    name: 'Price to sale',
    link: 'chart_data/sp500_statistics/priceToSale'
};
export const bookValueAPI: APIContainer = {
    name: 'Book value',
    link: 'chart_data/sp500_statistics/bookValue'
};
export const salesGrowthAPI: APIContainer = {
    name: 'Sales growth',
    link: 'chart_data/sp500_statistics/salesGrowth'
};
export const dividendAPI: APIContainer = {
    name: 'Dividend',
    link: 'chart_data/sp500_statistics/dividend'
};
export const priceToBookAPI: APIContainer = {
    name: 'Price to book',
    link: 'chart_data/sp500_statistics/priceToBook'
};
export const dividendYieldAPI: APIContainer = {
    name: 'Dividend yield',
    link: 'chart_data/sp500_statistics/dividendYield'
};
export const peRatioAPI: APIContainer = {
    name: 'Pe ratio',
    link: 'chart_data/sp500_statistics/peRatio'
};

// employment_statistics
export const goodsProducingIndustryAPI: APIContainer = {
    name: 'Goods producing industry',
    link: 'chart_data/employment_statistics/goodsProducingIndustry'
};

export const governmentIndustryAPI: APIContainer = {
    name: 'Government industry',
    link: 'chart_data/employment_statistics/governmentIndustry'
};

export const privateIndustryAPI: APIContainer = {
    name: 'Private industry',
    link: 'chart_data/employment_statistics/privateIndustry'
};

export const serviceProvidingIndustryAPI: APIContainer = {
    name: 'Service providing industry',
    link: 'chart_data/employment_statistics/serviceProvidingIndustry'
};

// Other - no category
export const investorSentimentAPI: APIContainer = {
    name: 'Investor sentiment',
    link: 'chart_data/investor_sentiment'
};

export const treasuryYieldCurveRatesAPI: APIContainer = {
    name: 'Treasury yield curve rates',
    link: 'chart_data/treasury_yield_curve_rates'
};

export const miseryIndexAPI: APIContainer = {
    name: 'Misery index',
    link: 'chart_data/misery_index'
};



