import {STGroupTypeDefs} from './st-group/st-group.typedefs';
import {STSharedTypeDefs} from './st-shared/st-shared.typedef';
import {STUserAuthenticationInput, STUserPrivateData} from './user/user.model';
import {watchlistTypeDefs} from './watchlist/watchlist.typedefs';
import {ApolloServer, gql} from 'apollo-server';
import {userTypeDefs} from './user/user.typeDefs';
import {userResolvers} from './user/user.resolver';
import * as admin from 'firebase-admin';
import {authenticateUser, querySTUserPartialInformationByUsername, queryUserPublicData} from './user/user.query';
import {
    createStockWatchlist,
    addStockIntoStockWatchlist,
    removeStockFromStockWatchlist,
    deleteWatchlist,
    renameStockWatchlist
} from './watchlist/watchlist.mutation';
import {STStockWatchlistIdentifier} from './watchlist/watchList.model';
import {updateUserPrivateData, registerUser} from './user/user.mutation';
import {queryStockDetails} from './stockDetails/stockDetails.query';
import {stockDetailsTypeDefs} from './stockDetails/stockDetails.typedefs';
import {STTransactionTypeDefs} from './st-transaction/st-transaction.typedef';
import {STRankTypeDefs} from './st-rank/st-rank.typedef';
import {STPortfolioTypeDefs} from './st-portfolio/st-portfolio.typedef';
import {editGroup, deleteGroup, createGroup} from "./st-group/st.group.mutation";
import {STGroupAllDataInput} from "./st-group/st-group.model";
import {querySTGroupAllDataByGroupId} from "./st-group/st-group.query";

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
        
        # details
        queryStockDetails(symbol: String!): StockDetails
    }

    #### MUTATION
    type Mutation {
        # user
        #updateUserData(user: UserInputAuthentication): STUserPublicData
        registerUser(user: STUserAuthenticationInput): Boolean
        #updateUserPrivateData(uid: String, userPrivateDataInput: UserPrivateDataInput): UserPrivateData
        
        # groups
        createGroup(groupInput: STGroupAllDataInput): STGroupPartialData
        editGroup(groupInput: STGroupAllDataInput): STGroupPartialData
        deleteGroup(uid: String, groupId: String): Boolean
        
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

        // stock details
        queryStockDetails: async (_: null, args: { symbol: string }) => await queryStockDetails(args.symbol),
    },

    Mutation: {
        // USER
        registerUser: async (_, args: { user: STUserAuthenticationInput }) => await registerUser(args.user),

        // GROUPS
        createGroup: async (_, args: { groupInput: STGroupAllDataInput }) => await createGroup(args.groupInput),
        editGroup: async (_, args: { groupInput: STGroupAllDataInput }) => await editGroup(args.groupInput),
        deleteGroup: async (_, args: { uid: string, groupId: string }) => await deleteGroup(args.uid, args.groupId),

        // WATCHLIST
        createStockWatchlist: async (_, args: { identifier: STStockWatchlistIdentifier }) => await createStockWatchlist(args.identifier),
        renameStockWatchlist: async (_, args: { identifier: STStockWatchlistIdentifier }) => await renameStockWatchlist(args.identifier),
        deleteWatchlist: async (_, args: { identifier: STStockWatchlistIdentifier }) => await deleteWatchlist(args.identifier),
        addStockIntoStockWatchlist: async (_, args: { identifier: STStockWatchlistIdentifier }) => await addStockIntoStockWatchlist(args.identifier),
        removeStockFromStockWatchlist: async (_, args: { identifier: STStockWatchlistIdentifier }) => await removeStockFromStockWatchlist(args.identifier)
    }

};


const resolvers = {
    ...userResolvers,
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

