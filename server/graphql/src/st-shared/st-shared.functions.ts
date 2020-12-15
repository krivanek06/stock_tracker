export const getCurrentIOSDate = () => {
    const today = new Date();
    today.setHours(today.getHours() + Math.abs(today.getTimezoneOffset()) / 60   );
    return today.toISOString();
}
