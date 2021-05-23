import { createNewUserRegistrationDoc } from './st-admin.functions';
import { ApolloError } from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
export const queryUsersRegistration = async(): Promise<api.STUserRegistrationDoc> => {
    try{
        const userRegistrationDoc = await admin.firestore().collection(api.ST_ADMIN_COLLECTION_ENUM.ADMIN_COL)
                                                     .doc(api.ST_ADMIN_COLLECTION_ENUM.USER_REGISTRATION_DOC)
                                                     .get();
        const userRegistrationData = userRegistrationDoc.data() as api.STUserRegistrationDoc;

        return userRegistrationData || createNewUserRegistrationDoc();
    } catch (error) {
        throw new ApolloError(error);
    }
}