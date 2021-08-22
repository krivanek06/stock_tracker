import { InputSource } from '@shared';
export interface GroupMemberPosition {
	label: string;
	values: GroupMemberPositionChangeEnum;
}

export interface GroupForm {
	name: string;
	description: string;
	imagePath: string;
	imageUrl: string;
	startDate: string;
	endDate: string;
	isInfinite: boolean;
	isPrivate: boolean;
	isOwnerAlsoMember: boolean;
}

export enum GroupMemberPositionChangeEnum {
	ACCEPT_RECEIVED_INVITATION = 'ACCEPT_RECEIVED_INVITATION',
	REMOVE_RECEIVED_INVITATION = 'REMOVE_RECEIVED_INVITATION',
	REMOVE_SENT_INVITATION = 'REMOVE_SENT_INVITATION',
	REMOVE_MEMBER = 'REMOVE_MEMBER',
	SET_AS_MANAGER = 'SET_AS_MANAGER',
	REMOVE_MANAGER = 'REMOVE_MANAGER',
	SET_AS_OWNER = 'SET_AS_OWNER',
}

export const GROUP_PROMOTE_RECEIVED_INVITATION: GroupMemberPosition[] = [
	{ label: 'Accept user', values: GroupMemberPositionChangeEnum.ACCEPT_RECEIVED_INVITATION },
	{ label: 'Decline user', values: GroupMemberPositionChangeEnum.REMOVE_RECEIVED_INVITATION },
];

export const GROUP_PROMOTE_SENT_INVITATION: GroupMemberPosition[] = [
	{ label: 'Remove invitation', values: GroupMemberPositionChangeEnum.REMOVE_SENT_INVITATION },
];

export const GROUP_PROMOTE_MEMBER: GroupMemberPosition[] = [
	{ label: 'Promote to manager', values: GroupMemberPositionChangeEnum.SET_AS_MANAGER },
	{ label: 'Remove from group', values: GroupMemberPositionChangeEnum.REMOVE_MEMBER },
];

export const GROUP_PROMOTE_MANAGER: GroupMemberPosition[] = [
	{ label: 'Set as owner', values: GroupMemberPositionChangeEnum.SET_AS_OWNER },
	{ label: 'Remove as manager', values: GroupMemberPositionChangeEnum.REMOVE_MANAGER },
];

export enum GroupMemberSortValuesEnum {
	highest_portfolio = 'highest_portfolio',
	biggest_gains_since_member = 'biggest_gains_since_member',
}

export const GROUP_MEMBERS_SORT_INPUT_SOURCE: InputSource[] = [
	{ caption: 'Higher portfolio', value: GroupMemberSortValuesEnum.highest_portfolio },
	{ caption: 'Biggest gains since memeber', value: GroupMemberSortValuesEnum.biggest_gains_since_member },
];
