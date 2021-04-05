export const required = (value) => {

    if (value) return undefined;
    return 'Field is required';
};

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}