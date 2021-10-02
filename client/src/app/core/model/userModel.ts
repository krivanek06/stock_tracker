export enum USER_ACTIVITY {
	LOGGED_IN = 'LOGGED_IN',
	SIGNED_OUT = 'SIGNED_OUT',
}

export enum USER_STATUS {
	PENDING = 'PENDING',
	DENIED = 'DENIED',
	ALLOWED = 'ALLOWED',
}

export interface LoginIUser {
	email: string;
	password: string;
}

export interface RegisterIUser {
	email: string;
	password1: string;
	password2: string;
}

export const STARTING_PORTFOLIO = 100000;
