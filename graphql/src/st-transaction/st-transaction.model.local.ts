import * as api from 'stock-tracker-common-interfaces';

export interface PerformedTransaction {
    holding: api.STHolding;
    transaction: api.STTransaction;
}