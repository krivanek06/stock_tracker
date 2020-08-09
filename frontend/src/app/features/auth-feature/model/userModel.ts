export interface IUser {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    phoneNumber?: string;
    nickname?: string;
}


export interface LoginIUser {
    username: string;
    password: string;
}
