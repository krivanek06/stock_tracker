import * as api from 'stock-tracker-common-interfaces';

export const convertSTGroupAllDataTOSTGroupIndentification = (group?: api.STGroupAllData | null): api.STGroupIdentification | null => {
	if (!group) {
		return null;
	}
	const identification: api.STGroupIdentification = {
		id: group.id,
		description: group.description,
		endDate: group.endDate,
		isClosed: group.isClosed,
		isInfinite: group.isInfinite,
		isPrivate: group.isPrivate,
		name: group.name,
		numberOfMembers: group.numberOfMembers,
		numberOfMembersActive: group.numberOfMembersActive,
		owner: { ...group.owner },
		portfolio: { ...group.portfolio },
		startDate: group.startDate,
		startedPortfolio: { ...group.startedPortfolio },
		imagePath: group.imagePath,
		imageUrl: group.imageUrl,
		topMembers: group.topMembers,
		rank: { ...group.rank },
		createdDate: group.createdDate,
		lastEditedDate: group.lastEditedDate,
		lastUpdateDate: group.lastUpdateDate,
		watchedByUsers: group.watchedByUsers,
	};
	return identification;
};
