import { STSeriesNumber } from './st-chart.model';
import { STUserIndentification } from './user.model';
export interface STUserRegistrationDoc {
    totalRegistratedUsers: number;
    totalActiveUsers: number;
    userRegistrationSnippets: STUserIndentification[];
    weeklyRegistratedUsers: STSeriesNumber[];
}


export enum ST_ADMIN_COLLECTION_ENUM {
    ADMIN_COL = 'admin',
    USER_REGISTRATION_DOC = 'user_registration'
}
