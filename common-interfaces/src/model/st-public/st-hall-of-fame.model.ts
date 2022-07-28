import { STGroupIdentification } from "../st-group.model";
import { STUserIndentificationWithPortfolio } from "../st-user.model";

export interface STHallOfFameEntityGains<T> {
    day_1_change_prct: T[];
    day_1_change_number: T[];
    // weekly
    week_1_change_prct: T[];
    week_1_change_number: T[];
    week_2_change_prct: T[];
    week_2_change_number: T[];
    week_3_change_prct: T[];
    week_3_change_number: T[];
    // monthly
    month_1_change_prct: T[];
    month_1_change_number: T[];
}

export interface STHallOfFameEntity<T> {
    highestPortfolio: T[];
    bestGainers?: STHallOfFameEntityGains<T> | null;
    wortGainers?: STHallOfFameEntityGains<T> | null;
    lastUpdateDate: string;
    total: number;
}

export interface STHallOfFame {
    users: STHallOfFameEntity<STUserIndentificationWithPortfolio>;
    groups: STHallOfFameEntity<STGroupIdentification> ;
}
