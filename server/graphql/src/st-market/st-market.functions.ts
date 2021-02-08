import * as api from 'stock-tracker-common-interfaces';
import {zip} from 'lodash';

export const convertToSTMarketChartDataResultCombined = (data: api.STMarketChartDataResultAPI): api.STMarketChartDataResultCombined => {
    const result: api.STMarketChartDataResultCombined = {
        currentDate: data.currentDate,
        currentValue: data.currentValue,
        documentKey: data.documentKey,
        name: data.name,
        lastUpdate: data.lastUpdate,
        parentName: data.parentName,
        data: zip(data.timestamp, data.data)
    };
    return result;
}
