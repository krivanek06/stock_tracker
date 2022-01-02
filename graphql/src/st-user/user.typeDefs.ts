import { gql } from 'apollo-server';

export const userTypeDefs = gql`
	# type
	type STUserGroups {
		groupInvitationSent: [STGroupAllData!]!
		groupInvitationReceived: [STGroupAllData!]!
		groupOwner: [STGroupAllData!]!
		groupMember: [STGroupAllData!]!
		groupWatched: [STGroupAllData!]!
	}

	type STUserIndetificationBase {
		nickName: String!
		locale: String
		photoURL: String!
		accountCreatedDate: String!
	}

	type STUserIndetification {
		id: String!
		nickName: String!
		locale: String
		photoURL: String!
		accountCreatedDate: String!
	}

	type STUserPublicData {
		id: String!
		nickName: String!
		locale: String
		photoURL: String
		accountCreatedDate: String!
		lastSignInDate: String!
		rank: STRank
		holdings: [STHolding!]!
		transactionsSnippets: [STTransaction!]!
		topTransactions: [STTransaction!]!
		activity: USER_ACTIVITY
		groups: STUserGroups!
		portfolio: STPortfolioWrapper!
		portfolioRisk: STPortfolioRiskCalculations
		userPrivateData: STUserPrivateData!
		userHistoricalData: STUserHistoricalData!
		stockWatchlist: [STStockWatchlist!]!
	}

	type STUserPrivateData {
		id: String
		finnhubKey: String
		tradingEnabledDate: String
		roles: [String!]!
		tickets: [STTicket!]!
		email: String!
		displayName: String!
		providerId: String
		status: USER_STATUS!
		geographic: STGeographic
		nicknameLastChange: String
	}

	type STUserHistoricalData {
		portfolioSnapshots: [STPortfolioSnapshot!]!
		transactionSnapshots: [STTransactionSnapshot!]!
		bestAchievedRanks: [STRank!]!
		resetedAccount: [STUserResetedAccount!]!
		userLogs: [STLog!]!
	}

	type STUserResetedAccount {
		date: String!
		portfolioTotal: Float!
	}

	###################################################
	# Input
	input STUserAuthenticationInput {
		uid: String
		displayName: String
		email: String
		photoURL: String
		providerId: String
		locale: String
	}

	input STUserEditDataInput {
		userId: String
		finnhubKey: String
		nickName: String
		photoURL: String
	}

	input STUserIndetificationInformationInput {
		id: String!
		nickName: String!
		locale: String
		photoURL: String!
		accountCreatedDate: String!
	}

	##########################################
	#ENUM
	enum USER_ACTIVITY {
		SIGNED_IN
		SIGNED_OUT
	}

	enum USER_STATUS {
		PENDING
		DENIED
		ALLOWED
	}

	enum USER_STATUS_IN_GROUP {
		OWNER
		MANAGER
		MEMBER
		INVITATION_SENT
		INVITATION_RECEIVED
	}

	enum USER_ROLES_ENUM {
		ROLE_ADMIN
		ROLE_GROUP_CREATE
	}
`;
