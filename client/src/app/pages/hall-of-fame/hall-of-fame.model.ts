import { NameValueContainer } from '@shared';

export interface HallOfFameColorsInt {
	titleColor: string;
	cardBackgroundColor: string;
}

export const PortfolioChangeKeys: string[] = ['day_1_change'];

export const HallOfFameColors: HallOfFameColorsInt[] = [
	{
		titleColor: '#d11b1b',
		cardBackgroundColor: '#810e0e',
	},
	{
		titleColor: '#2da7d7',
		cardBackgroundColor: '#206a87',
	},
	{
		titleColor: '#ad13f9',
		cardBackgroundColor: '#692989',
	},
	{
		titleColor: '#41c3b2',
		cardBackgroundColor: '#12544c',
	},
	{
		titleColor: '#e78823',
		cardBackgroundColor: '#70481d',
	},
	{
		titleColor: '#6f3fff',
		cardBackgroundColor: '#554487',
	},
	{
		titleColor: '#f900d9',
		cardBackgroundColor: '#832076',
	},
	{
		titleColor: '#63d597',
		cardBackgroundColor: '#326e4e',
	},
	{
		titleColor: '#f5cb4f',
		cardBackgroundColor: '#786426',
	},
	{
		titleColor: '#fb5252',
		cardBackgroundColor: '#812c2c',
	},
	{
		titleColor: '#3ea95a',
		cardBackgroundColor: '#294e32',
	},
	{
		titleColor: '#b0d935',
		cardBackgroundColor: '#555a25',
	},
];

export const HallOfFamePages: NameValueContainer[] = [
	{ name: 'Users', value: 'users' },

	{ name: 'Groups', value: 'groups' },
];

export const HallOfFameUserSubPages: NameValueContainer[] = [
	{ name: 'Best users', value: 'best-users' },
	{ name: 'Worst users', value: 'worst-users' },
];
