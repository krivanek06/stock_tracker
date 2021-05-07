import {Injectable} from '@angular/core';
import {
    QueryStTradingStrategiesGQL,
    QueryStTradingStrategyDataGQL,
    StTradingStrategyData,
    StTradingStrategyEnum,
    StTradingStrategySearch
} from '../graphql-schema';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GraphqlTradingStrategyService {

    constructor(private queryStTradingStrategiesGQL: QueryStTradingStrategiesGQL,
                private queryStTradingStrategyDataGQL: QueryStTradingStrategyDataGQL) {

    }

    queryStTradingStrategies(): Observable<StTradingStrategySearch> {
        return this.queryStTradingStrategiesGQL.fetch().pipe(map(res => res.data.querySTTradingStrategies));
    }

    queryStTradingStrategyDataRWB(symbol: string): Observable<StTradingStrategyData> {
        return this.queryStTradingStrategyDataGQL.fetch({
            symbol,
            strategy: StTradingStrategyEnum.RedWhiteBlue
        }).pipe(map(res => res.data.querySTTradingStrategyData));
    }

    queryStTradingStrategyDataGLB(symbol: string): Observable<StTradingStrategyData> {
        return this.queryStTradingStrategyDataGQL.fetch({
            symbol,
            strategy: StTradingStrategyEnum.GreenLineBreakout
        }).pipe(map(res => res.data.querySTTradingStrategyData));
    }

    queryStTradingStrategyDataRPP(symbol: string): Observable<StTradingStrategyData> {
        return this.queryStTradingStrategyDataGQL.fetch({
            symbol,
            strategy: StTradingStrategyEnum.ResistancePivotPoints
        }).pipe(map(res => res.data.querySTTradingStrategyData));
    }

    queryStTradingStrategyDataEMV(symbol: string): Observable<StTradingStrategyData> {
        return this.queryStTradingStrategyDataGQL.fetch({
            symbol,
            strategy: StTradingStrategyEnum.ExtendedMarkerVerification
        }).pipe(map(res => res.data.querySTTradingStrategyData));
    }

    queryStTradingStrategyDataRMC(symbol: string): Observable<StTradingStrategyData> {
        return this.queryStTradingStrategyDataGQL.fetch({
            symbol,
            strategy: StTradingStrategyEnum.RiskManagementCalculator
        }).pipe(map(res => res.data.querySTTradingStrategyData));
    }
}
