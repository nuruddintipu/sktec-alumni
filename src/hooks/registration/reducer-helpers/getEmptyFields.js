export const getEmptyFields = (fields) => {
    return Object.keys(fields).filter((field) =>
            fields[field] === "" || fields[field] === null || fields[field] === undefined);
};