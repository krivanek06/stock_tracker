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
    user?: Maybe<User>;
    stockWatchlist?: Maybe<Array<Maybe<StockWatchlist>>>;
};


export type QueryUserArgs = {
    uid: Scalars['String'];
};


export type QueryStockWatchlistArgs = {
    uid: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createStockWatchlist?: Maybe<StockWatchlist>;
    addStockIntoStockWatchlist?: Maybe<OverView>;
    removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
    deleteWatchlist?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateStockWatchlistArgs = {
    identifier: StockWatchlistCommonData;
};


export type MutationAddStockIntoStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationRemoveStockFromStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationDeleteWatchlistArgs = {
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
    documentId: Scalars['String'];
    timestamp: Scalars['Float'];
    userId: Scalars['String'];
    stocks: Array<Maybe<Scalars['String']>>;
    stocksOverview: Array<Maybe<OverView>>;
};

export type OverView = {
    __typename?: 'OverView';
    currentPrice: Scalars['Float'];
    currentPriceChange?: Maybe<Scalars['Float']>;
    previousClose?: Maybe<Scalars['Float']>;
    weekHigh52?: Maybe<Scalars['Float']>;
    weekLow52?: Maybe<Scalars['Float']>;
    id: Scalars['String'];
    symbol: Scalars['String'];
    earningsDate?: Maybe<Scalars['String']>;
    exDividendDate?: Maybe<Scalars['String']>;
    forwardDividendAndYield?: Maybe<Scalars['String']>;
    targetEst1y?: Maybe<Scalars['Float']>;
    targetEst1yPercent?: Maybe<Scalars['Float']>;
};

export type StockWatchlistCommonData = {
    id: Scalars['String'];
    userId: Scalars['String'];
};

export type StockWatchlistIdentifier = {
    id: Scalars['String'];
    userId: Scalars['String'];
    documentId?: Maybe<Scalars['String']>;
    stockName?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}


export type StockWatchlistInformationFragment = (
    { __typename?: 'StockWatchlist' }
    & Pick<StockWatchlist, 'id' | 'documentId' | 'timestamp' | 'stocks'>
    & {
    stocksOverview: Array<Maybe<(
        { __typename?: 'OverView' }
        & Pick<OverView, 'id' | 'symbol' | 'currentPrice' | 'weekHigh52' | 'weekLow52' | 'previousClose' | 'earningsDate' | 'exDividendDate' | 'forwardDividendAndYield' | 'targetEst1y'>
        )>>
}
    );

export type UserStcokWatchlistsQueryVariables = Exact<{
    uid: Scalars['String'];
}>;


export type UserStcokWatchlistsQuery = (
    { __typename?: 'Query' }
    & {
    stockWatchlist?: Maybe<Array<Maybe<(
        { __typename?: 'StockWatchlist' }
        & StockWatchlistInformationFragment
        )>>>
}
    );

export type CreateStockWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistCommonData;
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
        { __typename?: 'OverView' }
        & Pick<OverView, 'id' | 'symbol' | 'currentPrice' | 'weekHigh52' | 'weekLow52' | 'previousClose' | 'earningsDate' | 'exDividendDate' | 'forwardDividendAndYield' | 'targetEst1y'>
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

export const StockWatchlistInformationFragmentDoc = gql`
    fragment StockWatchlistInformation on StockWatchlist {
        id
        documentId
        timestamp
        stocks
        stocksOverview {
            id
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
    }
`;
export const UserStcokWatchlistsDocument = gql`
    query userStcokWatchlists($uid: String!) {
        stockWatchlist(uid: $uid) {
            ...StockWatchlistInformation
        }
    }
${StockWatchlistInformationFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class UserStcokWatchlistsGQL extends Apollo.Query<UserStcokWatchlistsQuery, UserStcokWatchlistsQueryVariables> {
    document = UserStcokWatchlistsDocument;

}

export const CreateStockWatchlistDocument = gql`
    mutation CreateStockWatchlist($identifier: StockWatchlistCommonData!) {
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
            id
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
    }
`;

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
