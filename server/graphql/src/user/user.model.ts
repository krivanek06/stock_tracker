export interface User {
    uid: string;
    name: string;
    email: string;
    photoURL: string;
    providerId: string;
    nickname: string;
    locale: string;

  }

  export interface UserPrivateDataInput {
    finnhubKey: string;
  }
  

  export interface PrivateData {
    finnhubKey: string;
  }
