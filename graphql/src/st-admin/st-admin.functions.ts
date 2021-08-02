import * as api from 'stock-tracker-common-interfaces';
export const createNewUserRegistrationDoc = (): api.STAdminMainInformations => {
    const doc: api.STAdminMainInformations = {
        usersRegistrated: 0,
        usersActive: 0,
        usersRegistrationSnippets: [],
        usersWeeklyRegistrated: [{
            data: 0,
            timestamp: new Date().getTime()
        }]
    }
    return doc;
}