import { queryTradingStrategies, queryTradingStrategyData } from './st-trading-strategy/st-trading-strategy.query';
import { STTraingStrategyTypeDefs } from './st-trading-strategy/st-trading-strategy.typedef';
import {STGroupTypeDefs} from './st-group/st-group.typedefs';
import {STSharedTypeDefs} from './st-shared/st-shared.typedef';
import {watchlistTypeDefs} from './watchlist/watchlist.typedefs';
import {ApolloServer, gql} from 'apollo-server';
import {userTypeDefs} from './user/user.typeDefs';
import {userResolvers} from './user/user.resolver';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { authenticateUser, queryUserPublicData, queryUserPublicDataByUsername } from './user/user.query';
import {
    createStockWatchlist,
    addStockIntoStockWatchlist,
    removeStockFromStockWatchlist,
    deleteWatchlist,
    renameStockWatchlist
} from './watchlist/watchlist.mutation';
import {editUser, registerUser, resetUserAccount} from './user/user.mutation';
import {
    queryMarketDailyOverview,
    queryStockDetails,
    queryStockSummaries,
    queryStockSummary
} from './st-stocks/st-stock.query';
import {stockDetailsTypeDefs} from './st-stocks/st-stock.typedefs';
import {STTransactionTypeDefs} from './st-transaction/st-transaction.typedef';
import {STRankTypeDefs} from './st-rank/st-rank.typedef';
import {STPortfolioTypeDefs} from './st-portfolio/st-portfolio.typedef';
import {
    editGroup,
    deleteGroup,
    createGroup,
    answerReceivedGroupInvitation, toggleInvitationRequestToGroup, leaveGroup
} from "./st-group/st.group.mutation";
import {querySTGroupAllDataByGroupId, querySTGroupPartialDataByGroupName} from "./st-group/st-group.query";
import {stTransactionResolvers} from "./st-transaction/st-transaction.resolver";
import {stStockWatchlistResolvers} from "./watchlist/watchlist.resolver";
import {performTransaction} from "./st-transaction/st-transaction.mutation";
import {STMarketSharedTypeDefs} from "./st-market/st-market.typedefs";
import {
    queryStMarketAllCategories, queryStMarketCalendarEvents, queryStMarketCalendarEventsEarnings, queryStMarketData,
    querySTMarketHistoryOverview,
    querySTMarketSymbolHistoricalChartData
} from "./st-market/st-market.query";

global.fetch = require("node-fetch");


const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktrackertest-e51fc.firebaseio.com"
});


const mainTypeDefs = gql`

    ###### QUERY
    type Query {
        # user
        queryUserData(uid: String!): STUserPublicData
        queryUserPublicDataByUsername(usernamePrefix: String!): [STUserPublicData]!
        authenticateUser(uid: String!): STUserPublicData

        # groups
        querySTGroupAllDataByGroupId(groupId: String!): STGroupAllData
        querySTGroupPartialDataByGroupName(groupName: String!): STSearchGroups

        # details
        queryStockDetails(symbol: String!): StockDetails
        queryStockSummary(symbol: String!): Summary
        queryStockSummaries(symbolPrefix: String!): SearchSymbol

        # market data
        querySTMarketSymbolHistoricalChartData(symbol: String!, period: String!): STMarketSymbolHistoricalChartData
        querySTMarketHistoryOverview: STMarketOverviewPartialData
        queryStMarketAllCategories: STMarketDatasetKeyCategories
        queryMarketDailyOverview: STMarketDailyOverview
        queryStMarketData(key: String!): STMarketChartDataResultCombined
        queryStMarketCalendarEvents(date: String!): StMarketCalendarEvents
        queryStMarketCalendarEventsEarnings(date: String!): StMarketCalendarEventsEarnings

        # trading strategy
        querySTTradingStrategies: STTradingStrategySearch
        querySTTradingStrategyData(symbol: String!, strategy: String!): STTradingStrategyData
    }

    #### MUTATION
    type Mutation {
        # user
        registerUser(user: STUserAuthenticationInput): Boolean
        editUser(editInput: STUserEditDataInput): Boolean
        resetUserAccount(userId: String!): STUserResetedAccount

        # groups
        createGroup(groupInput: STGroupAllDataInput!): STGroupPartialData
        editGroup(groupInput: STGroupAllDataInput!): STGroupPartialData
        deleteGroup(uid: String!, groupId: String!): Boolean
        toggleInvitationRequestToGroup(uid: String!, groupId: String!): STGroupPartialData
        answerReceivedGroupInvitation(uid: String!, groupId: String!, accept: Boolean!): STGroupPartialData
        leaveGroup(uid: String!, groupId: String!): Boolean

        ## watchlist
        createStockWatchlist( identifier: STStockWatchInputlistIdentifier!): STStockWatchlist
        renameStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
        deleteWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
        addStockIntoStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Summary
        removeStockFromStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean

        # trading
        performTransaction(transactionInput: STTransactionInput): PerformedTransaction
    }
`;


