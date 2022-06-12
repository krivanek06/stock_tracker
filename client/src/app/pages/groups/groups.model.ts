import {NameValueContainer} from '@shared';

export enum GROUPS_PAGES {
    OVERVIEW = 'overview',
    DETAILS = 'details',
}

export enum GROUPS_PAGES_DETAILS {
    OVERVIEW = 'overview',
    STATS = 'stats',
}

export const GROUPS_PAGES_DETAILS_PATH: NameValueContainer[] = [
    {name: 'overview', value: GROUPS_PAGES_DETAILS.OVERVIEW},
    {name: 'statistics', value: GROUPS_PAGES_DETAILS.STATS}
];
