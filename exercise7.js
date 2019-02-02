function reduce(arr, fn, initial) {
    // fn = prev, curr, index, arr
    console.log({arr, initial});
    if(!arr.length) return initial;
    const length = arr.length;
    const toOperate = arr[0];
    const nextElement = arr.slice(1);
    let index = 0;
    const result = fn(
        initial, toOperate, ++index, arr
    );
    return reduce(nextElement, fn, initial);
}

module.exports = reduce