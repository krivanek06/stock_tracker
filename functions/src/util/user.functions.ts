import * as api from 'stock-tracker-common-interfaces';

export const convertSTUserPublicDataToSTUserIndentification = (publicData: api.STUserIndentification): api.STUserIndentification => {
	const identification: api.STUserIndentification = {
		accountCreatedDate: publicData.accountCreatedDate,
		locale: publicData.locale,
		nickName: publicData.nickName,
		photoURL: publicData.photoURL,
		id: publicData.id,
	};
	return identification;
};

export const convertSTUserPublicDataToSTUserIndentificationWithPortfolio = (
	publicData?: api.STUserIndentificationWithPortfolio
): api.STUserIndentificationWithPortfolio | null => {
	if (!publicData) {
		return null;
	}
	const identification: api.STUserIndentificationWithPortfolio = {
		...convertSTUserPublicDataToSTUserIndentification(publicData),
		portfolio: publicData.portfolio,
	};
	return identification;
};
