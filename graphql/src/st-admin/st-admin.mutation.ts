import { ApolloError } from 'apollo-server';
import { queryUsersRegistration } from './st-admin.query';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';

export const addNewUserIntoUserRegistration = async(userIdentification: api.STUserIndentification): Promise<void> => {
    try{
        const userRegistrationDoc = await queryUsersRegistration();
        const weeklyRegistratedUsers = [...userRegistrationDoc.weeklyRegistratedUsers];
        
        // check if in same week
        if(moment().isSame(moment(weeklyRegistratedUsers.slice(-1)[0].timestamp), 'week')){
            weeklyRegistratedUsers.slice(-1)[0].data += 1;
        }else {
            // user is registrated on different week than last registrated user
            weeklyRegistratedUsers.push({
                data: 1,
                timestamp: new Date().getTime()
            })
        }

        const data: api.STUserRegistrationDoc = {
            totalRegistratedUsers: userRegistrationDoc.totalRegistratedUsers + 1,
            totalActiveUsers: userRegistrationDoc.totalActiveUsers + 0,
            userRegistrationSnippets: [userIdentification, ...userRegistrationDoc.userRegistrationSnippets.slice(0, 10)],
            weeklyRegistratedUsers: weeklyRegistratedUsers
        }

        await admin.firestore().collection(api.ST_ADMIN_COLLECTION_ENUM.ADMIN_COL)
                                .doc(api.ST_ADMIN_COLLECTION_ENUM.USER_REGISTRATION_DOC)
                                .set(data);
    } catch (error) {
        throw new ApolloError(error);
    }
}