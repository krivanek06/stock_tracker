import { STUserIndentificationInformation } from './user.model';


export interface STTransaction {
    isOpen: boolean;
    shortName: string;
    longName: string;
    user: STUserIndentificationInformation
    priceBought: number;
    priceSold: number;
    priceProfit: number;
    units: number;
    date: Date;
}
