export const getCurrentIOSDate = (): string => {
    const today = new Date();
    //today.setHours(today.getHours() + Math.abs(today.getTimezoneOffset()) / 60);
    return today.toISOString();
}

export const datesAreOnSameDay = (a: string, b: string): boolean => {
    const first = new Date(a);
    const second = new Date(b);
    return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}


export const stSeep = (ms): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
