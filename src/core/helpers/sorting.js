// returns an array of string sorted alphabetically
export function sortByName(names) {
    const cloneNames = [...names];
    return cloneNames.sort();
}

// returns an array of numbers sorted numerically
export function sortByNumber(numbers) {
    const cloneNumbers = [...numbers];
    return cloneNumbers.sort((a, b) => a-b);
}