export const formatter = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
});

export const numberWithSpaces = (address: string | number | any) => {
    return address.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
};

export const formatHideAddress = (address: string | number | any) => {
    const convertToString = address.toString();
    return convertToString.slice(0, 4) + '...' + convertToString.slice(-4);
};
