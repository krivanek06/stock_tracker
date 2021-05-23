import * as api from 'stock-tracker-common-interfaces';
export const createNewUserRegistrationDoc = (): api.STUserRegistrationDoc => {
    const doc: api.STUserRegistrationDoc = {
        totalRegistratedUsers: 0,
        totalActiveUsers: 0,
        userRegistrationSnippets: [],
        weeklyRegistratedUsers: [{
            data: 0,
            timestamp: new Date().getTime()
        }]
    }
    return doc;
}