
export enum USER_ACTIVITY {
  SIGNED_IN = 'SIGNED_IN',
  SIGNED_OUT = 'SIGNED_OUT'
}

export enum USER_STATUS {
  PENDING = 'PENDING',
  DENIED = 'DENIED',
  ALLOWED = 'ALLOWED'
}

export interface User {
    uid: string;
    email: string;
    photoURL: string;
    displayName: string;
    providerId: string;
    nickname: string;
    locale: string;
    activity: USER_ACTIVITY;
    status: USER_STATUS;

  }

  export interface PrivateData {
    finnhubKey: string;
    roles?: string[];
  }
