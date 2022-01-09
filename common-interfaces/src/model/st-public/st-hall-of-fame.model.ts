import { STGroupIdentification } from "../st-group.model";
import { STUserIndentificationWithPortfolio } from "../st-user.model";

export interface STHallOfFame {
    users: STHallOfFameUsers;
    groups: STHallOfFameGroups;
}

export interface STHallOfFameEntity<T> {
    highestPortfolio: T[];
    weeklyBestGainsPrct: T[];
    weeklyWorstGainsPrct: T[];
    lastUpdateDate: string;
    total: number;
}

export interface STHallOfFameUsers extends STHallOfFameEntity<STUserIndentificationWithPortfolio> {
    
}

export interface STHallOfFameGroups extends STHallOfFameEntity<STGroupIdentification>  {

}