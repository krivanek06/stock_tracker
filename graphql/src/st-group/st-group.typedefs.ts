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

	interface STGroupIdentificationInterface {
		id: String!
		name: String!
		description: String
		imagePath: String
		imageUrl: String
		owner: STGroupUser!
		startDate: String!
		endDate: String
		isInfinite: Boolean!
		isPrivate: Boolean!
		rank: STRank!
		isClosed: Boolean
		numberOfMembers: Float!
		numberOfMembersActive: Float
		createdDate: String!
		portfolio: STPortfolioWrapper!
		startedPortfolio: STPortfolioSnapshotStarted!
		topMembers: [STGroupUser!]!
		lastUpdateDate: String!
		lastEditedDate: String!
		watchedByUsers: Float!
	}

	type STGroupIdentification implements STGroupIdentificationInterface {
		id: String!
		name: String!
		description: String
		imagePath: String
		imageUrl: String
		owner: STGroupUser!
		startDate: String!
		endDate: String
		isInfinite: Boolean!
		isPrivate: Boolean!
		rank: STRank!
		isClosed: Boolean
		numberOfMembers: Float!
		numberOfMembersActive: Float
		createdDate: String!
		portfolio: STPortfolioWrapper!
		startedPortfolio: STPortfolioSnapshotStarted!
		topMembers: [STGroupUser!]!
		lastUpdateDate: String!
		lastEditedDate: String!
		watchedByUsers: Float!
	}

	type STGroupAllData implements STGroupIdentificationInterface {
		id: String!
		name: String!
		description: String
		imagePath: String
		imageUrl: String
		owner: STGroupUser!
		lastUpdateDate: String!
		lastEditedDate: String!
		createdDate: String!
		rank: STRank!
		watchedByUsers: Float!
		startDate: String!
		endDate: String
		isInfinite: Boolean!
		isPrivate: Boolean!
		isClosed: Boolean!
		portfolio: STPortfolioWrapper!
		startedPortfolio: STPortfolioSnapshotStarted!
		numberOfMembers: Float!
		numberOfMembersActive: Float
		numberOfInvitationReceived: Float!
		numberOfInvitationSent: Float!
		topTransactions: [STTransaction!]!
		lastTransactions: [STTransaction!]!
		managers: [STGroupUser!]!
		topMembers: [STGroupUser!]!
		groupHistoricalData: STGroupHistoricalData!
		groupMemberData: STGroupMemberData!
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
