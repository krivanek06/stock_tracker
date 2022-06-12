import { gql } from 'apollo-server';

export const STTransactionTypeDefs = gql`
	# TYPES
	type PerformedTransaction {
		holding: STHolding
		transaction: STTransaction!
	}

	type STHolding {
		symbol: String!
		breakEvenPrice: Float!
		units: Float!
		summary: Summary!
	}

	type STTransaction {
		transactionId: String
		user: STUserIdentification
		symbol: String!
		symbol_logo_url: String!
		price: Float!
		return: Float
		returnChange: Float
		units: Float!
		date: String!
		operation: STTransactionOperationEnum!
		transactionFees: Float!
	}

	type STTransactionSnapshot {
		transactionsBuy: Float
		transactionsSell: Float
		transactionFees: Float
		date: String!
	}

	#INPUTS
	input STTransactionInput {
		symbol: String!
		symbol_logo_url: String!
		units: Float!
		operation: STTransactionOperationEnum!
	}

	# ENUMS
	enum STTransactionOperationEnum {
		BUY
		SELL
	}
`;
