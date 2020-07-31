import { watchlistTypeDefs } from './watchlist/watchlist.typedefs';
import {ApolloServer, gql} from 'apollo-server';
import {userTypeDefs} from './user/user.typeDefs';
import {userResolvers } from './user/user.resolver';
import * as admin from 'firebase-admin';
import { watchlistResolvers } from './watchlist/watchlist.resolver';
import { queryUser } from './user/user.query';
import { queryUsersStockWatchlist } from './watchlist/watchlist.query';
import { createStockWatchlist, addStockIntoStockWatchlist, removeStockFromStockWatchlist, deleteWatchlist } from './watchlist/watchlist.mutation';
import { StockWatchlistIdentifier, StockWatchlistCommonData } from './watchlist/watchList.model';

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktrackertest-e51fc.firebaseio.com"
});




const mainTypeDefs = gql`

  ###### QUERY
  type Query {
      user(uid: String!): User
      stockWatchlist(uid: String!): [StockWatchlist]
  }

  #### MUTATION
  type Mutation {
        createStockWatchlist( identifier: StockWatchlistCommonData!): StockWatchlist
        addStockIntoStockWatchlist(identifier: StockWatchlistIdentifier!): OverView
        removeStockFromStockWatchlist(identifier: StockWatchlistIdentifier!): Boolean
        deleteWatchlist(identifier: StockWatchlistIdentifier!): Boolean
  }
`;



const mainResolver = {
  Query: {
    user: async (_: null, args: { uid: string }) => await queryUser(args.uid),
    stockWatchlist: async (_: null, args: { uid: string }) => await queryUsersStockWatchlist(args.uid)
  },
  Mutation: {
    createStockWatchlist: async (_, args: {identifier: StockWatchlistCommonData} ) => await createStockWatchlist(args.identifier),
    addStockIntoStockWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await addStockIntoStockWatchlist(args.identifier),
    removeStockFromStockWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await removeStockFromStockWatchlist(args.identifier),
    deleteWatchlist: async (_, args: {identifier: StockWatchlistIdentifier} ) => await deleteWatchlist(args.identifier)
  }

};


const resolvers = {
  ...userResolvers, 
  ...watchlistResolvers,
  ...mainResolver
 
};


const server = new ApolloServer({
    typeDefs: [mainTypeDefs, userTypeDefs, watchlistTypeDefs],
    resolvers,
    introspection: true
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});

