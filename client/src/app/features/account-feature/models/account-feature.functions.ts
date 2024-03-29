import { StUserEditDataInput } from '@core';
import { UserAccountForm } from './account-feature.model';

export const convertUserAccountFormToStUserEditDataInput = (userId: string, accountForm: UserAccountForm): StUserEditDataInput => {
	const editInput: StUserEditDataInput = {
		userId,
		finnhubKey: !!accountForm.finnhubKey ? accountForm.finnhubKey.trim() : null,
		photoURL: accountForm.photoURL.trim(),
	};

	return editInput;
};
