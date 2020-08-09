import { ApolloError } from 'apollo-server';
import { User } from './user.model';
import * as admin from "firebase-admin";

export const updateUserData = async(user: User) => {
    try{   
        const userRef = admin.firestore().collection('users').doc(`${user.uid}`);
        const data = {...user};
        await userRef.set(data, {merge: true});

        return user;

    }catch (error) {
    throw new ApolloError(error);
  }
}

