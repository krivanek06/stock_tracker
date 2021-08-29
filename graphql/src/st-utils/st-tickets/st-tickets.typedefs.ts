import { gql } from 'apollo-server';

export const STTicketsTypeDefs = gql`
	#type
	type STTicket {
		id: String!
		name: String!
		type: STTicketTypes!
		message: String!
		createdBy: STUserIndetificationBase!
		createdAt: String!
		isOpen: Boolean!
		comments: [STTicketComment]!
	}

	type STTicketComment {
		id: String!
		createdBy: STUserIndetificationBase!
		comment: String!
		createdAt: String!
	}

	enum STTicketTypes {
		IMPROVEMENT
		DEFECT
	}

	#Inputs
	input STTicketCreateValues {
		name: String!
		type: STTicketTypes!
		message: String!
	}
`;
