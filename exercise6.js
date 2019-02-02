function countWords(inputWords) {
    const reducer = (accumulator, curr) => {
        accumulator[curr] = ++accumulator[curr] || 1;
        return accumulator;
    };
    return inputWords.reduce(reducer, {});
}

module.exports = countWords