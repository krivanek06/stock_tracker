import { gql } from 'apollo-server';

export const STGroupTypeDefs = gql`
	#type

	type STGroupUser {
		id: String!
		nickName: String!
		locale: String
		photoURL: String!
		accountCreatedDate: String!
		portfolio: STPortfolioWrapper!
		startedPortfolio: STPortfolioSnapshotStarted!
		previousPosition: Float
		currentPosition: Float
		sinceDate: String!
	}

	type STGroupAllData {
		id: String!
		name: String!
		description: String
		imagePath: String
		imageUrl: String
		owner: STGroupUser!
		lastUpdateDate: String!
		lastEditedDate: String!
		createdDate: String!
		currentAchievedRanks: STRank
		watchedByUsers: Float!
		startDate: String!
		endDate: String
		isInfinite: Boolean!
		isPrivate: Boolean!
		isClosed: Boolean!
		portfolio: STPortfolioWrapper!
		startedPortfolio: STPortfolioSnapshotStarted!
		numberOfMembers: Float!
		numberOfInvitationReceived: Float!
		numberOfInvitationSent: Float!
		topTransactions: [STTransaction!]!
		lastTransactions: [STTransaction!]!
		managers: [STGroupUser!]!
		groupHistoricalData: STGroupHistoricalData!
		groupMemberData: STGroupMemberData!
		topMembers: [STGroupUser!]!
	}

	type STGroupMemberData {
		id: String!
		members: [STGroupUser!]!
		holdings: [STGroupHoldings!]!
		invitationSent: [STGroupUser!]!
		invitationReceived: [STGroupUser!]!
	}

	type STGroupHoldings {
		holding: STHolding!
		numberOfUsers: Float!
	}

	type STGroupHistoricalData {
		portfolioSnapshots: [STPortfolioSnapshot!]!
		transactionSnapshots: [STTransactionSnapshot!]!
		bestAchievedRanks: [STRank!]!
		groupLogs: [STLog!]!
	}

	input STGroupAllDataInput {
		groupId: String
		name: String!
		description: String
		imagePath: String
		imageUrl: String
		startDate: String!
		endDate: String
		isInfinite: Boolean!
		isPrivate: Boolean!
		isOwnerAlsoMember: Boolean!
		invitationSent: [String]!
		invitationReceived: [String]!
	}
`;
