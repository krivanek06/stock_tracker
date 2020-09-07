export interface IUser {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    phoneNumber?: string;
    nickname?: string;
    userPrivateData?: UserPrivateData;
}

export interface UserPrivateData {
    finnhubKey?: string;
}

export interface LoginIUser {
    username: string;
    password: string;
}
