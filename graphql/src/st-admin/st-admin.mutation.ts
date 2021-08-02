import { registerUser } from './../user/user.mutation';
import { ApolloError } from 'apollo-server';
import { queryAdminMainInformations } from './st-admin.query';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';

export const addNewUserIntoUserRegistration = async(userIdentification: api.STUserIndentification): Promise<void> => {
    try{
        const userRegistrationDoc = await queryAdminMainInformations();
        const weeklyRegistratedUsers = [...userRegistrationDoc.usersWeeklyRegistrated];
        
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

        const data: api.STAdminMainInformations = {
            usersRegistrated: userRegistrationDoc.usersRegistrated + 1,
            usersActive: userRegistrationDoc.usersActive + 0,
            usersRegistrationSnippets: [userIdentification, ...userRegistrationDoc.usersRegistrationSnippets.slice(0, 10)],
            usersWeeklyRegistrated: weeklyRegistratedUsers
        }

        await admin.firestore().collection(api.ST_ADMIN_COLLECTION_ENUM.ADMIN_COL)
                                .doc(api.ST_ADMIN_COLLECTION_ENUM.MAIN_INFORMATIONS_DOC)
                                .set(data);
    } catch (error) {
        throw new ApolloError(error);
    }
}