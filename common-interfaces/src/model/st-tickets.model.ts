import { STUserIndentificationBase } from './st-user.model';

export enum STTicketTypes {
    IMPROVEMENT = 'IMPROVEMENT',
    DEFECT = 'DEFECT'
}

export interface  STTicketComment {
    id: string;
    createdBy: STUserIndentificationBase;
    createdAt: string;
    comment: string;
}

export interface STTicket {
    id: string;
    name: string;
    type: STTicketTypes;
    message: string;
    createdBy: STUserIndentificationBase;
    createdAt: string;
    isOpen: boolean;
    comments: STTicketComment[];
}


export interface STTicketCreateValues {
    name: string;
    type: STTicketTypes
    message: string;
}

export const ST_TICKETS_COLLECTIONS = 'tickets';