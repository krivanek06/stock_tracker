import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";

export const queryTransaction = async (transactionId: string): Promise<api.STTransaction> => {
    try {
        const transactionDoc = await admin.firestore().collection(api.ST_TRANSACTION_COLLECTION).doc(transactionId).get();
        return transactionDoc.data() as api.STTransaction;
    } catch (error) {
        throw new ApolloError(error);
    }
}
