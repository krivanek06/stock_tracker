export const validatorFinhubKeyValidity = async (finuhbKey: string): Promise<boolean> => {
	try {
		const res = await global.fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${finuhbKey}`);

		return res.status == 200;
	} catch (error) {
		return false;
	}
};
