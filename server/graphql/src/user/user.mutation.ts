import { ApolloError } from 'apollo-server';
import { PrivateData, User, USER_ACTIVITY, USER_STATUS } from './user.model';
import * as admin from "firebase-admin";

export const registerUser = async(user: User) => {
  try{   
      
      const newUser: User = {...user, activity: USER_ACTIVITY.SIGNED_OUT, status: USER_STATUS.PENDING};

      const userRef = admin.firestore().collection('users').doc(`${user.uid}`);

      await userRef.set(newUser);

      return newUser;

  }catch (error) {
    throw new ApolloError(error);
  }
}



// TODO secure updating "status" field only for authorized users
export const updateUserData = async(user: User) => {
    try{   
        const userRef = admin.firestore().collection('users').doc(`${user.uid}`);

        await userRef.set(user, {merge: true});

        const data = await userRef.get();

        return data.data();

    }catch (error) {
      throw new ApolloError(error);
    }
}


export const updateUserPrivateData = async(uid: string, userPrivateDataInput: PrivateData) => {
  try{   
      console.log(uid, userPrivateDataInput )
      const userPrivateDocsRef = await admin.firestore()
                  .collection('users')
                  .doc(uid)
                  .collection('privateData')
                  .doc(`privateData_${uid}`);

      await userPrivateDocsRef.set(userPrivateDataInput, {merge: true});

      return userPrivateDataInput;

  }catch (error) {
    throw new ApolloError(error);
  }
}
