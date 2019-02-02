function countWords(inputWords) {
    const reducer = (accumulator, curr) => {
        if(accumulator[curr] !== undefined) {
            accumulator[curr] += 1;
        } else {
            accumulator[curr] = 1;
        }
        return accumulator;
    };
    return inputWords.reduce(reducer, {});
}

module.exports = countWords