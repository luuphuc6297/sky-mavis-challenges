export const formatter = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
});

//@ts-ignore
export const numberWithSpaces = (address) => {
    return address.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
};
