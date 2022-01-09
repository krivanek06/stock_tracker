import { StGroupAllDataInput, StUserIdentificationDataFragment } from '@core';
import { GroupForm } from '../model';

export const createSTGroupAllDataInput = (form: GroupForm, invitationSent: StUserIdentificationDataFragment[]): StGroupAllDataInput => {
	return {
		name: form.name,
		description: form.description,
		imagePath: form.imagePath,
		imageUrl: form.imageUrl,
		endDate: form.endDate,
		startDate: form.startDate,
		isInfinite: form.isInfinite,
		isPrivate: form.isPrivate,
		isOwnerAlsoMember: form.isOwnerAlsoMember,
		invitationReceived: [],
		invitationSent: [...invitationSent.map((x) => x.id)],
	};
};
