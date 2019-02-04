module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc, curr, index, src) => {
        acc.push(fn(curr));
        return acc;
    }, [])
}