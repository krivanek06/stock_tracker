import * as api from 'stock-tracker-common-interfaces';

export const createNewSTStockDailyInformations = (): api.STStockDailyInformations => {
    return {
        dailySuggestions: [],
        dailyTopGains: [],
        dailyTopLosers: [],
        dailySuggestonsLastUpdatedDate: null,
        dailyToplastUpdatedDate: null
    }
}