const mainResolver = {
    Query: {
        // USER
        authenticateUser: async (_: null, args: { uid: string }) => await authenticateUser(args.uid),
        queryUserData: async (_: null, args: { uid: string }) => await queryUserPublicData(args.uid),
        queryUserPublicDataByUsername: async (_: null, args: { usernamePrefix: string }) => await queryUserPublicDataByUsername(args.usernamePrefix),

        // GROUP
        querySTGroupAllDataByGroupId: async (_: null, args: { groupId: string }) => await querySTGroupAllDataByGroupId(args.groupId),
        querySTGroupPartialDataByGroupName: async (_: null, args: { groupName: string }) => await querySTGroupPartialDataByGroupName(args.groupName),

        // stock details
        queryStockDetails: async (_: null, args: { symbol: string }) => await queryStockDetails(args.symbol),
        queryStockSummary: async (_: null, args: { symbol: string }) => await queryStockSummary(args.symbol),
        queryStockSummaries: async (_: null, args: { symbolPrefix: string }) => await queryStockSummaries(args.symbolPrefix),

        // market data
        querySTMarketHistoryOverview: async (_: null, args: null) => await querySTMarketHistoryOverview(),
        queryMarketDailyOverview: async (_: null, args: null) => await queryMarketDailyOverview(),
        queryStMarketAllCategories: async (_: null, args: null) => await queryStMarketAllCategories(),
        queryStMarketData: async (_: null, args: { key: string }) => await queryStMarketData(args.key),
        queryStMarketCalendarEvents: async (_: null, args: { date: string }) => await queryStMarketCalendarEvents(args.date),
        queryStMarketCalendarEventsEarnings: async (_: null, args: { date: string }) => await queryStMarketCalendarEventsEarnings(args.date),
        querySTMarketSymbolHistoricalChartData: async (_: null, args: { symbol: string, period: string }) => await querySTMarketSymbolHistoricalChartData(args.symbol, args.period),

        // trading strategy
        querySTTradingStrategies: async (_: null, args: null) => await queryTradingStrategies(),
        querySTTradingStrategyData: async (_: null, args: { symbol: string, strategy: string }) => await queryTradingStrategyData(args.symbol, args.strategy),
    },

    Mutation: {
        // USER
        registerUser: async (_, args: { user: api.STUserAuthenticationInput }) => await registerUser(args.user),
        editUser: async (_, args: { editInput: api.STUserEditDataInput }) => await editUser(args.editInput),
        resetUserAccount: async (_, args: { userId: string }) => await resetUserAccount(args.userId),

        // GROUPS
        createGroup: async (_, args: { groupInput: api.STGroupAllDataInput }) => await createGroup(args.groupInput),
        editGroup: async (_, args: { groupInput: api.STGroupAllDataInput }) => await editGroup(args.groupInput),
        deleteGroup: async (_, args: { uid: string, groupId: string }) => await deleteGroup(args.uid, args.groupId),
        answerReceivedGroupInvitation: async (_, args: { uid: string, groupId: string, accept: Boolean }) => await answerReceivedGroupInvitation(args.uid, args.groupId, args.accept),
        toggleInvitationRequestToGroup: async (_, args: { uid: string, groupId: string }) => await toggleInvitationRequestToGroup(args.uid, args.groupId),
        leaveGroup: async (_, args: { uid: string, groupId: string }) => await leaveGroup(args.uid, args.groupId),

        // WATCHLIST
        createStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await createStockWatchlist(args.identifier),
        renameStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await renameStockWatchlist(args.identifier),
        deleteWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await deleteWatchlist(args.identifier),
        addStockIntoStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await addStockIntoStockWatchlist(args.identifier),
        removeStockFromStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await removeStockFromStockWatchlist(args.identifier),

        // trading
        performTransaction: async (_, args: { transactionInput: api.STTransactionInput }) => await performTransaction(args.transactionInput),
    }

};


const resolvers = {
    ...userResolvers,
    ...stTransactionResolvers,
    ...stStockWatchlistResolvers,
    ...mainResolver
};


const server = new ApolloServer({
    typeDefs: [
        mainTypeDefs,
        userTypeDefs,
        watchlistTypeDefs,
        stockDetailsTypeDefs,
        STMarketSharedTypeDefs,
        STTransactionTypeDefs,
        STSharedTypeDefs,
        STRankTypeDefs,
        STPortfolioTypeDefs,
        STGroupTypeDefs,
        STTraingStrategyTypeDefs
    ],
    resolvers,
    introspection: true
});


server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});

