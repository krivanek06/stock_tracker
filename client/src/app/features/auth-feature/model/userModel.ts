export enum USER_ACTIVITY {
    LOGGED_IN = 'LOGGED_IN',
    SIGNED_OUT = 'SIGNED_OUT'
}

export enum USER_STATUS {
    PENDING = 'PENDING',
    DENIED = 'DENIED',
    ALLOWED = 'ALLOWED'
}
/*
export interface STUserPublicData {
    uid: string;
    email: string;
    photoURL?: string;
    providerId: string;
    displayName: string;
    nickname?: string;
    locale?: string;
    lastLogin?: Date;
    activity?: USER_ACTIVITY;
    status?: USER_STATUS;
    userPrivateData?: UserPrivateData;
}

export interface UserPrivateData {
    finnhubKey?: string;
    roles?: string[];
}

export interface STUserFirebaseAuthentication {
    uid: string;
    locale: string;
    photoURL: string;
    email: string;
    displayName: string;
    providerId: string;
    accountCreatedDate: Date;
    lastSignInDate: Date;
}*/

export interface LoginIUser {
    email: string;
    password: string;
}

export interface RegisterIUser {
    email: string;
    password1: string;
    password2: string;
}
