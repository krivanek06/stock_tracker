export const getCurrentIOSDate = () => {
    const today = new Date();
    today.setHours(today.getHours() + Math.abs(today.getTimezoneOffset()) / 60);
    return today.toISOString();
}


export const stSeep = (ms): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
