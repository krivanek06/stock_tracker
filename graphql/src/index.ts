import { ApolloServer, gql } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { STFinancialModelingAPITypeDefs } from './api/financial-modeling/st-financal-modeling-api.typedefs';
import { queryStockScreener } from './api/financial-modeling/st-financial-modeling.api';
import { DATABASE_URL } from './environment';
import { adminToggleUserRoles } from './st-admin';
import { queryAdminMainInformations } from './st-admin/st-admin.query';
import { STAdminTypeDefs } from './st-admin/st-admin.typeDefs';
import {
	answerReceivedGroupInvitation,
	createGroup,
	deleteGroup,
	editGroup,
	leaveGroup,
	removeMemberFromGroup,
	toggleInvitationRequestToGroup,
	toggleWatchGroup,
} from './st-group';
import { toggleInviteUserIntoGroup } from './st-group/mutations/toggleInviteUserIntoGroup.mutation';
import { toggleUsersInvitationRequestToGroup } from './st-group/mutations/toggleUsersInvitationRequestToGroup.mutation';
import { querySTGroupByGroupId, querySTGroupByGroupName } from './st-group/st-group.query';
import { stGroupResolvers } from './st-group/st-group.resolver';
import { STGroupTypeDefs } from './st-group/st-group.typedefs';
import { STPortfolioTypeDefs } from './st-portfolio/st-portfolio.typedef';
import {
	queryEtfDocument,
	queryHallOfFame,
	queryMarketDailyOverview,
	queryStMarketAllCategories,
	queryStMarketData,
	querySTMarketHistoryOverview,
	SThallOfFameTypeDefs,
	STMarketSharedTypeDefs,
} from './st-public';
import { STRankTypeDefs } from './st-rank/st-rank.typedef';
import { Context } from './st-shared/st-shared.interface';
import { STSharedTypeDefs } from './st-shared/st-shared.typedef';
import { STStockDetailsCalculationsTypeDefs } from './st-stock-calculations';
import { STDiscountedCashFlowFormulaTypeDefs } from './st-stock-calculations/st-discounted-cash-flow-formula.typedef';
import { STDividendDiscountedFormulaTypeDefs } from './st-stock-calculations/st-dividend-discounted-formula.typedef';
import { STEarningsValuationFormulaTypeDefs } from './st-stock-calculations/st-earnings-valuation-formula.typedef';
import { STFreeCashFlowFormulaTypeDefs } from './st-stock-calculations/st-free-cash-flow-formula.typedef';
import {
	queryEtfDetails,
	queryStockDetails,
	queryStockDetailsFinancialGrowth,
	queryStockDetailsFinancialRatios,
	queryStockDetailsKeyMetrics,
	queryStockFinancialReports,
	queryStockQuotesByPrefix,
	queryStockSummary,
	setForceReloadStockDetails,
	stockDetailsTypeDefs,
} from './st-stocks';
import { querySymbolHistoricalPrices } from './st-stocks/st-stocks-query/queryStockHistoricalPrice';
import { performTransaction } from './st-transaction/st-transaction.mutation';
import { stTransactionResolvers } from './st-transaction/st-transaction.resolver';
import { STTransactionTypeDefs } from './st-transaction/st-transaction.typedef';
import { editUser, registerUser, resetUserAccount } from './st-user/mutations';
import { authenticateUser, queryUserPublicDataById, queryUserPublicDataByUsername } from './st-user/user.query';
import { userResolvers } from './st-user/user.resolver';
import { userTypeDefs } from './st-user/user.typeDefs';
import { closeTicket, commentTicket, createTicket, deleteTicket, stTicketsResolver, STTicketsTypeDefs } from './st-utils';
import { commentTicketEdit } from './st-utils/st-tickets/mutations/comment-ticket-edit.mutation';
import { validatorFinhubKeyValidity } from './validators';
import {
	addStockIntoStockWatchlist,
	createStockWatchlist,
	deleteWatchlist,
	removeStockFromStockWatchlist,
	renameStockWatchlist,
} from './watchlist/watchlist.mutation';
import { stStockWatchlistResolvers } from './watchlist/watchlist.resolver';
import { watchlistTypeDefs } from './watchlist/watchlist.typedefs';

