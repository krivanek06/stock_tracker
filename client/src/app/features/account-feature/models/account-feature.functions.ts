import {StPortfolioFragmentFragment, StUserEditDataInput} from '../../../api/customGraphql.service';
import {UserAccountForm} from './account-feature.model';

export const convertUserAccountFormToStUserEditDataInput = (userId: string, accountForm: UserAccountForm): StUserEditDataInput => {
    const editInput: StUserEditDataInput = {
        userId,
        finnhubKey: accountForm.finnhubKey.trim(),
        nickName: accountForm.nickName.trim(),
        photoURL: accountForm.photoURL.trim()
    };

    return editInput;
};


export const resetedPortfolio = (): StPortfolioFragmentFragment => {
    const portfolio: StPortfolioFragmentFragment = {
        __typename: 'STPortfolio',
        portfolioWeeklyGrowth: 0,
        portfolioCash: 15000,
        portfolioInvested: 0,
        portfolioWeeklyChange: 0
    };
    return portfolio;
};

