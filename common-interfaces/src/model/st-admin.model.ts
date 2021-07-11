import { STSeriesNumber } from './st-chart.model';
import { STUserIndentification } from './st-user.model';
export interface STAdminMainInformations {
    /** update when setForceReloadStockDetails() is called */
    lastStockDetailsReload?: string; 
    /** number of all registrated users */
    usersRegistrated: number; 
    /** number of users who activated their private key through finnhub */
    usersActive: number;
    /** last N registrated users */
    usersRegistrationSnippets: STUserIndentification[];
    usersWeeklyRegistrated: STSeriesNumber[];
}


export enum ST_ADMIN_COLLECTION_ENUM {
    ADMIN_COL = 'admin',
    MAIN_INFORMATIONS_DOC = 'main_informations'
}
