export const stToTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};


export const stFormattedDate = (d: Date) => {
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(n => n < 10 ? `0${n}` : `${n}`).join('-');
};
