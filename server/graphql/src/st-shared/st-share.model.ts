export interface STLog {
    date: Date;
    logText: string;
}

export interface STSimpleChart {
    date: Date;
    data: number;
    label?: string;
}


export interface STInputFieldChange {
    inputField: String
}

export interface STGeographic {
    longitude: any;
    latitude: any;
}


