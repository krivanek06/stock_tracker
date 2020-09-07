import { ApolloError } from 'apollo-server';
import { User, UserPrivateDataInput } from './user.model';
import * as admin from "firebase-admin";

export const updateUserData = async(user: User) => {
    try{   
        const userRef = admin.firestore().collection('users').doc(`${user.uid}`);

        await userRef.set({...user}, {merge: true});

        return user;

    }catch (error) {
    throw new ApolloError(error);
  }
}


export const updateUserPrivateData = async(uid: string, userPrivateDataInput: UserPrivateDataInput) => {
  try{   
      console.log(uid, userPrivateDataInput )
      const userPrivateDocsRef = await admin.firestore()
                  .collection('users')
                  .doc(`${uid}`)
                  .collection('privateData')
                  .doc(`privateData_${uid}`);

      await userPrivateDocsRef.set({...userPrivateDataInput}, {merge: true});

      return userPrivateDataInput;

  }catch (error) {
    throw new ApolloError(error);
  }
}
