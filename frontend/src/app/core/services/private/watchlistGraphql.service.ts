import gql from 'graphql-tag';
import {Injectable} from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};


export type Query = {
    __typename?: 'Query';
    queryUser?: Maybe<User>;
    queryUserStockWatchlists?: Maybe<Array<Maybe<StockWatchlist>>>;
    queryUserStockWatchlistById?: Maybe<StockWatchlist>;
};


export type QueryQueryUserArgs = {
    uid: Scalars['String'];
};


export type QueryQueryUserStockWatchlistsArgs = {
    uid: Scalars['String'];
};


export type QueryQueryUserStockWatchlistByIdArgs = {
    uid: Scalars['String'];
    documentId: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createStockWatchlist?: Maybe<StockWatchlist>;
    renameStockWatchlist?: Maybe<Scalars['Boolean']>;
    deleteWatchlist?: Maybe<Scalars['Boolean']>;
    addStockIntoStockWatchlist?: Maybe<StockDetails>;
    removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationRenameStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationDeleteWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationAddStockIntoStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationRemoveStockFromStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};

export type User = {
    __typename?: 'User';
    uid: Scalars['ID'];
    displayName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    photoURL?: Maybe<Scalars['String']>;
    providerId?: Maybe<Scalars['String']>;
    stockWatchlist: Array<Maybe<StockWatchlist>>;
};

export type StockWatchlist = {
    __typename?: 'StockWatchlist';
    id: Scalars['String'];
    name: Scalars['String'];
    timestamp: Scalars['Float'];
    userId: Scalars['String'];
    stocks: Array<Maybe<Scalars['String']>>;
    stocksDetails: Array<Maybe<StockDetails>>;
};

export type StockDetails = {
    __typename?: 'StockDetails';
    id: Scalars['String'];
    basicInfo?: Maybe<BasicInfo>;
    chartInfo?: Maybe<ChartInfo>;
    dividend?: Maybe<Dividend>;
    analysis?: Maybe<Analysis>;
    balanceSheet?: Maybe<BalanceSheet>;
    cashFlow?: Maybe<CashFlow>;
    overview?: Maybe<OverView>;
    perShare?: Maybe<PerShare>;
    valuation?: Maybe<Valuation>;
    financialStrength?: Maybe<FinancialStrength>;
    financialReports?: Maybe<Array<Maybe<FinancialReportNames>>>;
    financialStrengthRatio?: Maybe<FinancialStrengthRatio>;
    incomeStatement?: Maybe<IncomeStatement>;
    recommendation?: Maybe<Array<Maybe<Recommendations>>>;
    stockNewsSnippets?: Maybe<Array<Maybe<StockArticle>>>;
};

export type PerShare = {
    __typename?: 'PerShare';
    bookValuePerShareMRQ?: Maybe<Scalars['Float']>;
    cashFlowPerShareAnnual?: Maybe<Scalars['Float']>;
    cashFlowPerShareTTM?: Maybe<Scalars['Float']>;
    cashPerSharePerShareAnnual?: Maybe<Scalars['Float']>;
    cashPerSharePerShareQuarterly?: Maybe<Scalars['Float']>;
    ebitdPerShareTTM?: Maybe<Scalars['Float']>;
    freeCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
    revenuePerShareTTM?: Maybe<Scalars['Float']>;
    tangibleBookValuePerShareQuarterly?: Maybe<Scalars['Float']>;
    totalCashPerShareMRQ?: Maybe<Scalars['Float']>;
};

export type FinancialStrengthRatio = {
    __typename?: 'FinancialStrengthRatio';
    currentRatioQuarterly?: Maybe<Scalars['Float']>;
    freeOperatingCashFlowToRevenue5Y?: Maybe<Scalars['Float']>;
    longTermDebtToEquityQuarterly?: Maybe<Scalars['Float']>;
    quickRatioQuarterly?: Maybe<Scalars['Float']>;
    totalDebtToEquityAnnual?: Maybe<Scalars['Float']>;
    totalDebtToEquityQuarterly?: Maybe<Scalars['Float']>;
};

