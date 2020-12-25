import {AppOptions} from "firebase-admin";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as user from './st-user/st-user.function';

admin.initializeApp(functions.firebaseConfig() as AppOptions);





export const  updateGroupIdsForUsers = user.updateGroupIdsForUsers;
