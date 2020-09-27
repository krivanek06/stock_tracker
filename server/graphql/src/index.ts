import { PrivateData, User } from './user/user.model';
import { watchlistTypeDefs } from './watchlist/watchlist.typedefs';
import {ApolloServer, gql} from 'apollo-server';
import {userTypeDefs} from './user/user.typeDefs';
import {userResolvers } from './user/user.resolver';
import * as admin from 'firebase-admin';
import { watchlistResolvers } from './watchlist/watchlist.resolver';
import { queryUser } from './user/user.query';
import { queryUserStockWatchlists as queryUserStockWatchlists } from './watchlist/watchlist.query';
import { createStockWatchlist, addStockIntoStockWatchlist, removeStockFromStockWatchlist, deleteWatchlist, renameStockWatchlist } from './watchlist/watchlist.mutation';
import { StockWatchlistIdentifier } from './watchlist/watchList.model';
import { updateUserData, updateUserPrivateData, registerUser } from './user/user.mutation';
import { queryStockDetails } from './stockDetails/stockDetails.query';
import { stockDetailsTypeDefs } from './stockDetails/stockDetails.typedefs';

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
      queryUser(uid: String!): User
      # watchlist
      queryUserStockWatchlists(uid: String!): [StockWatchlist]
      # details
      queryStockDetails(symbol: String!): StockDetails
  }

  #### MUTATION
  type Mutation {
        # user
        updateUserData(user: UserInput): User
        registerUser(user: UserInput): User
        updateUserPrivateData(uid: String, userPrivateDataInput: UserPrivateDataInput): UserPrivateData

        ## watchlist
        createStockWatchlist( identifier: StockWatchlistIdentifier!): StockWatchlist
        renameStockWatchlist(identifier: StockWatchlistIdentifier!): Boolean
        deleteWatchlist(identifier: StockWatchlistIdentifier!): Boolean
        addStockIntoStockWatchlist(identifier: StockWatchlistIdentifier!): Summary
        removeStockFromStockWatchlist(identifier: StockWatchlistIdentifier!): Boolean
  }
`;



const mainResolver = {
  Query: {
    queryUser: async (_: null, args: { uid: string }) => await queryUser(args.uid),
    queryUserStockWatchlists: async (_: null, args: { uid: string }) => await queryUserStockWatchlists(args.uid),
    queryStockDetails: async (_: null, args: {symbol: string}) => await queryStockDetails(args.symbol),
   },

  Mutation: {
    // for user
    updateUserData: async (_, args: {user: User} ) => await updateUserData(args.user),
    registerUser: async (_, args: {user: User} ) => await registerUser(args.user),
    updateUserPrivateData: async(_, args: {uid: string, userPrivateDataInput: PrivateData}) => await updateUserPrivateData(args.uid, args.userPrivateDataInput),

    // for watchlist
    createStockWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await createStockWatchlist(args.identifier),
    renameStockWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await renameStockWatchlist(args.identifier),
    deleteWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await deleteWatchlist(args.identifier),
    addStockIntoStockWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await addStockIntoStockWatchlist(args.identifier),
    removeStockFromStockWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await removeStockFromStockWatchlist(args.identifier)
  }

};


const resolvers = {
  ...userResolvers, 
  ...watchlistResolvers,
  ...mainResolver
 
};


const server = new ApolloServer({
    typeDefs: [mainTypeDefs, userTypeDefs, watchlistTypeDefs, stockDetailsTypeDefs],
    resolvers,
    introspection: true
});


server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});