export type FinancialStrength = {
    __typename?: 'FinancialStrength';
    ebitda?: Maybe<Scalars['String']>;
    grossProfitTTM?: Maybe<Scalars['String']>;
    leveredFreeCashFlowTTM?: Maybe<Scalars['String']>;
    marketCap?: Maybe<Scalars['String']>;
    netIncomeAvitoCommonTTM?: Maybe<Scalars['String']>;
    operatingCashFlowTTM?: Maybe<Scalars['String']>;
    revenueTTM?: Maybe<Scalars['String']>;
    totalCashMRQ?: Maybe<Scalars['String']>;
    totalDebtMRQ?: Maybe<Scalars['String']>;
};

export type FinancialReportNames = {
    __typename?: 'FinancialReportNames';
    collection?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type Recommendations = {
    __typename?: 'Recommendations';
    buy?: Maybe<Scalars['Float']>;
    hold?: Maybe<Scalars['Float']>;
    period?: Maybe<Scalars['String']>;
    sell?: Maybe<Scalars['Float']>;
    strongBuy?: Maybe<Scalars['Float']>;
    strongSell?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};

export type IncomeStatement = {
    __typename?: 'IncomeStatement';
    Basic_Average_Shares?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Basic_EPS?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Cost_of_Revenue?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Diluted_Average_Shares?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Diluted_EPS?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Diluted_NI_Available_to_Com_Stockholders?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Gross_Profit?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Interest_Expense?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Income_Common_Stockholders?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Income_from_Continuing_And_Discontinued_Operation?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Income_from_Continuing_Operation_Net_Minority_Interest?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Interest_Income?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Non_Operating_Interest_Income_Expense?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Normalized_EBITDA?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Normalized_Income?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Operating_Expense?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Operating_Income?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Other_Income_Expense?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Pretax_Income?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Reconciled_Cost_of_Revenue?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Reconciled_Depreciation?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Tax_Effect_of_Unusual_Items?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Tax_Provision?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Tax_Rate_for_Calcs?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Expenses?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Operating_Income_as_Reported?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Revenue?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Unusual_Items?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Unusual_Items_Excluding_Goodwill?: Maybe<Array<Maybe<Scalars['Float']>>>;
    date?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CashFlow = {
    __typename?: 'CashFlow';
    Capital_Expenditure?: Maybe<Array<Maybe<Scalars['Float']>>>;
    End_Cash_Position?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Financing_Cash_Flow?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Free_Cash_Flow?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Investing_Cash_Flow?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Issuance_of_Capital_Stock?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Issuance_of_Debt?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Operating_Cash_Flow?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Repayment_of_Debt?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Repurchase_of_Capital_Stock?: Maybe<Array<Maybe<Scalars['Float']>>>;
    date?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BalanceSheet = {
    __typename?: 'BalanceSheet';
    Capital_Lease_Obligations?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Common_Stock_Equity?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Invested_Capital?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Debt?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Net_Tangible_Assets?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Ordinary_Shares_Float?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Share_Issued?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Tangible_Book_Value?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Assets?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Capitalization?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Debt?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Equity_Gross_Minority_Interest?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Total_Liabilities_Net_Minority_Interest?: Maybe<Array<Maybe<Scalars['Float']>>>;
    Working_Capital?: Maybe<Array<Maybe<Scalars['Float']>>>;
    date?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RevenueEstimate = {
    __typename?: 'RevenueEstimate';
    currentQuarter?: Maybe<RevenueEstimateData>;
    currentYear?: Maybe<RevenueEstimateData>;
    nextQuarter?: Maybe<RevenueEstimateData>;
    nextYear?: Maybe<RevenueEstimateData>;
};

export type RevenueEstimateData = {
    __typename?: 'RevenueEstimateData';
    average?: Maybe<Scalars['Float']>;
    high?: Maybe<Scalars['Float']>;
    low?: Maybe<Scalars['Float']>;
    growthPercent?: Maybe<Scalars['Float']>;
    average_String?: Maybe<Scalars['String']>;
    high_String?: Maybe<Scalars['String']>;
    low_String?: Maybe<Scalars['String']>;
    FloatOfAnalysis?: Maybe<Scalars['Float']>;
    timeEstimation?: Maybe<Scalars['String']>;
    yearAgo?: Maybe<Scalars['String']>;
};

export type GrowthEstimatesPercent = {
    __typename?: 'GrowthEstimatesPercent';
    fiveYear?: Maybe<GrowthEstimatesPercentData>;
    quarter?: Maybe<GrowthEstimatesPercentData>;
    year?: Maybe<GrowthEstimatesPercentData>;
};

export type GrowthEstimatesPercentData = {
    __typename?: 'GrowthEstimatesPercentData';
    current?: Maybe<Scalars['Float']>;
    next?: Maybe<Scalars['Float']>;
};

export type Earnings = {
    __typename?: 'Earnings';
    dates?: Maybe<Array<Maybe<Scalars['String']>>>;
    epsActual?: Maybe<Array<Maybe<Scalars['Float']>>>;
    epsEst?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Analysis = {
    __typename?: 'Analysis';
    growthEstimatesPercent?: Maybe<GrowthEstimatesPercent>;
    revenueEstimate?: Maybe<RevenueEstimate>;
    earnings?: Maybe<Earnings>;
};

export type ChartInfo = {
    __typename?: 'ChartInfo';
    assetsToDebtInfo?: Maybe<AssetsToDebtInfo>;
    equityToAssets?: Maybe<EquityToAssets>;
    effectiveness?: Maybe<Effectiveness>;
    margin?: Maybe<Margin>;
    otherGrowthInformation?: Maybe<OtherGrowthInformation>;
    profitMargin?: Maybe<ProfitMargin>;
};

export type ProfitMargin = {
    __typename?: 'ProfitMargin';
    expenseTTM?: Maybe<Scalars['Float']>;
    netProfitMarginTTM?: Maybe<Scalars['Float']>;
};

export type OtherGrowthInformation = {
    __typename?: 'OtherGrowthInformation';
    bookValueShareGrowth5Y?: Maybe<Scalars['Float']>;
    capitalSpendingGrowth5Y?: Maybe<Scalars['Float']>;
    dividendGrowthRate5Y?: Maybe<Scalars['Float']>;
    epsGrowth5Y?: Maybe<Scalars['Float']>;
    epsGrowthQuarterlyYOY?: Maybe<Scalars['Float']>;
    quarterlyRevenueGrowthYOY?: Maybe<Scalars['Float']>;
    revenueGrowthTTMYoy?: Maybe<Scalars['Float']>;
    revenueShareGrowth5Y?: Maybe<Scalars['Float']>;
};

export type Margin = {
    __typename?: 'Margin';
    grossMarginTTM?: Maybe<Scalars['Float']>;
    netMarginGrowth5Y?: Maybe<Scalars['Float']>;
    netProfitMargin5Y?: Maybe<Scalars['Float']>;
    netProfitMarginTTM?: Maybe<Scalars['Float']>;
    operatingMarginTTM?: Maybe<Scalars['Float']>;
    pretaxMarginTTM?: Maybe<Scalars['Float']>;
};

export type Effectiveness = {
    __typename?: 'Effectiveness';
    returnOnAssetsTTM?: Maybe<Scalars['Float']>;
    returnOnEquityTTM?: Maybe<Scalars['Float']>;
    returnOnInvestmentsTTM?: Maybe<Scalars['Float']>;
};

export type AssetsToDebtInfo = {
    __typename?: 'AssetsToDebtInfo';
    totalAssets?: Maybe<Scalars['Float']>;
    totalDebt?: Maybe<Scalars['Float']>;
    prctDiff?: Maybe<Scalars['Float']>;
};

export type EquityToAssets = {
    __typename?: 'EquityToAssets';
    totalAssets?: Maybe<Scalars['Float']>;
    totalEquity?: Maybe<Scalars['Float']>;
    prctDiff?: Maybe<Scalars['Float']>;
};

export type Valuation = {
    __typename?: 'Valuation';
    currentEvToFreeCashFlowAnnual?: Maybe<Scalars['Float']>;
    currentEvToFreeCashFlowTTM?: Maybe<Scalars['Float']>;
    enterpriseValueToEBITDA?: Maybe<Scalars['Float']>;
    enterpriseValueToRevenue?: Maybe<Scalars['Float']>;
    forwardPE?: Maybe<Scalars['Float']>;
    customPE?: Maybe<Scalars['Float']>;
    peRatioTTM?: Maybe<Scalars['Float']>;
    pegRatioFiveYearExpected?: Maybe<Scalars['Float']>;
    priceToBookMRQ?: Maybe<Scalars['Float']>;
    priceToSalesTTM?: Maybe<Scalars['Float']>;
    trailingPE?: Maybe<Scalars['Float']>;
};

export type OverView = {
    __typename?: 'OverView';
    currentPrice?: Maybe<Scalars['Float']>;
    currentPriceChange?: Maybe<Scalars['Float']>;
    previousClose?: Maybe<Scalars['Float']>;
    weekHigh52?: Maybe<Scalars['Float']>;
    weekLow52?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    earningsDate?: Maybe<Scalars['String']>;
    exDividendDate?: Maybe<Scalars['String']>;
    forwardDividendAndYield?: Maybe<Scalars['String']>;
    targetEst1y?: Maybe<Scalars['Float']>;
    targetEst1yPercent?: Maybe<Scalars['Float']>;
};

export type Dividend = {
    __typename?: 'Dividend';
    dividendDate?: Maybe<Scalars['String']>;
    dividendPerShare5Y?: Maybe<Scalars['Float']>;
    dividendPerShareAnnual?: Maybe<Scalars['Float']>;
    exDividendDate?: Maybe<Scalars['String']>;
    fiveYearAverageDividendYield?: Maybe<Scalars['String']>;
    forwardAnnualDividendRate?: Maybe<Scalars['String']>;
    forwardAnnualDividendYield?: Maybe<Scalars['String']>;
    payoutRatio?: Maybe<Scalars['String']>;
    trailingAnnualDividendRate?: Maybe<Scalars['String']>;
    trailingAnnualDividendYield?: Maybe<Scalars['String']>;
};

export type BasicInfo = {
    __typename?: 'BasicInfo';
    address1?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    exchangeTimezoneName?: Maybe<Scalars['String']>;
    fullTimeEmployees?: Maybe<Scalars['Float']>;
    industry?: Maybe<Scalars['String']>;
    sector?: Maybe<Scalars['String']>;
    shortName?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    netIncomeEmployeeAnnual?: Maybe<Scalars['Float']>;
    revenueEmployeeAnnual?: Maybe<Scalars['Float']>;
    sharesOutstanding?: Maybe<Scalars['Float']>;
    summary?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    logoUrl?: Maybe<Scalars['String']>;
};

export type StockArticleWrapper = {
    __typename?: 'StockArticleWrapper';
    stockNews?: Maybe<Array<Maybe<StockArticle>>>;
};

export type StockArticle = {
    __typename?: 'StockArticle';
    datetime?: Maybe<Scalars['String']>;
    headline?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    related?: Maybe<Scalars['String']>;
    source?: Maybe<Scalars['String']>;
    sourceName?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type StockWatchlistIdentifier = {
    userId: Scalars['String'];
    id?: Maybe<Scalars['String']>;
    additionalData?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}


export type StockMainDetailsFragment = (
    { __typename?: 'StockDetails' }
    & Pick<StockDetails, 'id'>
    & {
    overview?: Maybe<(
        { __typename?: 'OverView' }
        & Pick<OverView, 'symbol' | 'currentPrice' | 'weekHigh52' | 'weekLow52' | 'previousClose' | 'earningsDate' | 'exDividendDate' | 'forwardDividendAndYield' | 'targetEst1y'>
        )>, basicInfo?: Maybe<(
        { __typename?: 'BasicInfo' }
        & Pick<BasicInfo, 'sector' | 'industry' | 'logoUrl' | 'shortName' | 'website'>
        )>
}
    );

export type StockWatchlistInformationFragment = (
    { __typename?: 'StockWatchlist' }
    & Pick<StockWatchlist, 'id' | 'name' | 'timestamp' | 'stocks'>
    & {
    stocksDetails: Array<Maybe<(
        { __typename?: 'StockDetails' }
        & StockMainDetailsFragment
        )>>
}
    );

export type QueryUserStockWatchlistsQueryVariables = Exact<{
    uid: Scalars['String'];
}>;


export type QueryUserStockWatchlistsQuery = (
    { __typename?: 'Query' }
    & {
    queryUserStockWatchlists?: Maybe<Array<Maybe<(
        { __typename?: 'StockWatchlist' }
        & StockWatchlistInformationFragment
        )>>>
}
    );

export type QueryUserStockWatchlistByIdQueryVariables = Exact<{
    uid: Scalars['String'];
    documentId: Scalars['String'];
}>;


export type QueryUserStockWatchlistByIdQuery = (
    { __typename?: 'Query' }
    & {
    queryUserStockWatchlistById?: Maybe<(
        { __typename?: 'StockWatchlist' }
        & StockWatchlistInformationFragment
        )>
}
    );

export type CreateStockWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type CreateStockWatchlistMutation = (
    { __typename?: 'Mutation' }
    & {
    createStockWatchlist?: Maybe<(
        { __typename?: 'StockWatchlist' }
        & StockWatchlistInformationFragment
        )>
}
    );

export type AddStockIntoWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type AddStockIntoWatchlistMutation = (
    { __typename?: 'Mutation' }
    & {
    addStockIntoStockWatchlist?: Maybe<(
        { __typename?: 'StockDetails' }
        & StockMainDetailsFragment
        )>
}
    );

export type RemoveStockFromWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type RemoveStockFromWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'removeStockFromStockWatchlist'>
    );

export type DeleteUserWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type DeleteUserWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'deleteWatchlist'>
    );

export type RenameStockWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type RenameStockWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'renameStockWatchlist'>
    );

export const StockMainDetailsFragmentDoc = gql`
    fragment StockMainDetails on StockDetails {
        id
        overview {
            symbol
            currentPrice
            weekHigh52
            weekLow52
            previousClose
            earningsDate
            exDividendDate
            forwardDividendAndYield
            targetEst1y
        }
        basicInfo {
            sector
            industry
            logoUrl
            shortName
            website
        }
    }
`;
export const StockWatchlistInformationFragmentDoc = gql`
    fragment StockWatchlistInformation on StockWatchlist {
        id
        name
        timestamp
        stocks
        stocksDetails {
            ...StockMainDetails
        }
    }
${StockMainDetailsFragmentDoc}`;
export const QueryUserStockWatchlistsDocument = gql`
    query queryUserStockWatchlists($uid: String!) {
        queryUserStockWatchlists(uid: $uid) {
            ...StockWatchlistInformation
        }
    }
${StockWatchlistInformationFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryUserStockWatchlistsGQL extends Apollo.Query<QueryUserStockWatchlistsQuery, QueryUserStockWatchlistsQueryVariables> {
    document = QueryUserStockWatchlistsDocument;

}

export const QueryUserStockWatchlistByIdDocument = gql`
    query queryUserStockWatchlistById($uid: String!, $documentId: String!) {
        queryUserStockWatchlistById(uid: $uid, documentId: $documentId) {
            ...StockWatchlistInformation
        }
    }
${StockWatchlistInformationFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryUserStockWatchlistByIdGQL extends Apollo.Query<QueryUserStockWatchlistByIdQuery, QueryUserStockWatchlistByIdQueryVariables> {
    document = QueryUserStockWatchlistByIdDocument;

}

export const CreateStockWatchlistDocument = gql`
    mutation CreateStockWatchlist($identifier: StockWatchlistIdentifier!) {
        createStockWatchlist(identifier: $identifier) {
            ...StockWatchlistInformation
        }
    }
${StockWatchlistInformationFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class CreateStockWatchlistGQL extends Apollo.Mutation<CreateStockWatchlistMutation, CreateStockWatchlistMutationVariables> {
    document = CreateStockWatchlistDocument;

}

export const AddStockIntoWatchlistDocument = gql`
    mutation AddStockIntoWatchlist($identifier: StockWatchlistIdentifier!) {
        addStockIntoStockWatchlist(identifier: $identifier) {
            ...StockMainDetails
        }
    }
${StockMainDetailsFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class AddStockIntoWatchlistGQL extends Apollo.Mutation<AddStockIntoWatchlistMutation, AddStockIntoWatchlistMutationVariables> {
    document = AddStockIntoWatchlistDocument;

}

export const RemoveStockFromWatchlistDocument = gql`
    mutation RemoveStockFromWatchlist($identifier: StockWatchlistIdentifier!) {
        removeStockFromStockWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RemoveStockFromWatchlistGQL extends Apollo.Mutation<RemoveStockFromWatchlistMutation, RemoveStockFromWatchlistMutationVariables> {
    document = RemoveStockFromWatchlistDocument;

}

export const DeleteUserWatchlistDocument = gql`
    mutation DeleteUserWatchlist($identifier: StockWatchlistIdentifier!) {
        deleteWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteUserWatchlistGQL extends Apollo.Mutation<DeleteUserWatchlistMutation, DeleteUserWatchlistMutationVariables> {
    document = DeleteUserWatchlistDocument;

}

export const RenameStockWatchlistDocument = gql`
    mutation RenameStockWatchlist($identifier: StockWatchlistIdentifier!) {
        renameStockWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RenameStockWatchlistGQL extends Apollo.Mutation<RenameStockWatchlistMutation, RenameStockWatchlistMutationVariables> {
    document = RenameStockWatchlistDocument;

}