global.fetch = require('node-fetch');

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: DATABASE_URL,
});

const mainTypeDefs = gql`
	###### QUERY
	type Query {
		# user
		queryUserPublicDataById(id: String!): STUserPublicData
		queryUserPublicDataByUsername(usernamePrefix: String!): [STUserPublicData]!
		authenticateUser(id: String!): STUserPublicData

		# groups
		querySTGroupByGroupId(id: String!): STGroupAllData
		querySTGroupByGroupName(groupName: String!): [STGroupAllData]!

		# details
		queryStockDetails(symbol: String!, reload: Boolean): StockDetails
		queryEtfDetails(symbol: String!, reload: Boolean): EtfDetails
		queryStockSummary(symbol: String!, allowReload: Boolean): Summary
		queryStockQuotesByPrefix(symbolPrefix: String!): [STFMCompanyQuote]!
		queryStockFinancialReports(symbol: String!): StockDetailsFinancialReports
		querySymbolHistoricalPrices(symbol: String!, period: String!): SymbolHistoricalPrices
		queryStockDetailsFinancialRatios(symbol: String!, period: String!, allData: Boolean!): STDetailsFinancialRatios
		queryStockDetailsFinancialGrowth(symbol: String!, period: String!, allData: Boolean!): STDetailsFinancialGrowth
		queryStockDetailsKeyMetrics(symbol: String!, period: String!, allData: Boolean!): STDetailsKeyMetrics

		# public
		querySTMarketHistoryOverview: STMarketOverviewPartialData
		queryStMarketAllCategories: STMarketDatasetKeyCategories
		queryMarketDailyOverview: STMarketDailyOverview
		queryStMarketData(key: String!): STMarketChartDataResultCombined
		queryEtfDocument(etfName: String!): STMarketEtfDocument
		queryStockScreener(stockScreenerInput: STFMStockScreenerInput!, offset: Int!, limit: Int!): STFMStockScreenerResultWrapper
		queryHallOfFame: STHallOfFame!

		# admin
		queryAdminMainInformations: STAdminMainInformations

		# async validators
		validatorFinhubKeyValidity(finuhbKey: String!): Boolean
	}

	#### MUTATION
	type Mutation {
		# user
		registerUser(user: STUserAuthenticationInput): Boolean
		editUser(editInput: STUserEditDataInput): Boolean
		resetUserAccount(userId: String!): STUserResetedAccount

		# groups
		createGroup(groupInput: STGroupAllDataInput!): STGroupAllData
		editGroup(groupInput: STGroupAllDataInput!): Boolean
		deleteGroup(id: String!): Boolean
		toggleInvitationRequestToGroup(id: String!, sendInvitation: Boolean!): STGroupAllData
		answerReceivedGroupInvitation(id: String!, accept: Boolean!): STGroupAllData
		toggleInviteUserIntoGroup(inviteUser: Boolean!, userId: String!, groupId: String!): STGroupUser
		toggleUsersInvitationRequestToGroup(acceptUser: Boolean!, userId: String!, groupId: String!): STGroupUser
		leaveGroup(id: String!): Boolean
		removeMemberFromGroup(groupId: String!, removingUserId: String!): Boolean
		toggleWatchGroup(groupId: String!): Boolean

		## watchlist
		createStockWatchlist(identifier: STStockWatchInputlistIdentifier!): STStockWatchlist
		renameStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
		deleteWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean
		addStockIntoStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Summary
		removeStockFromStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean

		# trading
		performTransaction(transactionInput: STTransactionInput!): PerformedTransaction

		# stock details
		setForceReloadStockDetails: Boolean

		# utils - tickets
		createTicket(ticketValuse: STTicketCreateValues!): STTicket
		commentTicket(ticketId: String!, comment: String!): STTicketComment
		commentTicketEdit(commentEditValues: STTicketCommentEditValues!): String
		closeTicket(ticketId: String!): Boolean
		deleteTicket(ticketId: String!): Boolean

		# ADMIN
		adminToggleUserRoles(userId: String!, role: String!): Boolean
	}
`;

