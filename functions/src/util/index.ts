export * from './group.function';
export * from './lodash.functions';
export * from './portfolio.functions';
export * from './user.functions';

export const customSleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
