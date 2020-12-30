import {STGroupTypeDefs} from './st-group/st-group.typedefs';
import {STSharedTypeDefs} from './st-shared/st-shared.typedef';
import {watchlistTypeDefs} from './watchlist/watchlist.typedefs';
import {ApolloServer, gql} from 'apollo-server';
import {userTypeDefs} from './user/user.typeDefs';
import {userResolvers} from './user/user.resolver';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import {authenticateUser, querySTUserPartialInformationByUsername, queryUserPublicData} from './user/user.query';
import {
    createStockWatchlist,
    addStockIntoStockWatchlist,
    removeStockFromStockWatchlist,
    deleteWatchlist,
    renameStockWatchlist
} from './watchlist/watchlist.mutation';
import {editUser, registerUser, resetUserAccount} from './user/user.mutation';
import {queryStockDetails, queryStockSummaries, queryStockSummary} from './stockDetails/stockDetails.query';
import {stockDetailsTypeDefs} from './stockDetails/stockDetails.typedefs';
import {STTransactionTypeDefs} from './st-transaction/st-transaction.typedef';
import {STRankTypeDefs} from './st-rank/st-rank.typedef';
import {STPortfolioTypeDefs} from './st-portfolio/st-portfolio.typedef';
import {editGroup, deleteGroup, createGroup} from "./st-group/st.group.mutation";
import {querySTGroupAllDataByGroupId, querySTGroupPartialDataByGroupName} from "./st-group/st-group.query";
import {stockDetailsResolvers} from "./stockDetails/stockDetails.resolver";

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
        querySTUserPartialInformationByUsername(usernamePrefix: String!): [STUserPartialInformation]!
        authenticateUser(uid: String!): STUserPublicData
        
        # watchlist
        # queryUserStockWatchlists(uid: String!): [STStockWatchlist]
        
        # groups
        querySTGroupAllDataByGroupId(groupId: String!): STGroupAllData
        querySTGroupPartialDataByGroupName(groupName: String!): STSearchGroups
        
        # details
        queryStockDetails(symbol: String!): StockDetails
        queryStockSummary(symbol: String!): Summary
        queryStockSummaries(symbolPrefix: String!): SearchSymbol
    }

    #### MUTATION
    type Mutation {
        # user
        registerUser(user: STUserAuthenticationInput): Boolean
        editUser(editInput: STUserEditDataInput): Boolean
        resetUserAccount(userId: String!): Boolean
        
        # groups
        createGroup(groupInput: STGroupAllDataInput): STGroupPartialData
        editGroup(groupInput: STGroupAllDataInput): STGroupPartialData
        deleteGroup(uid: String, groupId: String): Boolean
        # send invitation TODO
        
        ## watchlist
        createStockWatchlist( identifier: STStockWatchInputlistIdentifier!): STStockWatchlist
        renameStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
        deleteWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
        addStockIntoStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Summary
        removeStockFromStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
    }
`;


const mainResolver = {
    Query: {
        // USER
        authenticateUser: async (_: null, args: { uid: string }) => await authenticateUser(args.uid),
        queryUserData: async (_: null, args: { uid: string }) => await queryUserPublicData(args.uid),
        querySTUserPartialInformationByUsername: async (_: null, args: { usernamePrefix: string }) => await querySTUserPartialInformationByUsername(args.usernamePrefix),
        //queryUserStockWatchlists: async (_: null, args: { uid: string }) => await queryUserStockWatchlists(args.uid),

        // GROUP
        querySTGroupAllDataByGroupId: async (_: null, args: { groupId: string }) => await querySTGroupAllDataByGroupId(args.groupId),
        querySTGroupPartialDataByGroupName: async (_: null, args: { groupName: string }) => await querySTGroupPartialDataByGroupName(args.groupName),

        // stock details
        queryStockDetails: async (_: null, args: { symbol: string }) => await queryStockDetails(args.symbol),
        queryStockSummary: async (_: null, args: { symbol: string }) => await queryStockSummary(args.symbol),
        queryStockSummaries: async (_: null, args: { symbolPrefix: string }) => await queryStockSummaries(args.symbolPrefix),
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

        // WATCHLIST
        createStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await createStockWatchlist(args.identifier),
        renameStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await renameStockWatchlist(args.identifier),
        deleteWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await deleteWatchlist(args.identifier),
        addStockIntoStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await addStockIntoStockWatchlist(args.identifier),
        removeStockFromStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }) => await removeStockFromStockWatchlist(args.identifier)
    }

};


const resolvers = {
    ...userResolvers,
    ...stockDetailsResolvers,
    ...mainResolver

};


const server = new ApolloServer({
    typeDefs: [
        mainTypeDefs,
        userTypeDefs,
        watchlistTypeDefs,
        stockDetailsTypeDefs,
        STTransactionTypeDefs,
        STSharedTypeDefs,
        STRankTypeDefs,
        STPortfolioTypeDefs,
        STGroupTypeDefs
    ],
    resolvers,
    introspection: true
});


server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});

