import { User } from './user/user.model';
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
import { updateUserData } from './user/user.mutation';

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktrackertest-e51fc.firebaseio.com"
});




const mainTypeDefs = gql`

  ###### QUERY
  type Query {
      queryUser(uid: String!): User
      queryUserStockWatchlists(uid: String!): [StockWatchlist]
     ## queryUserStockWatchlistById(uid: String!, documentId: String!): StockWatchlist
  }

  #### MUTATION
  type Mutation {
        # user
        updateUserData(user: UserInput): User

        ## watchlist
        createStockWatchlist( identifier: StockWatchlistIdentifier!): StockWatchlist
        renameStockWatchlist(identifier: StockWatchlistIdentifier!): Boolean
        deleteWatchlist(identifier: StockWatchlistIdentifier!): Boolean
        addStockIntoStockWatchlist(identifier: StockWatchlistIdentifier!): StockDetails
        removeStockFromStockWatchlist(identifier: StockWatchlistIdentifier!): Boolean
  }
`;



const mainResolver = {
  Query: {
    queryUser: async (_: null, args: { uid: string }) => await queryUser(args.uid),
    queryUserStockWatchlists: async (_: null, args: { uid: string }) => await queryUserStockWatchlists(args.uid),
   // queryUserStockWatchlistById: async (_: null, args: { uid: string, documentId: string }) => await queryUserStockWatchlistById(args.uid, args.documentId)
  },
  Mutation: {
    // for user
    updateUserData: async (_, args: {user: User} ) => await updateUserData(args.user),

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
    typeDefs: [mainTypeDefs, userTypeDefs, watchlistTypeDefs],
    resolvers,
    introspection: true
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});

