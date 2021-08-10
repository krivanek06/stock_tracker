import * as api from 'stock-tracker-common-interfaces';

export const convertSTUserPublicDataToSTUserIndentification = (publicData: api.STUserPublicData): api.STUserIndentification => {
	const identification: api.STUserIndentification = {
		accountCreatedDate: publicData.accountCreatedDate,
		locale: publicData.locale,
		nickName: publicData.nickName,
		photoURL: publicData.photoURL,
		id: publicData.id,
	};
	return identification;
};
