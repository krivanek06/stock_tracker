import { Context } from './../st-shared/st-shared.interface';
import * as api from "stock-tracker-common-interfaces";


/**
 * Return top 3 members from each group and 4th member will be user who makes query ifhe is part of the group
 */
export const resolveTopMembers = async(stGroupPartialData: api.STGroupPartialData, {requesterUserId}: Context) => {
    console.log('requesterUserId', requesterUserId)
    return [];
}


export const stGroupResolvers = {
    STGroupAllData: {
        topMembers: async (stGroupPartialData: api.STGroupPartialData, context: Context) => await resolveTopMembers(stGroupPartialData, context)
    }
};
