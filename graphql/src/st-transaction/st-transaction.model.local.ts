import * as api from 'stock-tracker-common-interfaces';

export interface PerformedTransaction {
    holdings: api.STTransaction[];
    lastTransaction: api.STTransaction;
}