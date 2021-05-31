export const stToTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};

export const lastElement = <T extends unknown>(elementArray: T[]): T => elementArray.slice(-1)[0];

export const stFormatLargeNumber = (value: number) => {
    if (!stIsNumber(value)) {
        return 'N/A';
    }

    let symbol = '';
    if (value > 1000 || value < -1000) {
        value = value / 1000;
        symbol = 'K';
    }

    if (value > 1000 || value < -1000) {
        value = value / 1000;
        symbol = 'M';
    }

    if (value > 1000 || value < -1000) {
        value = value / 1000;
        symbol = 'B';
    }

    if (value > 1000 || value < -1000) {
        value = value / 1000;
        symbol = 'T';
    }
    const result = value.toFixed(2);
    return result + symbol;
};

export const stIsNumber = (value: string | number): boolean => {
    return ((value != null) &&
        (value !== '') &&
        !isNaN(Number(value.toString())));
};

// return YYYY-MM-DD
export const stFormattedDate = (d: Date) => {
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(n => n < 10 ? `0${n}` : `${n}`).join('-');
};

// HH:MM, DD.MM.YYYY
export const stFormatDateWithHours = (date: Date) => {
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    return `${hours}:${minutes}, ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};