const mainResolver = {
	// removing warning: missing a "__resolveType" resolver. Pass false into "resolverValidationOptions.requireResolversForResolveType" to disable this warning.
	STGroupIdentificationInterface: {
		__resolveType() {
			return null;
		},
	},
	Query: {
		// USER
		authenticateUser: async (_: null, args: { id: string }) => await authenticateUser(args.id),
		queryUserPublicDataById: async (_: null, args: { id: string }) => await queryUserPublicDataById(args.id),
		queryUserPublicDataByUsername: async (_: null, args: { usernamePrefix: string }) => await queryUserPublicDataByUsername(args.usernamePrefix),

		// GROUP
		querySTGroupByGroupId: async (_: null, args: { id: string }) => await querySTGroupByGroupId(args.id),
		querySTGroupByGroupName: async (_: null, args: { groupName: string }) => await querySTGroupByGroupName(args.groupName),

		// stock details
		queryStockDetails: async (_: null, args: { symbol: string; reload: boolean }) => await queryStockDetails(args.symbol, args.reload),
		queryEtfDetails: async (_: null, args: { symbol: string; reload: boolean }) => await queryEtfDetails(args.symbol, args.reload),
		queryStockSummary: async (_: null, args: { symbol: string; allowReload?: boolean }) => await queryStockSummary(args.symbol, args.allowReload),
		queryStockQuotesByPrefix: async (_: null, args: { symbolPrefix: string }) => await queryStockQuotesByPrefix(args.symbolPrefix),
		queryStockFinancialReports: async (_: null, args: { symbol: string }) => await queryStockFinancialReports(args.symbol),
		querySymbolHistoricalPrices: async (_: null, args: { symbol: string; period: string }) =>
			await querySymbolHistoricalPrices(args.symbol, args.period),
		queryStockDetailsFinancialRatios: async (_: null, args: { symbol: string; period: 'quarter' | 'year'; allData: boolean }) =>
			await queryStockDetailsFinancialRatios(args.symbol, args.period, args.allData),
		queryStockDetailsFinancialGrowth: async (_: null, args: { symbol: string; period: 'quarter' | 'year'; allData: boolean }) =>
			await queryStockDetailsFinancialGrowth(args.symbol, args.period, args.allData),
		queryStockDetailsKeyMetrics: async (_: null, args: { symbol: string; period: 'quarter' | 'year'; allData: boolean }) =>
			await queryStockDetailsKeyMetrics(args.symbol, args.period, args.allData),

		// public
		querySTMarketHistoryOverview: async (_: null, args: null) => await querySTMarketHistoryOverview(),
		queryMarketDailyOverview: async (_: null, args: null) => await queryMarketDailyOverview(),
		queryStMarketAllCategories: async (_: null, args: null) => await queryStMarketAllCategories(),
		queryStMarketData: async (_: null, args: { key: string }) => await queryStMarketData(args.key),
		queryEtfDocument: async (_: null, args: { etfName: string }) => await queryEtfDocument(args.etfName),
		queryStockScreener: async (_: null, args: { stockScreenerInput: api.STFMStockScreener; offset: number; limit: number }) =>
			await queryStockScreener(args.stockScreenerInput, args.offset, args.limit),
		queryHallOfFame: async () => await queryHallOfFame(),

		// admin
		queryAdminMainInformations: async (_: null, args: null) => await queryAdminMainInformations(),

		// async validators
		validatorFinhubKeyValidity: async (_: null, args: { finuhbKey: string }) => await validatorFinhubKeyValidity(args.finuhbKey),
	},

	Mutation: {
		// USER
		registerUser: async (_, args: { user: api.STUserAuthenticationInput }) => await registerUser(args.user),
		editUser: async (_, args: { editInput: api.STUserEditDataInput }) => await editUser(args.editInput),
		resetUserAccount: async (_, args: { userId: string }) => await resetUserAccount(args.userId),

		// GROUPS
		createGroup: async (_, args: { groupInput: api.STGroupAllDataInput }, context) => await createGroup(args.groupInput, context),
		editGroup: async (_, args: { groupInput: api.STGroupAllDataInput }) => await editGroup(args.groupInput),
		deleteGroup: async (_, args: { id: string }, context: Context) => await deleteGroup(args.id, context),
		answerReceivedGroupInvitation: async (_, args: { id: string; accept: boolean }, context: Context) =>
			await answerReceivedGroupInvitation(args.id, args.accept, context),
		toggleInvitationRequestToGroup: async (_, args: { id: string; sendInvitation: boolean }, context: Context) =>
			await toggleInvitationRequestToGroup(args.id, args.sendInvitation, context),
		toggleInviteUserIntoGroup: async (_, args: { inviteUser: boolean; userId: string; groupId: string }) =>
			await toggleInviteUserIntoGroup(args.inviteUser, args.userId, args.groupId),
		toggleUsersInvitationRequestToGroup: async (_, args: { acceptUser: boolean; userId: string; groupId: string }) =>
			await toggleUsersInvitationRequestToGroup(args.acceptUser, args.userId, args.groupId),
		leaveGroup: async (_, args: { id: string }, context: Context) => await leaveGroup(args.id, context),
		removeMemberFromGroup: async (_, args: { groupId: string; removingUserId: string }, context: Context) =>
			await removeMemberFromGroup(args.groupId, args.removingUserId, context),
		toggleWatchGroup: async (_, args: { groupId: string }, context: Context) => await toggleWatchGroup(args.groupId, context),

		// WATCHLIST
		createStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }, context: Context) =>
			await createStockWatchlist(args.identifier, context),
		renameStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }, context: Context) =>
			await renameStockWatchlist(args.identifier, context),
		deleteWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }, context: Context) =>
			await deleteWatchlist(args.identifier, context),
		addStockIntoStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }, context: Context) =>
			await addStockIntoStockWatchlist(args.identifier, context),
		removeStockFromStockWatchlist: async (_, args: { identifier: api.STStockWatchlistIdentifier }, context: Context) =>
			await removeStockFromStockWatchlist(args.identifier, context),

		// trading
		performTransaction: async (_, args: { transactionInput: api.STTransactionInput }, { requesterUserId }: Context) =>
			await performTransaction(args.transactionInput, requesterUserId),

		// stock detils
		setForceReloadStockDetails: async () => await setForceReloadStockDetails(),

		// utils - tickets
		createTicket: async (_, args: { ticketValuse: api.STTicketCreateValues }, context: Context) =>
			await createTicket(args.ticketValuse, context.requesterUserId),
		commentTicket: async (_, args: { ticketId: string; comment: string }, context: Context) =>
			await commentTicket(args.ticketId, args.comment, context.requesterUserId),
		commentTicketEdit: async (_, args: { commentEditValues: api.STTicketCommentEditValues }, context: Context) =>
			await commentTicketEdit(args.commentEditValues, context.requesterUserId),
		closeTicket: async (_, args: { ticketId: string }) => await closeTicket(args.ticketId),
		deleteTicket: async (_, args: { ticketId: string }) => await deleteTicket(args.ticketId),

		// ADMIN
		adminToggleUserRoles: async (_, args: { userId: string; role: string }) => await adminToggleUserRoles(args.userId, args.role),
	},
};

const resolvers = {
	...userResolvers,
	...stTransactionResolvers,
	...stStockWatchlistResolvers,
	...stGroupResolvers,
	...mainResolver,
	...stTicketsResolver,
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
		STAdminTypeDefs,
		STStockDetailsCalculationsTypeDefs,
		STDiscountedCashFlowFormulaTypeDefs,
		STDividendDiscountedFormulaTypeDefs,
		STEarningsValuationFormulaTypeDefs,
		STFreeCashFlowFormulaTypeDefs,
		STFinancialModelingAPITypeDefs,
		STTicketsTypeDefs,
		SThallOfFameTypeDefs,
	],
	resolvers,
	introspection: true,
	context: ({ req }) => ({
		// To find out the correct arguments for a specific integration,
		// see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

		// Get the user token from the headers.
		requesterUserId: req.headers.requesteruserid || '',
	}),
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
